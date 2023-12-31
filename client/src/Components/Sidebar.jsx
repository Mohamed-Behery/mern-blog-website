import styled from "styled-components";
import TrendingPost from "./TrendingPost";
import { useLocation } from "react-router-dom";

const Container = styled.div``;
const Categories = styled.div``;
const Title = styled.h2``;
const Category = styled.div``;
const Hr = styled.hr``;
const Trending = styled.div``;
const SharePost = styled.div``;
const Social = styled.div``;
const Link = styled.a``;

const Sidebar = () => {
  const location = useLocation();
  return (
    <Container>
      <Categories>
        <Title>Categories</Title>
        <Hr />
        <Category>Laptop</Category>
        <Category>Mobile</Category>
        <Category>Tablet</Category>
      </Categories>
      <Hr />
      <Trending>
        <Title>Trending</Title>
        <Hr />
        <TrendingPost />
        <TrendingPost />
        <TrendingPost />
      </Trending>
      {location.pathname === "/post" && (
        <SharePost>
          <Title>Share This Post</Title>
          <Social>
            <Link>Facebook</Link>
            <Link>Instagram</Link>
            <Link>Youtube</Link>
          </Social>
        </SharePost>
      )}
    </Container>
  );
};

export default Sidebar;
