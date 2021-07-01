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
    color: "white",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    flexDirection: "column",
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
            <Box>
              <Typography variant="h5">How do I create my Vault?</Typography>
              <Typography variant="caption">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis delectus esse ullam vero consectetur vitae ea
                molestias? Delectus, numquam asperiores.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Info;
