import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
  height: 64px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.neutral};
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.06);
`;
const Wrapper = styled.div`
  padding: 16px 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.text};

  a {
    margin: 0 8px;
  }

  @media screen and (max-width: 768px) {
    > .Middle,
    .right {
      display: none;
    }
  }
`;
const Left = styled.div``;
const Middle = styled.div``;
const Right = styled.div``;
const Logo = styled.h1`
  font-size: 24px;
`;
const ThemeSwitcher = styled.span`
  user-select: none;
  cursor: pointer;
  margin: 0 8px;
`;

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            <NavLink to="/home">Beacon</NavLink>
          </Logo>
        </Left>
        <Middle className="Middle">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/write">Write</NavLink>
          <ThemeSwitcher onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Dark" : "Light"}
          </ThemeSwitcher>
          {/* <NavLink to="/logout">Logout</NavLink> */}
        </Middle>
        <Right className="right">
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;
