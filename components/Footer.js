import styled from 'styled-components';
import { Link, Typography } from '@mui/material';
import * as React from "react";



const FooterSection = styled.div`
  background: #000;
  color: #fff;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterLink = styled(Link)({
  color: "#ffe66d",
  fontFamily: "Aleo",
  textAlign: "center",
  textDecoration: "underline",
  padding: "0.3em"
});


const Footer = () => {
  return (
    <FooterSection>
      <Typography variant="body2" >Made using Next + Redux - </Typography>
      <FooterLink href="https://github.com/tentamdin" target="_blank" underline="none" variant="body2"> @tentamdin </FooterLink>
    </FooterSection>
  );
};

export default Footer;