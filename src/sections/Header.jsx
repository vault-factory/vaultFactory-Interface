import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import Button from "../components/ButtonStyled";
import TopBar from "../components/navs/TopBar";
import Logo from "../assets/imgs/logo.svg";

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
    "& img": {
      filter: "drop-shadow(0px 0px 100px rgb(255 255 255 / 0.1))",
    },
  },
  space: {
    margin: "3rem 0 2rem 0",
  },
  bold: {
    fontWeight: "400",
    color: "#DCD9FF",
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopBar />
      <div className={classes.content}>
        <Box sx>
          <img height="250px" src={Logo} alt="logo" />
        </Box>

        <Box className={classes.space}>
          <Typography className={classes.bold} variant="h5">
            Create your vault, earn money together.
          </Typography>
        </Box>
        <Box>
          <Button />
        </Box>
      </div>
    </div>
  );
};

export default Header;
