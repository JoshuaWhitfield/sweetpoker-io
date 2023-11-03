import { PRODUCTS } from "../../app/shared/PRODUCTS.js";

export const getAllProducts = () => {
    return PRODUCTS()
}

export const getProductByValue = (value) => {
    const products = getAllProducts();
    let result = false;

    result = products.map(
        (product) => {
            if (product.value === value) return product;
        }
    )

    return result;
}