import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import Ilustration from "../components/IlustrationSvg";

const useStyles = makeStyles(() => ({
  root: {
    background: "#070708",
    minHeight: "50vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "dcd9ff",
  },
  item1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& svg": {
      filter: "drop-shadow(0px 0px 100px rgb(255 255 255 / 0.3))",
      boxShadow: "0px 0px 90px rgba(0 0 0 / 0.1)",
    },
  },
  item2: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    flexDirection: "column",
  },
  bold: {
    fontSize: "normal",
    fontWeight: 600,
    color: "#EAE9FF",
  },
  paragraph: {
    fontSize: "0.8rem",
    color: "#EAE9FF",
    lineHeight: "24px",
  },
}));

export const Info = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container>
        <Grid container spacing={2}>
          <Grid className={classes.item1} item xs={12} md={6}>
            <Box>
              <Ilustration />
            </Box>
          </Grid>
          <Grid className={classes.item2} item xs={12} md={6}>
            <Box sx={{ color: "dcd9ff" }}>
              <Typography className={classes.bold} variant="h6">
                How do I create my Vault?
              </Typography>
              <Typography className={classes.paragraph} paragraph={true}>
                Creating your own vault is easier than opening a bank account.
                Design anything from social saving strategies to bespoke trading
                algorithms without writing any code. Vault Factory guides you
                through the process in a few simple steps. Apply now for early
                access.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Info;
