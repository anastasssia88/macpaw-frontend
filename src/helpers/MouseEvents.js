import { useState } from "react";

const MouseEvents = () => {
  const handleMouseOver = (filter) => {
    if (filter === "breed") {
      setLimitOpen(false);
    } else if (filter === "limit") {
      setBrOpen(false);
    }
  };

  const handleMouseLeave = () => {
    setBrOpen(false);
    setLimitOpen(false);
  };

  return <div></div>;
};

export default MouseEvents;
