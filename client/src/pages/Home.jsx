import styled from "styled-components";
import Posts from "../Components/Posts";

const Container = styled.div`
background: ${({theme})=> theme.bg};
`;

const Home = () => {
  return (
    <>
      <Container>
        <Posts />
      </Container>
    </>
  );
};

export default Home;
