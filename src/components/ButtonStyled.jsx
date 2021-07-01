import React from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Gear from "../assets/imgs/rueda.svg";

const useStyles = makeStyles(() => ({
  buttonRound: {
    backgroundColor: "#1B2444",
    color: "#fff",
    position: "relative",
    border: "2px solid transparent",
    borderRadius: 6,
    backgroundClip: "padding-box",
    boxShadow: "0 20px 6px rgba(0 0 0 / 0.2)",
    fontWeight: 700,
    "& span": {
      justifyContent: "center",
      display: "flex",
      padding: "0 0.5rem 0 0",
    },
    "&:after": {
      position: "absolute",
      top: -2,
      left: -2,
      right: -2,
      bottom: -2,
      background: "linear-gradient(to left,#0df9d2, #f73669)",
      content: '""',
      zIndex: -1,
      borderRadius: 6,
    },
    "&:hover": {
      backgroundColor: "#2f417c",
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button className={classes.buttonRound} variant="contained">
        <span aria-label="gear">
          <img src={Gear} alt="gear" />
        </span>{" "}
        Create Vault
      </Button>
    </div>
  );
}
