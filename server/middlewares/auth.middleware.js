import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/Asynchandler.js";
import { AppError } from "../utils/AppError.js";
import { User } from "../models/user.models.js";

export const verifyJWT = asyncHandler(async (req, res, next) => {
  const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    throw new AppError(401, "Unauthorized access");
  }

  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  } catch (err) {
    throw new AppError(401, "Invalid or expired token");
  }

  const user = await User.findById(decodedToken?._id).select("-password -refreshToken");
  if (!user) {
    throw new AppError(404, "Invalid token");
  }

  req.user = user;
  next();
});
