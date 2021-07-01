import React from "react";

export default function useWeb3Context(ctx) {
  const context = React.useContext(ctx);
  if (!context) {
    throw new Error("useWeb3Context must be used within a Web3ContextProvider");
  }
  return context;
}
