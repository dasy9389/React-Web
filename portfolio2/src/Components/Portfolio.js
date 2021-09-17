import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ButtonMenu from './ButtonMenu';
import PortfolioItem from './PortfolioItem';
// import portfolio from "../data/portfolio";
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,
  } from '../data/portfolio';

// const allButton = ['All',...new Set(portfolio.map(item => item.category))];

function Portfolio(){
    // const [portfolioItem, setPortfolioItem] = useState(portfolio);
    // const [button, setButton] = useState(allButton);

    // const filter = (button) => {
    //     if(button === 'All'){
    //         setPortfolioItem(portfolio);
    //         return;
    //     }
    //     const dataFilter = portfolio.filter(item => item.category === button);
    //     setPortfolioItem(dataFilter);
    // }

    const [selected, setSelected] = useState('featured');
    const [data,setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "design",
            title: "Design",
        },
        {
            id: "content",
            title: "Content",
        }
    ];

    useEffect(()=>{
        switch(selected){
            case 'featured':
                setData(featuredPortfolio);
                break;
            case 'web':
                setData(webPortfolio);
                break;
            case 'mobile':
                setData(mobilePortfolio);
                break;
            case 'design':
                setData(designPortfolio);
                break;
            case 'content':
                setData(contentPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    },[selected]);

    return(
        <PortfolioStyled id='portfolio'>
           <h1>Portfolio</h1>
           <ul>
                {
                    list.map((item)=>{
                        return(
                            <ButtonMenu 
                                title={item.title}
                                active={selected === item.id}
                                setSelected={setSelected}
                                id={item.id}
                            />
                        );
                    })
                }
           </ul>
           <PortfolioItem data={data} />
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

    ul {
        margin: 10px;
        padding: 0;
        list-style: none;
        display: flex;

        @media(max-width:768px){
            margin: 10px 0;
            flex-wrap: wrap;
            justify-content: center;
        }
    }
`;

export default Portfolio;