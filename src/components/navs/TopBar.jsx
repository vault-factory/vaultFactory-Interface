import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { styled } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import logo from "../../assets/imgs/logoMenu.svg";

const useStyles = makeStyles({
  noShadow: {
    boxShadow: "none",
  },
  nav: {
    color: "#DCD9FF",
    boxShadow: "none",
    justifyContent: "space-around",
    alignContent: "center",
    display: "flex",
    padding: 0,
    marginTop: "1rem",
  },
  link: {
    padding: "0 3em",
  },
  button: {
    borderRadius: "30px",
    color: "#DCD9FF",
    background: "rgba(72, 117, 234, 0.17);",
    border: "1px solid #4774E9",
    padding: "0.3em 1.5em",
    boxShadow: "0px 0px 20px #0e1d44",
  },
});

const Links = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  marginLeft: "5rem",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <Box>
      <AppBar
        color="transparent"
        className={classes.noShadow}
        position="absolut"
      >
        <Toolbar className={classes.nav}>
          <Box className="logo">
            <IconButton>
              <img height="48px" src={logo} alt="vault_logo" />
            </IconButton>
          </Box>
          <Links>
            <Box className={classes.link}>Vaults</Box>
            <Box className={classes.link}>Docs</Box>
            <Box className={classes.link}>Discord</Box>
          </Links>
          <Box>
            <Button className={classes.button}>Launch app</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
