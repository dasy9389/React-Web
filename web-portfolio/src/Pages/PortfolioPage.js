import React, { useState } from "react";
import styled from "styled-components";
import { InnerLayout, MainLayout } from "../styles/Layouts";
import Menu from '../Components/Menu';
import portfolios from "../data/portfolios";
import Title from '../Components/Title';
import Button from "../Components/Button";

const allButtons = ['All', ...new Set(portfolios.map(item=>item.category))];

function PortfolioPage(){
    const [menuItem, setMenuItems] = useState(portfolios);
    const [button, setButtons] = useState(allButtons);

    const filter = (button) => {
        if(button === 'All'){
            setMenuItems(portfolios);
            return;
        }

        const filterData = portfolios.filter(item => item.category === button);
        setMenuItems(filterData);
    }

    return(
        <MainLayout>
            <PortfolioPageStyled>
                <Title title={'Portofios'} span={'portfolios'} />
                <InnerLayout>
                    <Button filter={filter} button={button} />
                    <Menu menuItem={menuItem} />
                </InnerLayout>
            </PortfolioPageStyled>
        </MainLayout>
    );
}

const PortfolioPageStyled = styled.section`

`;

export default PortfolioPage;