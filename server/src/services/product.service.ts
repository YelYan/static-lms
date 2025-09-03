import Product, {IProduct} from "#models/product.model.js";

class ProductService {
    public async createProduct (productData : IProduct) {
        const newProduct = await Product.create(productData);
        return newProduct;
    }
    public async getAllProducts () {
        return await Product.find({});
    }
}

export default new ProductService();