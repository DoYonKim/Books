import styled from "styled-components";
import Header from "./Component/Header";
import Container from "./Component/Container";

const WholeScreen = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  height: 100vh;

  margin: 0px;
`;

function App() {
  return (
    <WholeScreen>
      <Header/>
      <Container/>
    </WholeScreen>
  );
}

export default App;
