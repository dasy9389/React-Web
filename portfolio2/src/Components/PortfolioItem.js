import React from "react";
import styled from "styled-components";

function PortfolioItem({portfolioItem}){
    return(
        <PortfolioItemStyled>
            <div className='container'>
                {
                    portfolioItem.map((item)=>{
                        return(
                            <div className='item' key={item.id}>
                                <img src={item.img} alt='' />
                                <h3>{item.title}</h3>
                            </div> 
                        );
                    })
                }
            </div>
        </PortfolioItemStyled>
    );
}

const PortfolioItemStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    .container {
        display: grid;
        grid-template-columns: repeat(4,1fr);
        grap: 1rem;
        @media(max-width:768px){
            width: 100%;
        }
        .item {
            border-radius: 20px;
            border: 1px solid rgb(240, 239, 239);
            margin: 10px 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            position: relative;
            transition: all .5s ease;
            cursor: pointer;

            @media(max-width:768px){
                width: 130px;
                height: 100px;
            }
            h3 {
                position: absolute;
                font-size: 20px;
                padding: 0 10px;
                text-align: center;
            }
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                z-index: 1;
            }
            &:hover {
                background-color: var(--mainColor);
                img {
                    opacity: 0.2;
                    z-index: 0;
                }
            }
        }
    }
`;

export default PortfolioItem;