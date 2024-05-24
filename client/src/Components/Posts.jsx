import styled from "styled-components";
import PostCard from "./PostCard";

const Container = styled.div``;
const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`;
const Filter = styled.select``;
const Sort = styled.select``;
const Option = styled.option``;
const LoadMoreContainer = styled.div`
  text-align: center;
`;
const LoadMore = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.neutral};
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  margin: 16px 0;
  text-align: center;
  cursor: pointer;
`;
const PostsCards = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Posts = () => {
  return (
    <Container>
      <Options>
        <Filter>
          <Option>Filter 1</Option>
          <Option>Filter 2</Option>
        </Filter>
        <Sort>
          <Option>Date</Option>
          <Option>Author</Option>
        </Sort>
      </Options>
      <PostsCards>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostsCards>
      <LoadMoreContainer>
      <LoadMore>Load More</LoadMore>
      </LoadMoreContainer>
    </Container>
  );
};

export default Posts;
