import React from "react";
import * as S from "./style";
import LogoHeader from "../../icons/LogoHeader";


const Header = () => {
    return (
        <S.HeaderComponent>
            <S.AreaHeader>
                <LogoHeader />
            </S.AreaHeader>
        </S.HeaderComponent>
    )
}

export default Header;