import styled from "styled-components";
import PostCard from "./PostCard";

const Container = styled.div``;
const Options = styled.div``;
const Filter = styled.span``;
const Sort = styled.span``;
const ReadMore = styled.span``;
const PostsCards = styled.div``;

const Posts = () => {
  return (
    <Container>
      <Options>
        <Filter>Filter</Filter>
        <Sort>Sort</Sort>
        <ReadMore>ReadMore</ReadMore>
        <PostsCards>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </PostsCards>
      </Options>
    </Container>
  );
};

export default Posts;
