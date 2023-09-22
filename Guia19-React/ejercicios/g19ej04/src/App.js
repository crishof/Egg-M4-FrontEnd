import "./App.css";
import Navbar from "./components/Navbar";
import Main1 from "./components/Main1";
import Main2 from "./components/Main2";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dinamica from "./components/Dinamica";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main1 />} />
          <Route path="/components/Main2" element={<Main2 />} />
          <Route path="/Dinamica/:id" element={<Dinamica />}/>
          <Route path="/" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
