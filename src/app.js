import React from "react";
import Login from "./pages/LoginPage";
import Home from './pages/Home/index';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";


const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/detail" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
