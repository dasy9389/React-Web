import React from "react";
import styled from "styled-components";
import {MainLayout} from '../styles/Layouts'
import Title from "../Components/Title";
import ImageSection from '../Components/ImageSection';
import ServicesSection from '../Components/ServicesSection';
import ReviewSection from "../Components/ReviewSection";

function AboutPage(){
    return(
        <MainLayout>
            <AboutPageStyled>
                <Title title={'About Me'} span={'About Me'} />
                <ImageSection />
                <ServicesSection />
                <ReviewSection />
            </AboutPageStyled>
        </MainLayout>
    );
}

const AboutPageStyled = styled.section`

`;

export default AboutPage;