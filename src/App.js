import Home from "./Home";
import Search from "./Search";
import Navbar from "./Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="search" element={<Search />} />
        <Route exact path="*" element={<h1>Oops the page you are looking for not found.</h1>} />
      </Routes>
    </>
  );
}

export default App;
