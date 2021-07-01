import React from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  buttonRound: {
    backgroundColor: "#1B2444",
    color: "#fff",
    position: "relative",
    border: "2px solid transparent",
    borderRadius: 6,
    backgroundClip: "padding-box",
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
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button className={classes.buttonRound} variant="contained">
        <span aria-label="nut" role="img">
          ⚙️
        </span>{" "}
        Create Vault
      </Button>
    </div>
  );
}
