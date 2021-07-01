import React from "react";
import Header from "./sections/Header";
import Info from "./sections/Info";
import { styled } from "@material-ui/core/styles";

const Root = styled("div")(({ theme }) => ({
  fontFamily: "Montserrat",
}));

function App() {
  return (
    <>
      <Root>
        <Header />
        <Info />
      </Root>
    </>
  );
}

export default App;
