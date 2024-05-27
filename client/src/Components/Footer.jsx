import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: ${({ theme }) => theme.neutral};
  color: ${({ theme }) => theme.text};
  text-align: center;
  width: 100%;
  padding: 8px 0;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.06);
`;
const Copyrights = styled.footer``;
const Social = styled.div``;
const SocialLink = styled(Link)`
  margin: 0 8px;
`;

const Footer = () => {
  return (
    <Container>
      <Copyrights>All Rights Reserverd - Beacon &#169; 2024 </Copyrights>
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
    </Container>
  );
};

export default Footer;
