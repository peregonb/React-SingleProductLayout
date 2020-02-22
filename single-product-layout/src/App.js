import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {MainPage} from "./components/MainPage/MainPage";
import {Checkout} from "./components/Checkout/Checkout";


const App = () => (
    <BrowserRouter>
        <Route exact path={process.env.PUBLIC_URL + "/"} render={() => <MainPage/>}/>
        <Route exact path={process.env.PUBLIC_URL + "/checkout"} render={() => <Checkout/>}/>
    </BrowserRouter>
);

export default App;
