import styled from "styled-components";
import CardSection from "./Components/CardSection";
import ChartSection from "./Components/ChartSection";
import FAQSection from "./Components/FAQSection";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MessagingSection from "./Components/MessagingSection";
import PaymentSection from "./Components/PaymentSection";
import {OuterLayout} from './styles/Layout';
import {Fade} from 'react-reveal';

function App() {
  return (
    <div className="App">
      <Header />
      <OuterLayout>
        <MainStyled>
          <Fade left>
            <CardSection />
          </Fade>
          <Fade right>
            <ChartSection />
          </Fade>
          <Fade left>
            <MessagingSection />
          </Fade>
          <Fade right>
            <PaymentSection />
          </Fade>
          <Fade left>
            <FAQSection />
          </Fade>
        </MainStyled>
      </OuterLayout>
      <Fade>
        <Footer bottom />
      </Fade>
    </div>
  );
}

const MainStyled = styled.main`

`;

export default App;
