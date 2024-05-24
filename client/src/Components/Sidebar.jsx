import styled from "styled-components";
import TrendingPost from "./TrendingPost";
import { useLocation, Link } from "react-router-dom";

const Container = styled.div`
  max-width: 300px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 16px;
  }
`;
const Categories = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
`;
const Title = styled.h2`
  margin-bottom: 8px;
`;
const Category = styled(Link)`
  padding: 4px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.neutral};
  color: ${({ theme }) => theme.text2};
`;
const Hr = styled.hr`
  margin: 8px 0;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 1px;
`;
const Trending = styled.div``;
const SharePost = styled.div``;
const Social = styled.div``;
const SocialLink = styled(Link)`
  margin: 0 8px;
`;

const Sidebar = () => {
  const location = useLocation();
  return (
    <Container>
      <Hr />
      <Title>Categories</Title>
      <Categories>
        <Category>Laptop</Category>
        <Category>Mobile</Category>
        <Category>Tablet</Category>
      </Categories>
      <Hr />
      <Trending>
        <Title>Trending</Title>
        <TrendingPost />
        <TrendingPost />
        <TrendingPost />
      </Trending>
      <Hr />
      {location.pathname === "/post" && (
        <SharePost>
          <Title>Share This Post</Title>
          <Social>
            <SocialLink to="https://www.facebook.com" target="_blank">
              Facebook
            </SocialLink>
            <SocialLink to="https://www.instagram.com" target="_blank">
              Instagram
            </SocialLink>
            <SocialLink to="https://www.youtube.com" target="_blank">
              Youtube
            </SocialLink>
          </Social>
          <Hr />
        </SharePost>
      )}
    </Container>
  );
};

export default Sidebar;
