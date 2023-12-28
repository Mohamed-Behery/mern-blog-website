import styled from "styled-components";

const Container = styled.div``;
const Copyrights = styled.footer``;
const Social = styled.footer``;
const Link = styled.a``;

const Footer = () => {
  return (
    <Container>
      <Copyrights>All Rights Reserverd &#169; 2024 </Copyrights>
      <Social>
        <Link>Facebook</Link>
        <Link>Instagram</Link>
        <Link>Youtube</Link>
      </Social>
    </Container>
  );
};

export default Footer;
