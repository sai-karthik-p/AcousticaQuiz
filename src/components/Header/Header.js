import { Link } from "react-router-dom";
import "./Header.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="title">
        Acoustica Quiz
      </Link>
      <hr className="divider" />
    </div>
  );
};

export default Header;
