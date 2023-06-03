import * as React from "react";
import Link from "@mui/material/Link";
import { styled } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const Nav = styled(Toolbar)({
  background: "black",
  color: "white",
  display: "flex",
  justifyContent: "space-around",
  maxWidth: "100%",
});

const NavLink = styled(Link)({
  color: "white",
  padding: "0 2.5rem",
  fontFamily: "Aleo",
  textAlign: "center",
});

const Navbar = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static" color="transparent">
        <Nav>
          <NavLink href="#" underline="none" variant="h5">
            Create Your Todo List
          </NavLink>
        </Nav>
      </AppBar>
    </>
  );
};

export default Navbar;
