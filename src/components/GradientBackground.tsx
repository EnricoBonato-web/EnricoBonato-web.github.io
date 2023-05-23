import React, { useState, useEffect } from "react";

const GradientBackground = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: { clientX: any; clientY: any }) => {
      setTimeout(function () {
        setPosition({ x: event.clientX, y: event.clientY });
      }, 200);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `radial-gradient(200px at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.5), #041431)`,
        pointerEvents: "none",
        zIndex: -100,
        transition: "all 1s",
        backgroundClip: "content-box",
      }}
    />
  );
};

export default GradientBackground;
