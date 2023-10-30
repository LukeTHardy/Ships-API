import { useState, useEffect } from "react";
import { getShips, deleteShip } from "../services/APIService";

export const Ships = () => {
  const [ships, setShips] = useState([]);
  useEffect(() => {
    getShips().then((shipsArray) => {
      setShips(shipsArray);
    });
  }, []);

  const handleDeleteClick = (shipId) => {
    deleteShip(shipId);
  };

  return (
    <div className="component-container flex flex-col items-center">
      <h1 className="title text-aqua my-10">SHIPS 🛥️</h1>
      <div className="lists-container flex justify-center items-center w-1/2 h-[24rem] bg-black bg-opacity-50 rounded-xl">
        <ol>
          {ships.map((shipObj) => {
            return (
              <li key={shipObj.id} value={shipObj.id} className="text-xl">
                {shipObj.name} -- hauled by: {shipObj.hauler.name}
                <button
                  className="ml-5"
                  onClick={() => handleDeleteClick(shipObj.id)}
                >
                  Delete :(
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};
