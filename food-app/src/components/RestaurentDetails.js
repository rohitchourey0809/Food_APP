import React from "react";

export const RestaurentDetails = ({ img, name, price, rate, dsc }) => {
  return (
    <>
      <div
        className="foodcontainer"
        style={{
  
          gap: "2rem",
          border: "1px solid black",
          padding: "1rem",
          margin: "1rem",
        }}
      >
        <div>
          <img style={{ width: "100%" }} src={img} alt={name} />
        </div>
        <div>
          <div>
            <h2>{name}</h2>
          </div>
          <div>{dsc}</div>
          <div>Price:`${price}`</div>
          <div>Rating:{rate}</div>
        </div>
      </div>
    </>
  );
};
