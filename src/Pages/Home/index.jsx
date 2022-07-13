import Header from "../../Components/Header";
import ProductList from "../../Components/ProductList";
import "../../Styles/home.css";

const Home = () => {
    return (
        <div>
            <div className="header">
                <Header />
            </div>
            <div className="list">
                <ProductList />
            </div>
        </div>
    );
};

export default Home;
