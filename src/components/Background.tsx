import React from "react";

const Background = () => {
  return (
    <div
      style={{
        backgroundImage:
          "radial-gradient( rgba(255, 255, 255, 0.3) 3%, #041431 0%)",
        backgroundPosition: "0 0",
        backgroundSize: "60px 65px",
        zIndex: "-10",
        width: "100%",
        height: "100%",
        position: "fixed",
        backgroundColor: "transparent",
      }}
    />
  );
};

export default Background;
