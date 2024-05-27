import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin: 16px 0;
  border-radius: 8px;
  max-width: 380px;
  background-color: ${({ theme }) => theme.neutral};
`;
const PostImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
`;
const PostText = styled.div`
  padding: 8px 16px;
`;
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 8px 8px 0;
`;
const Title = styled(Link)`
  font-size: 24px;
  font-weight: bold;
`;
const Date = styled.span``;
const Author = styled.span``;
const Category = styled.span``;
const Content = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PostCard = () => {
  return (
    <Container>
      <PostImage src="images/post.jpg" />
      <PostText>
        <Title to="/post">Title</Title>
        <Details>
          <Author>Mohamed</Author>
          <Date>1/1/2001</Date>
          <Category>Laptop</Category>
        </Details>
        <Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          expedita necessitatibus aliquam beatae voluptatem amet delectus magni
          dolores quam officia? Rerum fugiat
        </Content>
      </PostText>
    </Container>
  );
};

export default PostCard;
