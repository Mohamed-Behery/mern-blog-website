import "./App.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/Theme";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Register from "./pages/Register";
import Post from "./pages/Post";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Profile from "./pages/Profile";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" exact element={Home()} />
        <Route path="/home" exact element={Home()} />
        <Route path="/write" element={Write()} />
        <Route path="/post/:postId" element={Post()} />
        <Route path="/register" element={Register()} />
        <Route path="/profile" element={Profile()} />
      </Routes>
      <Sidebar />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
