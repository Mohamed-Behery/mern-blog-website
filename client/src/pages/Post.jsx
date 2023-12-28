import styled from "styled-components";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";

const Container = styled.div``;

const Post = () => {
  return (
    <Container>
      <Header />
      Post
      <Sidebar />
      <Footer />
    </Container>
  );
};

export default Post;
