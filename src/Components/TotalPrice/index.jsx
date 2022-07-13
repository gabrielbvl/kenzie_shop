import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "../../Styles/totalPrice.css";

const TotalPrice = () => {
    const cartList = useSelector((state) => state.productCart);

    const totalValue = cartList.reduce(function (acumulador, valorAtual, index, array) {
        return acumulador + valorAtual.price;
    }, 0);

    const history = useHistory();

    const goHome = () => {
        history.push("/");
    };

    return (
        <div className="container_totalPrice">
            <h4>Resumo do Pedido</h4>

            <div className="value_qtd">
                <span>{cartList.length} Produtos</span>
                <span>
                    {totalValue.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                    })}
                </span>
            </div>
            <button className="btn1">Finalizar Pedido</button>
            <button onClick={goHome} className="btn2">
                Comprar Mais Batata
            </button>
        </div>
    );
};

export default TotalPrice;
