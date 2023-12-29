import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Register from "./pages/Register";
import Post from "./pages/Post";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={Home()} />
        <Route path="/write" element={Write()} />
        <Route path="/post/:postId" element={Post()} />
        <Route path="/register" element={Register()} />
        <Route path="/profile" element={Profile()} />
      </Routes>
      <Sidebar />
      <Footer />
    </>
  );
}

export default App;
