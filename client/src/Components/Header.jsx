import { NavLink } from "react-router-dom";
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
const Logo = styled.h1``;
const ThemeSwitcher = styled.span``;

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Beacon</Logo>
        </Left>
        <Middle>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/write">Write</NavLink>
          <ThemeSwitcher onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Dark" : "Light"}
          </ThemeSwitcher>
          {/* <NavLink to="/logout">Logout</NavLink> */}
        </Middle>
        <Right>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;
