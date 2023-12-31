import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src", "database", "db.json");

export function getAllProducts() {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

export function getProductById(id) {
  const { products } = getAllProducts();
  const productDetail = products.find((item) => item.id === id);
  return productDetail;
}

export function addProduct(title, price, description) {
  const { products } = getAllProducts();
  products.push({
    id: products.length + 1,
    title,
    price,
    description,

  });
  fs.writeFileSync(filePath, JSON.stringify({ products }));

  return products;
}
export function addComments(comment){
  const { products } = getAllProducts();
  products.commets.push({
    comment,
  });
  fs.writeFileSync(filePath, JSON.stringify({ products }));
}