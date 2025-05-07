import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function Navbar() {
  return (
    <nav
      style={{ backgroundColor: "#1a1a1a" }}
      className="p-4 text-white flex justify-between items-center"
    >
      <div className="flex gap-4 flex-1">
        <Link to="/" className="hover:text-yellow-300">
          Home
        </Link>
        <Link to="/menu" className="hover:text-yellow-300">
          Menu
        </Link>
        <Link to="/drinks" className="hover:text-yellow-300">
          Drinks
        </Link>
        <Link to="/catering" className="hover:text-yellow-300">
          Catering
        </Link>
      </div>

      <div>
        <a
          href="https://facebook.com/Chimmys"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white-500 hover:text-yellow-300"
        >
          <FacebookIcon fontSize="medium" />
        </a>
      </div>

      <div>
        <a
          href="https://instagram.com/Chimmys"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white-500 hover:text-yellow-300"
        >
          <InstagramIcon fontSize="medium" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
