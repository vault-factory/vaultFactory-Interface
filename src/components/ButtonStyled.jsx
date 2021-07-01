import React from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Gear from "../assets/imgs/rueda.svg";

const useStyles = makeStyles(() => ({
  border: {
    position: "relative",
    background: "linear-gradient(to right,#0df9d2, #f73669)",
    padding: "2px",
    boxShadow: "0 20px 6px rgba(0 0 0 / 0.2)",
    borderRadius: 6,
    fontWeight: 700,
    "& span": {
      justifyContent: "center",
      padding: "0 0.5rem 0 0",
    },
  },
  in: {
    background: "#181E3A",
    color: "white",
    padding: "0.2rem 1rem",
    borderRadius: "3px",
    fontWeight: 700,
    "&:hover": {
      backgroundColor: "#1A2343",
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button className={classes.border} variant="contained">
        <Box className={classes.in}>
          <span aria-label="gear">
            <img src={Gear} alt="gear" />
          </span>{" "}
          Create Vault
        </Box>
      </Button>
    </div>
  );
}
