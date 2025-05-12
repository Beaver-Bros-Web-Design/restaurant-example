import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Drinks from "./pages/Drinks";
import Catering from "./pages/Catering";
import CateringSuccess from "./pages/Catering-Success";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/catering-success" element={<CateringSuccess />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
