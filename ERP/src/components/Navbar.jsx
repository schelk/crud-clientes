import { FaHome } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Navbar = ({ showSidebar }) => {
  return (
    <div className={showSidebar ? "sidenav active" : "sidenav"}>
      <img src="chilliz.png" alt="logo" className="logo" />
      <ul>
        <li>
          <Link to="/">
            <FaHome />
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FaInfo />
            ABOUT
          </Link>
        </li>{" "}
        <li>
          <Link to="/clientes">
            <FaPerson />
            CLIENTES
          </Link>
        </li>{" "}
      </ul>
    </div>
  );
};

export default Navbar;
