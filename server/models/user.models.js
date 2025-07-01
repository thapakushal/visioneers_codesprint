import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Schema } from "mongoose";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      select: false,
    },
    address: {
      type: String,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
    },
    profilePicturePublicId: {
      type: String,
      select: false,
    },
    profilePicturePublicUrl: {
      type: String,
    },
    refreshToken: {
      type: String,
      select: false,
    },
    role: {
      type: String,
      enum: ["user", "admin", "shopkepper"],
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign({ _id: this._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign({ _id: this._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "10d" });
};

export const User = mongoose.model("User", userSchema);
