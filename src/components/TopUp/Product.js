import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import VerticalSpacing from "../Styling/VerticalSpacing.js";

const Product = (props) => {
    let { name, price, value, vip, special, popular, discount, prod_id } = props;

    const Paddle = window.Paddle;
    console.log(Paddle);
    const handleTrigger = (e) => {
        e.preventDefault();
        Paddle.Checkout.open({
            product: prod_id,
            //email: email, /* store.getState().account.email */
            successCallback: (data, err) => {
                console.log('data: '+data);
                if (err) console.log('error: '+err)
            }
        })
    }

    return (
        <Col className='col-4 mx-auto flex jcc aic'>
            <div onClick={handleTrigger} className='box flex jcc aic'>
                <div className='content flex jcc aic'>
                    <h2 className='product-text'>{name}</h2>
                    <p className='product-price'>${price}</p>
                </div>
            </div>
        </Col>
    );
}

export default Product