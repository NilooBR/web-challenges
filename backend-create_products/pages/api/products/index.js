import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find();

    response.status(200).json(products);
    return;
  }

  if (request.method === "POST") {
    try {
      const productData = request.body;
      const newProduct = await Product.create(productData);

      console.log("Product created: ", newProduct);
      response
        .status(201)
        .json({ status: "Product created", product: newProduct });
    } catch (error) {
      console.error("Error creating product:", error);
      response
        .status(500)
        .json({ status: "Error creating product", error: error.message });
    }
    return;
  }

  response.status(405).json({ status: "Method not allowed." });
}
