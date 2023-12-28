import styled from "styled-components";

const Container = styled.div``;
const PostImage = styled.img``;
const Title = styled.div``;
const Date = styled.span``;
const Author = styled.span``;
const Category = styled.div``;
const Content = styled.p``;

const PostCard = () => {
  return (
    <Container>
      <PostImage></PostImage>
      <Title>Title</Title>
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
