import mongoose from "mongoose";
import { Schema } from "mongoose";

const shopSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    shopName: {
      type: String,
      required: true,
    },
    shopCategory: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Shop = mongoose.model("Shop", shopSchema);
