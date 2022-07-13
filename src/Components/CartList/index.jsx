import "../../Styles/cartList.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeCartThunk } from "../../store/modules/cart/thunk";
import { products } from "../../Services";
import toast from "react-hot-toast";

const CartList = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const cartList = useSelector((state) => state.productCart);
    console.log(cartList);

    const removeProduct = (product) => {
        dispatch(removeCartThunk(product));
        toast.error("Batata Removida");
    };

    const goHome = () => {
        history.push("/");
    };

    return (
        <div className="cart_container_list">
            {cartList.length > 0 ? (
                cartList.map((data, index) => (
                    <div className="cart_list_products" key={index}>
                        <div className="cart_items">
                            <img src={data.image} alt={data.name} />
                            <h2> {data.name} </h2>
                            <span>
                                {data.price.toLocaleString("pt-br", {
                                    style: "currency",
                                    currency: "BRL",
                                })}
                            </span>
                        </div>
                        <button className="btn_rmv" onClick={() => removeProduct(data)}>
                            Remover
                        </button>
                    </div>
                ))
            ) : (
                <div className="cart_empty">
                    <h1 className="h1_empty"> Carrinho Vazio, adicione itens! </h1>
                    <button onClick={goHome} className="button_empty">
                        Compre Aqui
                    </button>
                </div>
            )}
        </div>
    );
};

export default CartList;
