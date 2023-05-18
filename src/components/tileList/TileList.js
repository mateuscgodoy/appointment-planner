import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ objects }) => {
  console.log(objects);
  return (
    <div>
      {objects && objects.length > 0 ? (
        <ul>
          {objects.map((object) => {
            return (
              <li key={object.name}>
                <Tile object={object} />
              </li>
            );
          })}
        </ul>
      ) : (
        <h3>No items yet!</h3>
      )}
    </div>
  );
};
