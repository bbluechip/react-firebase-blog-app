import React from "react";

import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import blogJpeg from "../assets/blackblog.png";
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { spacing } from "@mui/system";

const styles = {
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: spacing(2),
  },
  title: {
    display: { xs: "none", sm: "block" },
    fontFamily: "Girassol",
    "& span": {
      fontSize: 30,
      color: "wheat",
    },
  },
  login: {
    padding: 10,
    fontSize: 20,
    color: "white",
    textDecoration: "none",
  },
  register: {
    fontSize: 20,
    padding: 10,
    color: "white",
    textDecoration: "none",
  },
  maxWidthLogReg: {
    textDecoration: "none",
    color: "black",
  },
  blogImg: {
    width: 40,
  },
  appBar: {
    backgroundColor: "#046582",
  },
  linkStyle: {
    textDecoration: "none",
    color: "black",
  },
};

export default function PrimarySearchAppBar() {
  // const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleMenuClose();
    logout();
  };

  const handleDashboard = () => {
    navigate("/");
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <>
      {currentUser?.email ? (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          id={menuId}
          keepMounted
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          open={isMenuOpen}
          onClose={handleMenuClose}
          sx={{ marginTop: "2rem", marginLeft: "1rem" }}
        >
          <Link to="/profile" style={styles.linkStyle}>
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          </Link>
          <Link to="/new-blog" style={styles.linkStyle}>
            <MenuItem onClick={handleMenuClose}>New</MenuItem>
          </Link>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      ) : (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          id={menuId}
          keepMounted
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          open={isMenuOpen}
          onClose={handleMenuClose}
          sx={{ marginTop: "2rem", marginLeft: "1.25rem" }}
        >
          <Link to="/login" style={styles.linkStyle}>
            <MenuItem onClick={handleMenuClose}>Login</MenuItem>
          </Link>
          <Link to="/register" style={styles.linkStyle}>
            <MenuItem onClick={handleMenuClose}>Register</MenuItem>
          </Link>
        </Menu>
      )}
    </>
  );

  return (
    <div style={styles.grow}>
      <AppBar position="fixed" sx={styles.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            sx={styles.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDashboard}
          >
            <img src={blogJpeg} alt="blog" style={styles.blogImg} />
          </IconButton>
          <div style={styles.grow} />
          <Link to="/" style={styles.login}>
            <Typography sx={styles.title} variant="h6" noWrap>
              ──── <span>{"<🎫bbluechip/>"}</span> Blog ────
            </Typography>
          </Link>
          <div style={styles.grow} />
          <div>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {renderMenu}
    </div>
  );
}
