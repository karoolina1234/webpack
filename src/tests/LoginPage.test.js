import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "../store/store";
import '@testing-library/jest-dom'
import Login from "../pages/LoginPage";

describe("Login Component", () => {
    it("displays the page", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </Provider>
        );
        expect(screen.queryByText('Dados de acesso')).toBeInTheDocument();
    });

    it("updates input fields correctly", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </Provider>
        );

        const privateInput = screen.getByPlaceholderText('private_key');
        const publicInput = screen.getByPlaceholderText('public_key');

        fireEvent.change(privateInput, { target: { name: 'private', value: 'my-private-key' } });
        fireEvent.change(publicInput, { target: { name: 'public', value: 'my-public-key' } });

        expect(privateInput).toHaveValue('my-private-key');
        expect(publicInput).toHaveValue('my-public-key');
    });

    it("dispatches login action when login button is clicked", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </Provider>
        );

        const loginButton = screen.getByText('Acessar');
        fireEvent.click(loginButton);

        
    });
});
