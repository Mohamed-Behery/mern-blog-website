import styled from "styled-components";
// import Link from "react-router-dom";

const Container = styled.header`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
`;
const Left = styled.div``;
const Middle = styled.div``;
const Right = styled.div``;
const Logo = styled.img``;
const Link = styled.a``;

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src=""></Logo>
        </Left>
        <Middle>
          <Link href="#">Home</Link>
          <Link href="#">Saved</Link>
          <Link href="#">Write</Link>
          <Link href="#">Logout</Link>
        </Middle>
        <Right>
          <Link href="#">Register</Link>
          <Link href="#">Login</Link>
          <Link href="#">theme</Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;
