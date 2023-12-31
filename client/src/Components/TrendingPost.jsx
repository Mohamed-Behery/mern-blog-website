import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;
const PostImage = styled.img``;
const Title = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-weight: bold;
`;
const Content = styled.p``;

const TrendingPost = () => {
  return (
    <Container>
      <PostImage></PostImage>
      <Title to="/post">Title</Title>
      <Content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore expedita
      </Content>
    </Container>
  );
};

export default TrendingPost;
