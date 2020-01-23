import products from "../../products.json";

class ProductsService {
  static getProducts() {
    return products;
  }

  static getProductsById(id) {
    return products.find(product => product.id === id);
  }
}

export default ProductsService;
