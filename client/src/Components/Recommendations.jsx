import styled from "styled-components";
import PostCard from "./PostCard";

const Container = styled.div``;

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
