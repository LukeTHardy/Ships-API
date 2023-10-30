import { getShips, getHaulers, getDocks } from "../services/APIService";
import { useState, useEffect } from "react";

export const Homepage = () => {
  const [ships, setShips] = useState([]);
  const [haulers, setHaulers] = useState([]);
  const [docks, setDocks] = useState([]);

  useEffect(() => {
    getShips().then((shipsArray) => {
      setShips(shipsArray);
    });
  }, []);
  useEffect(() => {
    getHaulers().then((haulersArray) => {
      setHaulers(haulersArray);
    });
  }, []);
  useEffect(() => {
    getDocks().then((docksArray) => {
      setDocks(docksArray);
    });
  }, []);

  return (
    <div className="component-container flex flex-col items-center">
      <h1 className="title text-aqua my-10">SHIPPING SHIPS ⚓️</h1>
      <div className="lists-container flex justify-around w-1/2 h-[26rem] bg-black bg-opacity-50 rounded-xl">
        <div className="list">
          <div className="underline text-3xl mb-2">Ships</div>
          <ul>
            {ships.map((shipObj) => {
              return (
                <li key={shipObj.id} value={shipObj.id} className="text-xl">
                  •{shipObj.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="list text-3xl">
          <div className="underline text-3xl mb-2">Haulers</div>
          <ul>
            {haulers.map((haulerObj) => {
              return (
                <li key={haulerObj.id} value={haulerObj.id} className="text-xl">
                  •{haulerObj.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="list text-3xl">
          <div className="underline text-3xl mb-2">Docks</div>
          <ul>
            {docks.map((dockObj) => {
              return (
                <li key={dockObj.id} value={dockObj.id} className="text-xl">
                  •{dockObj.location}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
