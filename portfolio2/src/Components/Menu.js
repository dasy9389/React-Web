import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Menu({menuOpen, setMenuOpen}){
    return(
        <MenuStyled className={menuOpen ? 'active' : ''}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </MenuStyled>
    );
}

const MenuStyled = styled.div`
    width: 300px;
    height: 100vh;
    background-color: var(--mainColor);
    position: fixed;
    top: 0;
    right: -300px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 1s ease;
    &.active {
        right: 0;
    }
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        font-size: 30px;
        font-weight: 300;
        color: white;
        width: 60%;

        li {
            margin-bottom: 25px;
            a {
                font-size: inherit;
                color: inherit;
                text-decoration: none;
            }
            &:hover {
                font-weight: 500;
            }
        }
    }
`;

export default Menu;