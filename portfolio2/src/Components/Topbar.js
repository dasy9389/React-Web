import React from "react";
import styled from "styled-components";
import { Person, Mail } from "@material-ui/icons";

function Topbar({menuOpen, setMenuOpen}){
    return(
        <TopbarStyled className={menuOpen ? 'active' : ''}>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>genius.</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+44 924 12 74</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>safak@genius.com</span>
                    </div>
                </div>
                <div className='right'>
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </TopbarStyled>
    );
}

const TopbarStyled = styled.nav`
    width: 100%;
    height: 70px;
    background-color: white;
    color: var(--mainColor);
    position: fixed;
    top: 0;
    z-index: 3;
    transition: all 1s ease;
    .wrapper {
        padding: 10px 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .left {
            display: flex;
            align-items: center;
            .logo {
                font-size: 40px;
                font-weight: 700;
                text-decoration: none;
                color: inherit;
                margin-right: 40px;
            }

            .itemContainer {
                display: flex;
                align-items: center;
                margin-left: 30px;
                @media (max-width:768px){
                    display: none;
                }
                .icon {
                    font-size: 18px;
                    margin-right: 5px;
                }

                span {
                    font-size: 15px;
                    font-weight: 500;
                }
            }
        }

        .right {
            .hamburger {
                width: 32px;
                height: 25px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                cursor: pointer;

                span {
                    width: 100%;
                    height: 3px;
                    background-color: var(--mainColor);
                    transform-origin: left;
                    transition: all 2s ease;
                }
            }
        }
    }

    &.active {
        background-color: var(--mainColor);
        color: white;

        .hamburger {
            span {
                &:first-child {
                    background-color: white;
                    transform: rotate(45deg);
                }
                &:nth-child(2) {
                    opacity: 0;
                }
                &:last-child {
                    background-color: white;
                    transform: rotate(-45deg);
                }
            }
        }
    }
`;

export default Topbar;