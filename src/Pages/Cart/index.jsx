import { useSelector } from "react-redux";
import CartList from "../../Components/CartList";
import Header from "../../Components/Header";
import TotalPrice from "../../Components/TotalPrice";
import "../../Styles/cart.css";

const Cart = () => {
    const cartList = useSelector((state) => state.productCart);

    return (
        <div className="container">
            {cartList.length > 0 ? (
                <>
                    <div className="header">
                        <Header />
                    </div>
                    <div className="general_cart">
                        <div className="list_cart">
                            <CartList />
                        </div>
                        <div className="total_price">
                            <TotalPrice />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="header">
                        <Header />
                    </div>
                    <div className="general_cart">
                        <div className="list_cart">
                            <CartList />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
