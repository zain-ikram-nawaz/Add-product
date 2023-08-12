import { addProduct, getAllProducts, addComments} from "@/services/products";

export default function handler(req, res) {
  if (req.method === "GET") {
    const products = getAllProducts();
    return res.status(200).json(products);
  }
  if (req.method === "POST") {
    const { title, price, description,commentx} = req.body;
    const updatedProducts = addProduct(title, price, description);
    // const {comment} = req.body
    const updatecomt =addComments(commentx)
  
    return res.status(201).json(updatedProducts,updatecomt);
    
  }
  return res.status(404).json({ message: "Not found" });
}
// api me jab data ajata hai tw osko render karwa skty han fetch k zariye