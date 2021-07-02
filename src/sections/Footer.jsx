import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/styles";
import Socials from "../components/Socials";

const useStyles = makeStyles(() => ({
  root: {
    background: "#070708",
    minHeight: "10vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 4rem",
  },
  text: {
    fontSize: "1rem",
    color: "#EAE9FF",
    margin: "0 1rem",
    fontWeight: "200",
  },
  socials: {
    display: "flex",
    "& button": { padding: "0 1rem" },
  },
}));

export const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Typography className={classes.text}>vaultfactory.finance</Typography>
      <Box className={classes.socials}>
        <Socials />
      </Box>
    </footer>
  );
};

export default Footer;
