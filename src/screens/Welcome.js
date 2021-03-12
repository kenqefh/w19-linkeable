import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";
import logo from "../assets/linkeable-logo.png";
import Button from "../components/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  width: 100%;
`;

const Title = styled.h1`
  align-self: flex-start;
`;

const Logo = styled.img`
  width: 270px;
  margin-top: 64px;
  margin-bottom: 98px;
`;

const ButtonContainer = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Welcome() {
  const history = useHistory();
  const handleGuest = () => {
    history.push("search");
  };
  return (
    <Container>
      <Title>Welcome to...</Title>
      <Logo alt="Linkeable Logo" src={logo} />
      <ButtonContainer>
        <Button size="large" onClick={handleGuest}>
          Continue as Guest
        </Button>
        <Button size="large">Login</Button>
      </ButtonContainer>
    </Container>
  );
}

export default Welcome;
