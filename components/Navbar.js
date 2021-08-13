import * as React from "react";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import { styled } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";


const Nav = styled(Toolbar)({
  background: "white",
  color: "black",
  display: "flex",
  justifyContent: "space-around",
  maxWidth: "100%",
});

const NavLink = styled(Link)({
  color: "black",
  padding: "0 2.5rem",
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
          <NavLink href="#" underline="none" variant="h6">
            Just A Another Todo App
          </NavLink>
        </Nav>
      </AppBar>
    </>
  );
};

export default Navbar;
