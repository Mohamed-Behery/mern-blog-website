import styled from "styled-components";

const Container = styled.div``;
const Options = styled.div``;
const Filter = styled.div``;
const Sort = styled.div``;
// const ReadMore = styled.div``;
const PostsCards = styled.div``;
const PostCard = styled.div``;
const PostImage = styled.img``;
const Title = styled.div``;
const Date = styled.span``;
const Author = styled.span``;
const Category = styled.div``;
const Content = styled.p``;

const Posts = () => {
  return (
    <Container>
      <Options>
        <Filter>Filter</Filter>
        <Sort>Sort</Sort>
        {/* <ReadMore>ReadMore</ReadMore> */}
        <PostsCards>
          <PostCard>
            <PostImage></PostImage>
            <Title>Title</Title>
            <Date>1/1/2001</Date>
            <Author>Mohamed</Author>
            <Category>Tech</Category>
            <Category>Tech</Category>
            <Content></Content>
          </PostCard>
        </PostsCards>
      </Options>
    </Container>
  );
};

export default Posts;
