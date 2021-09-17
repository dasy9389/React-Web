import React from "react";
import styled from "styled-components";

function ButtonMenu({id, title, setSelected, active}){
    return(
        <ButtonStyled 
            className={active ? 'active' : ''}
            onClick={()=>setSelected(id)}
            >
            {title}
        </ButtonStyled>
    );
}
const  ButtonStyled = styled.li`
    font-size: 14px;
    margin-right: 50px;
    padding: 7px;
    border-radius: 10px;
    cursor: pointer;

    @media(max-width:768px){
        margin-right: 20px;
    }

    &.active {
        background-color: var(--mainColor);
        color: white;
    }  
`;

export default ButtonMenu;