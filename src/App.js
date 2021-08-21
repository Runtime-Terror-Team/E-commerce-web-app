import React from 'react';
import './app.scss'
import { ProductList } from "./pages/ProductList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SingleProduct from "./pages/SingleProduct";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path={'/products'}>
                        <ProductList/>
                    </Route>

                    <Route path='/:product_id'>
                        <SingleProduct/>
                    </Route>

                </Switch>
            </div>
        </Router>

    );
}

export default App;
