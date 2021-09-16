import styled from "styled-components";
import Topbar from './Components/Topbar';
import Intro from './Components/Intro';
import Portfolio from './Components/Portfolio';
import Works from './Components/Works';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Menu from './Components/Menu';
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MainStyled>
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </MainStyled>
    </div>
  );
}

const MainStyled = styled.main`
  width: 100%;
  height: calc(100% - 70px);
  background-color: lightsalmon;
  position: relative;
  top: 70px;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  scrollbar-width: none; //for firefox
  &::-webkit-scrollbar{
      display: none;
  }
  > *{
    width: 100vw;
    height: calc(100% - 70px);
    scroll-snap-align: start;
  }
`;

export default App;
