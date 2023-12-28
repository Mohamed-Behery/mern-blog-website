import styled from "styled-components";
import Header from "../Components/Header";
import Posts from "../Components/Posts";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";

const Container = styled.div``;

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Posts />
        <Sidebar />
        <Footer />
      </Container>
    </>
  );
};

export default Home;
