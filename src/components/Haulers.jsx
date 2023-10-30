import { useState, useEffect } from "react";
import { getHaulers } from "../services/APIService";
import { useNavigate } from "react-router-dom";

export const Haulers = () => {
  const navigate = useNavigate();
  const [haulers, setHaulers] = useState([]);
  useEffect(() => {
    getHaulers().then((haulersArray) => {
      setHaulers(haulersArray);
    });
  }, []);

  const handleEditClick = (haulerId) => {
    navigate(`/haulers/${haulerId}/edit`);
  };

  return (
    <div className="component-container flex flex-col items-center">
      <h1 className="title text-aqua my-10">HAULERS 🚢</h1>
      <div className="lists-container flex justify-center items-center w-1/2 h-[24rem] bg-black bg-opacity-50 rounded-xl">
        <ol>
          {haulers.map((haulerObj) => {
            return (
              <li key={haulerObj.id} value={haulerObj.id} className="text-xl">
                {haulerObj.name}
                <button
                  className="ml-5"
                  onClick={() => handleEditClick(haulerObj.id)}
                >
                  Edit
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};
