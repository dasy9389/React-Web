import React from "react";
import styled from "styled-components";
import {MainLayout} from '../styles/Layouts';
import Skills from '../Components/Skills';
import Resume from '../Components/Resume';

function ResumePage(){
    return(
        <ResumePageStyled>
            <MainLayout>
                <Skills />
                <Resume />
            </MainLayout>
        </ResumePageStyled>
    );
}

const ResumePageStyled = styled.section`

`;

export default ResumePage;