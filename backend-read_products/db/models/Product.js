import mongoose from "mongoose";
import Review from "./Review";

const { Schema } = mongoose;
const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
  reviews: { type: [Schema.Types.ObjectId], ref: "Review" },
});
//once you created used the cache
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
