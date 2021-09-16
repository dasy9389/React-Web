import React, { useState } from "react";
import styled from "styled-components";
import ButtonMenu from './ButtonMenu';
import PortfolioItem from './PortfolioItem';
import portfolio from "../data/portfolio";

const allButton = ['All',...new Set(portfolio.map(item => item.category))];

function Portfolio(){
    const [portfolioItem, setPortfolioItem] = useState(portfolio);
    const [button, setButton] = useState(allButton);

    const filter = (button) => {
        if(button === 'All'){
            setPortfolioItem(portfolio);
            return;
        }
        const dataFilter = portfolio.filter(item => item.category === button);
        setPortfolioItem(dataFilter);
    }

    return(
        <PortfolioStyled id='portfolio'>
           <h1>Portfolio</h1>
           <ButtonMenu filter={filter} button={button}/>
           <PortfolioItem portfolioItem={portfolioItem} />
        </PortfolioStyled>
    );
}

const PortfolioStyled = styled.section`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 50px;
        @media(max-width:768px){
            font-size: 20px;
        }
    }
`;

export default Portfolio;