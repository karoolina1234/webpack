import React from "react";
import ReactDOM from 'react-dom/client'
import store from "./store/store";
import { Provider } from "react-redux";
import Header from "./components/Header";
import App from "./app";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.querySelector("#root"));
const isLoggedIn = store.getState().login.isLoggedIn;

root.render(
    <React.StrictMode>
        <Provider store={store}>
            {isLoggedIn && (<Header />)}
            <App />
            {isLoggedIn && (<Footer/>)}
        </Provider>
    </React.StrictMode>
)
