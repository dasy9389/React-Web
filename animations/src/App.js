import styled from "styled-components";
import CardSection from "./Components/CardSection";
import ChartSection from "./Components/ChartSection";
import FAQSection from "./Components/FAQSection";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MessagingSection from "./Components/MessagingSection";
import PaymentSection from "./Components/PaymentSection";
import {OuterLayout} from './styles/Layout';

function App() {
  return (
    <div className="App">
      <Header />
      <OuterLayout>
        <MainStyled>
          <CardSection />
          <ChartSection />
          <MessagingSection />
          <PaymentSection />
          <FAQSection />
        </MainStyled>
      </OuterLayout>
      <Footer />
    </div>
  );
}

const MainStyled = styled.main`

`;

export default App;
