import React from "react";
import styled from "styled-components";
import man from '../img/man.png';
import down from '../img/down.png';
import { useRef } from "react";
import { useEffect } from "react";
import { init } from 'ityped';

function Intro(){
    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, { 
            showCursor: false,
            backDelay: 1500,
            backSpeed:60,
            strings: ["Developer", "Designer", "Content Creator"]
        });
    },[])
    return(
        <IntroStyled id='intro'>
            <div className='left'>
                <div className='imgContainer'>
                    <img src={man} />
                </div>
            </div>
            <div className='right'>
                <div className='wrapper'>
                    <h2>Hi There, I'm</h2>
                    <h1>Safak Kocaoglu</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
            </div>
            <a href="#portfolio">
                <img src={down} alt="" />
            </a>
        </IntroStyled>
    );
}

const IntroStyled = styled.section`
    background-color: white;
    display: flex;
    @media (max-width:768px){
        flex-direction: column;
        align-items: center;
    }
    .left {
        flex: 0.5;
        overflow: hidden;

        .imgContainer {
            width: 700px;
            height: 700px;
            background-color: crimson;
            border-radius: 50%;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            float: right;
            @media (max-width:768px){
                align-items: flex-start;
            }
            img {
                height: 90%;
                @media (max-width:768px){
                    height: 50%;
                }
            }
        }
    }
    .right {
        flex: 0.5;
        position: relative;

        .wrapper {
            width: 100%;
            height: 100%;
            padding-left: 50px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            @media (max-width:768px){
                padding-left: 0;
                align-items: center;
            }

            h1 {
                font-size: 60px;
                margin: 10px 0;
                @media (max-width:768px){
                    font-size: 40px;
                }
            }
            h2 {
                font-size: 35px;
            }
            h3 {
                font-size: 30px;

                @media (max-width:768px){
                    font-size: 20px;
                }
                span {
                    font-size: inherit;
                    color: crimson;
                }
                .ityped-cursor {
                    animation: blink 1s infinite;
                }
                @keyframes blink {
                    50%{
                        opacity: 1;
                    }
                    100%{
                        opacity: 0;
                    }
                }
            }
        }
    }
    a {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);

        img {
            width: 30px;
            animation: arrowBlink 2s infinite;
        }
        @keyframes arrowBlink {
            100% {
                opacity: 0;
            }
        }
    }
`;

export default Intro;