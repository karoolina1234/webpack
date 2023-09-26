import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import LogoLogin from "../../icons/Logo";
import * as S from './styles'

const Login = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

    const [dataLogin, setDataLogin] = useState({
        public: '',
        private: ''
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setDataLogin({
            ...dataLogin,
            [name]: value
        });
    }

    useEffect(()=>{
        if(isLoggedIn){
            window.location.href='/home'
        }

    },[])



    const handleLogin = () => {
        dispatch({ type: 'LOGIN', publicData: dataLogin.public, privateData: dataLogin.private });
        window.location.href="/home"
    }
    return (
        <S.LoginPage>
            <S.AreaLogin>
                <LogoLogin />
                <S.LabelLogin>Dados de acesso</S.LabelLogin>
                <S.InputLogin name="private" placeholder="private_key" onChange={handleInputChange} />
                <S.InputLogin name="public" placeholder="public_key" onChange={handleInputChange} />
                <S.ButtonLogin onClick={handleLogin}>Acessar</S.ButtonLogin>
            </S.AreaLogin>
        </S.LoginPage>

    )
}

export default Login