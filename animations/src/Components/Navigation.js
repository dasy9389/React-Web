import React from "react";
import styled from 'styled-components';
import PrimaryButton from "./PrimaryButton";
import logo from '../img/logo.svg';
import {Fade} from 'react-reveal';

function Navigation(){
    return(
        <Fade top>
            <NavigationStyled>
                <div className='logo'>
                    <img src={logo} alt=''/>
                </div>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Features</a>
                    </li>
                    <li>
                        <a href="/">Pricing</a>
                    </li>
                </ul>
                <PrimaryButton name={'Sign up'} />
            </NavigationStyled>
        </Fade>
    );
}

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    min-height: 10vh;
    align-items: center;
    @media screen and (max-width: 414px){
        flex-direction: column;
        justify-content: center;
    }
    ul{
        display: flex;
        justify-content: space-between;
        width: 40%;
        @media screen and (max-width: 414px){
            width: 100%;
            margin: 1rem 0 1.5rem;
        }
    }
`;

export default Navigation;