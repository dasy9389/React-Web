import React from "react";
import styled from "styled-components";

function HomePage(){
    return(
        <HomePageStyled></HomePageStyled>
    );
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
`;

export default HomePage;