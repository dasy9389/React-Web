import React from "react";
import styled from 'styled-components';
import arrow from '../img/arrow.svg'

function SecondButton({name}){
    return(
        <SecondButtonStyled>
            {name}
            <img src={arrow} alt="" />
        </SecondButtonStyled>
    );
}

const SecondButtonStyled = styled.button`
    background-color: var(--dark-primary);
    padding: 1rem 2rem;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border-radius: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
        padding-left: .9rem;
    }
`;

export default SecondButton;