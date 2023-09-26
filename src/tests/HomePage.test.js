import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home/index";
import { Provider } from 'react-redux';
import store from "../store/store";
import '@testing-library/jest-dom'



describe("Render", () => {
    it("display the page", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Home />
                </BrowserRouter>
            </Provider>

        );
        expect(screen.queryByText('Nome')).toBeInTheDocument()
        expect(screen.queryByText('Descrição')).toBeInTheDocument()
        expect(screen.queryByText('Última atualização')).toBeInTheDocument()

    });


});

