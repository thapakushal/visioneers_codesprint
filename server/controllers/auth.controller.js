import { Shop } from "../models/shop.models.js";
import { User } from "../models/user.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { AppError } from "../utils/AppError.js";
import { asyncHandler } from "../utils/Asynchandler.js";

// Generate access and refresh tokens for sessions
const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId).select("-password -refreshToken");
    if (!user) {
      throw new AppError(404, "User not found");
    }
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new AppError(500, "Something went wrong");
  }
};

// Controller to Register the individual user
const registerIndividualUser = asyncHandler(async (req, res) => {
  const { fullName, email, password, phone } = req.body;

  if (!fullName?.trim() || !email?.trim() || !password?.trim()) {
    throw new AppError(400, "All fields are required");
  }

  if (password.length < 8) {
    throw new AppError(400, "Password must be at least 8 characters long");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new AppError(400, "Email already exists");
  }

  const user = await User.create({
    fullName,
    email,
    password,
    phoneNumber: phone,
    role: "user",
  });

  return res.status(201).json(new ApiResponse(201, user, "User registered successfully"));
});

// Controller to Register the shopkeeper user
const registerShopkepper = asyncHandler(async (req, res) => {
  const { fullName, email, password, phone, shopName } = req.body;

  if (!fullName?.trim() || !email?.trim() || !password?.trim() || !shopName?.trim() || !phone?.trim()) {
    throw new AppError(400, "All fields are required");
  }

  if (password.length < 8) {
    throw new AppError(400, "Password must be at least 8 characters long");
  }

  if (phone.length < 8) {
    throw new AppError(400, "Phone number must be at least 8 characters long");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new AppError(400, "Email already exists");
  }

  // Create user with role 'shopkepper'
  const user = await User.create({
    fullName,
    email,
    password,
    phoneNumber: phone,
    role: "shopkepper",
  });

  // Create shop linked to this user
  const shop = await Shop.create({
    userId: user._id,
    shopName,
  });

  return res.status(201).json(new ApiResponse(201, { user, shop }, "Shopkeeper registered successfully"));
});

// Controller to login the user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email?.trim() || !password?.trim()) {
    throw new AppError(400, "All fields are required");
  }
  if (password.length < 8) {
    throw new AppError(400, "Password is of 8 digits.");
  }
  const user = await User.findOne({ email: email }).select("+password");
  if (!user) {
    throw new AppError(400, "User doesn't exist");
  }
  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    throw new AppError(401, "Password is incorrect");
  }
  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id);
  const loggedUser = await User.findById(user._id);
  const options = {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  };
  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(new ApiResponse(200, loggedUser, "User logged in successfully"));
});

// Controller to logout the user
const logOutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: undefined,
      },
    },
    { new: true }
  );

  const options = {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  };
  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, null, "User logged out"));
});

export { registerIndividualUser, registerShopkepper, loginUser, logOutUser };
