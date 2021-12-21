import React from "react";

function Card({ background, onClick }) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: background,
        border: "1px solid gray",
      }}
      onClick={onClick}
      color={background}
    ></div>
  );
}

export default Card;
