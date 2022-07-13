import { Switch, Route } from "react-router-dom";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";

const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path={"/"}>
                    <Home />
                </Route>
                <Route exact path={"/Cart"}>
                    <Cart />
                </Route>
            </Switch>
        </>
    );
};

export default Routes;
