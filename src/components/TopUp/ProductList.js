import { getAllProducts } from "../../slices/Product/productSlice.js";
import Product from "./Product.js";
import { Row } from "reactstrap";

const ProductList = (props) => {
    const products = getAllProducts();
    console.log(products)

    return (
        
            <Row className='cust-wrap flex jcc aic'>
                {
                    products.map(
                        (product, idx) => {
                            return (
                                <Product 
                                    key={idx}
                                    name={product.name}
                                    price={product.price}
                                    value={product.value}
                                    vip={product.vip}

                                    /* special booleans and percents */
                                    special={product.special_offer}
                                    popular={product.popular}
                                    discount={product.discount} /* percent */
                                /> 
                            );
                        }
                    )
                }
            </Row>
    );
}

export default ProductList