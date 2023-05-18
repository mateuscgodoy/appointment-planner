import React from "react";

export const Tile = ({ object }) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{object.name}</p>
      {Object.keys(object).map((key) => {
        if (key !== "name") {
          return (
            <p key={key} className="tile">
              {object[key]}
            </p>
          );
        }
        return null;
      })}
    </div>
  );
};
