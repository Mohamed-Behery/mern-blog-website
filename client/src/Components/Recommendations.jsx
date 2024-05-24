import styled from "styled-components";
import PostCard from "./PostCard";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Recommendations = () => {
  return (
    <Container>
      <PostCard />
      <PostCard />
      <PostCard />
    </Container>
  );
};

export default Recommendations;
