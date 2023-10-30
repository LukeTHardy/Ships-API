import { useState, useEffect } from "react";
import { getDocks } from "../services/APIService";

export const Docks = () => {
  const [docks, setDocks] = useState([]);
  useEffect(() => {
    getDocks().then((docksArray) => {
      setDocks(docksArray);
    });
  }, []);
  return (
    <div className="component-container flex flex-col items-center">
      <h1 className="title text-aqua my-10">DOCKS 🏗️</h1>
      <div className="lists-container flex justify-evenly w-1/2 h-[30rem] bg-black bg-opacity-50 rounded-xl">
        <div className="text-2xl">
          NAME
          <ul>
            {docks.map((dockObj) => {
              return (
                <li key={dockObj.id} value={dockObj.id} className="text-2xl">
                  {dockObj.location}
                  <br></br>
                  <ul>
                    {dockObj.haulers.map((hauler) => {
                      return (
                        <li key={hauler.id} value={hauler.id}>
                          • {hauler.name}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="text-2xl">
          CAPACITY (tons)
          <ul>
            {docks.map((dockObj) => {
              return (
                <li key={dockObj.id} value={dockObj.id} className="text-xl">
                  {dockObj.capacity}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
