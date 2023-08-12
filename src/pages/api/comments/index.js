import { addComments } from "@/services/products";
export default function handler(req, res) {
    
    if (req.method === "POST") {
      const {commentx} = req.body;
      const updatecomt =addComments(commentx)
    console.log(updatecomt);
      return res.status(201).json(updatecomt);
      
    }
    return res.status(404).json({ message: "Not found" });
  }