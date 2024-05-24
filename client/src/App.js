import "./App.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/Theme";
import { Routes, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Register from "./pages/Register";
import Post from "./pages/Post";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Profile from "./pages/Profile";
import { useState } from "react";
import Login from "./pages/Login";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;

  @media (max-width: 768px) {
    justify-content: center;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
const Wrapper = styled.div`
  padding: 0 10%;
  margin-top: 128px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    padding: 0;
    justify-content: center;
  }
`;
const MainContent = styled.div`
  flex: 1;
  padding: 0 16px;
  @media (max-width: 768px) {
    padding: 0 8px;
  }
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Wrapper>
          <MainContent>
            <Routes>
              <Route path="/" exact element={Home()} />
              <Route path="/home" exact element={Home()} />
              <Route path="/write" element={Write()} />
              <Route path="/post" element={Post()} />
              <Route path="/register" element={Register()} />
              <Route path="/login" element={Login()} />
              <Route path="/profile" element={Profile()} />
            </Routes>
          </MainContent>
          {location.pathname !== "/write" && <Sidebar />}
        </Wrapper>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
