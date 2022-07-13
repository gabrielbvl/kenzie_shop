import "../../Styles/productList.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { addCartThunk } from "../../store/modules/cart/thunk";

const ProductList = () => {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.product);
    const cartList = useSelector((state) => state.productCart);
    console.log(productList);

    const addProduct = (product) => {
        if (!cartList.find((item) => item.name === product.name)) {
            dispatch(addCartThunk(product));
            toast.success("Colocou a batatinha na sacola");
        }
    };

    return (
        <div className="products_container_list">
            {productList.map((data) => (
                <div className="products_list_products" key={data.name}>
                    <div className="products_items">
                        <img src={data.image} alt={data.name} />
                        <h2> {data.name} </h2>
                        <h4> {data.description} </h4>
                        <span>
                            Você paga apenas{" "}
                            {data.price.toLocaleString("pt-br", {
                                style: "currency",
                                currency: "BRL",
                            })}
                        </span>
                    </div>
                    <button className="add_product" onClick={() => addProduct(data)}>
                        Adicionar ao Carrinho
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
