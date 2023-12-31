import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;
const PostImage = styled.img``;
const Title = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
`;
const Date = styled.span``;
const Author = styled.span``;
const Category = styled.span``;
const Content = styled.p``;

const PostCard = () => {
  return (
    <Container>
      <PostImage src="" />
      <Title to="/post">Title</Title>
      <Date>1/1/2001</Date>
      <Author>Mohamed</Author>
      <Category>Tech</Category>
      <Content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore expedita
        necessitatibus aliquam beatae voluptatem amet delectus magni dolores
        quam officia? Rerum fugiat
      </Content>
    </Container>
  );
};

export default PostCard;
