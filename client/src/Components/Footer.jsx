import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.neutral};
  color: ${({ theme }) => theme.text};
  text-align: center;
  width: 100%;
  padding: 8px 0;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.06);
`;
const Copyrights = styled.footer``;
const Social = styled.footer``;
const Link = styled.a`
  margin: 0 8px;
`;

const Footer = () => {
  return (
    <Container>
      <Copyrights>All Rights Reserverd - Beacon &#169; 2024 </Copyrights>
      <Social>
        <Link>Facebook</Link>
        <Link>Instagram</Link>
        <Link>Youtube</Link>
      </Social>
    </Container>
  );
};

export default Footer;
