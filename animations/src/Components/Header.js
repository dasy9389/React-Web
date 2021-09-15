import React from "react";
import styled from 'styled-components';
import HeaderContent from "./HeaderContent";
import Navigation from './Navigation';
import bg from '../img/bg.svg';

function Header(){
    return(
        <HeaderStyled>
            <div className='header-content'>
                <Navigation />
                <HeaderContent />
            </div>
        </HeaderStyled>
    );
}

const HeaderStyled = styled.header`
    min-height: 100vh;
    width: 100%;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 100%;
    .header-content{
        padding: 0 18rem;
        @media screen and (max-width: 1347px){
            padding: 5rem 14rem;
        }
        @media screen and (max-width: 1186px){
            padding: 5rem 8rem;
        }
        @media screen and (max-width: 990px){
            padding: 5rem 4rem;
        }
        @media screen and (max-width: 414px){
            padding: 5rem 1.5rem;
        }
    }
`;

export default Header;