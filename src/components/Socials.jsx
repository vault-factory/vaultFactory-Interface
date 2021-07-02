import React from "react";

import Medium from "../assets/imgs/medium.svg";
import Telegram from "../assets/imgs/telegram.svg";
import Twitter from "../assets/imgs/twitter.svg";
import Discord from "../assets/imgs/discord.svg";
import IconButton from "@material-ui/core/IconButton";

export const Socials = () => {
  return (
    <>
      <IconButton>
        <img src={Twitter} alt="Twitter" />
      </IconButton>
      <IconButton>
        <img src={Discord} alt="Discord" />
      </IconButton>
      <IconButton>
        <img src={Medium} alt="medium" />
      </IconButton>
      <IconButton>
        <img src={Telegram} alt="Telegram" />
      </IconButton>
    </>
  );
};

export default Socials;
