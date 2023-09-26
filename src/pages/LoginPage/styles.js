import styled from "styled-components";

export const LoginPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
export const AreaLogin = styled.div`
    text-align: center;
`
export const LabelLogin = styled.label`
    font-weight: bold;
    display: block; 
    margin-top: 2rem;
`
export const InputLogin = styled.input`
    display: block;
    margin: 1rem auto;
    padding: 0.5rem;
    max-width: 20rem;
    min-width: 20rem;
    border: 1px solid gray;
    border-radius: 0.4rem;

`
export const ButtonLogin = styled.button`
    width: 21rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid #ff0000;
    background: #ff0017;
    color: #FFF;
    cursor: pointer;
`