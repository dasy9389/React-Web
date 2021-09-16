import React from "react";
import styled from "styled-components";

function ButtonMenu({filter,button}){
    return(
        <ButtonMenuStyled>
            {button.map((btn,i)=>{
                return(
                    <ButtonStyled 
                    key={i}
                    onClick={()=>filter(btn)}>
                        {btn}
                    </ButtonStyled>
                );

            })}
        </ButtonMenuStyled>
    );
}
const  ButtonStyled = styled.button`
    font-size: 14px;
    margin-right: 20px;
    padding: 7px 20px;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    box-shadow: none;
    background-color: transparent;
    @media(max-width:768px){
        margin-right: 20px;
    }

    &:active, &:focus {
        background-color: var(--mainColor);
        color: white;
    }
`;
const ButtonMenuStyled = styled.div`
    padding: 20px;
`;

export default ButtonMenu;