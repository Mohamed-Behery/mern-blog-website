import styled from "styled-components";

const Container = styled.div``;
const Image = styled.img``;
const Title = styled.input``;
const Category = styled.input``;
const Content = styled.textarea``;

const Write = () => {
  return (
    <Container>
      <Image src="" />
      <Title type="text" placeholder="Post Title" />
      <Category type="text" placeholder="Post Category" />
      <Content placeholder="Post Content" />
    </Container>
  );
};

export default Write;
