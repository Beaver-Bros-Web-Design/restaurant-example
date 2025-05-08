import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../assets/chimmys.png"; // Make sure this is the correct path

function Navbar() {
  return (
    <nav className="bg-[#1a1a1a] text-white px-6 py-4 shadow-md">
      <div className="flex items-center justify-between max-w-1xl mx-auto w-full">

  {/* Left: logo and nav */}
  <div className="flex items-center gap-6">
    <Link to="/">
      <img src={logo} alt="Chimmy's Logo" className="h-10" />
    </Link>
    <div className="flex items-center gap-4 text-sm">

      <Link to="/menu" className="hover:text-yellow-400 transition">Menu</Link>
      <div className="border-l border-white h-5" />
      <Link to="/drinks" className="hover:text-yellow-400 transition">Drinks</Link>
      <div className="border-l border-white h-5" />
      <Link to="/catering" className="hover:text-yellow-400 transition">Catering</Link>
    </div>
  </div>

  {/* Right: social icons */}
  <div className="flex gap-4">
    <a
      href="https://facebook.com/Chimmys"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-yellow-400 transition"
    >
      <FacebookIcon fontSize="medium" />
    </a>
    <a
      href="https://instagram.com/Chimmys"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-yellow-400 transition"
    >
      <InstagramIcon fontSize="medium" />
    </a>
  </div>
</div>

    </nav>
  );
}

export default Navbar;
