import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import Button from "../components/ButtonStyled";
import TopBar from "../components/navs/TopBar";
import Finance from "../assets/imgs/finance.svg";
import Logo from "../assets/imgs/logo.svg";
import VaultFactory from "../assets/imgs/vaultfactory.svg";

const useStyles = makeStyles(() => ({
  root: {
    background:
      "radial-gradient(25.18% 50% at 50% 50%, #222035 0%, #070708 100%), #C4C4C4",
    minHeight: "100vh",
    maxWidth: "100xw",
    display: "block",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "#fff",
  },
  space: {
    margin: "3rem 0 2rem 0",
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopBar />
      <div className={classes.content}>
        <Box sx>
          <img height="150px" src={Logo} alt="logo" />
        </Box>
        <Box>
          <img height="60px" src={VaultFactory} alt="VaultFactory" />
        </Box>
        <Box>
          <img height="20px" width="80px" src={Finance} alt="Finance" />
        </Box>
        <Box className={classes.space}>
          <Typography>Create your vault, earn money together</Typography>
        </Box>
        <Box>
          <Button />
        </Box>
      </div>
    </div>
  );
};

export default Header;
