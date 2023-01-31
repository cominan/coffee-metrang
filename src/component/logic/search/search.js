import { totalArrayProduct } from "../../../config";

export function search(value, data) {
    let products = totalArrayProduct(data)
   return products.filter(product => (product.title.toLowerCase()).includes(value))
}