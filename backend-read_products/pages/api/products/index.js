import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  //Bridge: connect to whole DB
  await dbConnect();

  if (request.method === "GET") {
    //which table(collection) do you want to connect to
    const products = await Product.find();
    response.status(200).json(products);
  } else {
    response.status(405).json({ status: "Method not allowed" });
  }
}
