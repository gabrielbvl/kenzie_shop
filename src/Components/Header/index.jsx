import { useHistory } from "react-router-dom";
import "../../Styles/header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ImEnter } from "react-icons/im";
import { useSelector } from "react-redux";

const Header = () => {
    const history = useHistory();

    const goCart = () => {
        history.push("/Cart");
    };

    const goList = () => {
        history.push("/");
    };

    const cartList = useSelector((state) => state.productCart);

    return (
        <div className="header_container">
            {cartList.length > 0 ? (
                <>
                    <div className="left">
                        <img
                            onClick={goList}
                            src="https://i.pinimg.com/originals/c0/d1/16/c0d116c6386e437e1a4d4e3b31db1cff.png"
                            alt="LogoBatata"
                        />
                        <p>Lojão das Batatas</p>
                    </div>

                    <div className="header_buttons">
                        <button onClick={goCart}>
                            <span>{cartList.length}</span>
                            <AiOutlineShoppingCart /> Carrinho
                        </button>
                        <button>
                            <ImEnter />
                            Entrar
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <div className="left">
                        <img
                            onClick={goList}
                            src="https://i.pinimg.com/originals/c0/d1/16/c0d116c6386e437e1a4d4e3b31db1cff.png"
                            alt="LogoBatata"
                        />
                        <p>Lojão das Batatas</p>
                    </div>

                    <div className="header_buttons">
                        <button onClick={goCart}>
                            <AiOutlineShoppingCart /> Carrinho
                        </button>
                        <button>
                            <ImEnter />
                            Entrar
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Header;
