import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDocks, getHaulerById } from "../services/APIService";
import { editHauler } from "../services/APIService";

export const HaulerEdit = () => {
  const navigate = useNavigate();
  const { haulerId } = useParams();
  const [hauler, setHauler] = useState({});
  const [docks, setDocks] = useState([]);

  useEffect(() => {
    getHaulerById(haulerId).then((haulerObj) => {
      setHauler(haulerObj);
    });
  }, [haulerId]);

  useEffect(() => {
    getDocks().then((docksArray) => {
      setDocks(docksArray);
    });
  }, []);

  const handleSave = (e) => {
    e.preventDefault();

    const updatedHauler = {
      id: hauler.id,
      name: hauler.name,
      dock_id: hauler.dock_id,
    };

    editHauler(updatedHauler).then(() => {
      navigate(`/haulers`);
    });
  };
  return (
    <div className="edit-form-container flex flex-col items-center">
      <form className="edit-hauler-form">
        <h1 className="title text-aqua my-10 text-center">EDIT HAULER</h1>
        <div className="inputs-container flex flex-col justify-start items-start w-[30rem] h-[24rem] bg-black bg-opacity-50 rounded-xl">
          <fieldset className="flex m-3">
            <label htmlFor="name">Name: </label>
            <input
              id="name"
              name="name"
              value={hauler.name ? hauler.name : ""}
              type="text"
              placeholder="Hauler name"
              onChange={(event) => {
                const haulerCopy = { ...hauler };
                haulerCopy.name = event.target.value;
                setHauler(haulerCopy);
              }}
              className="ml-3"
            />
          </fieldset>
          <div className="dock-container flex m-3">
            <div className="dock-title">Dock: </div>
            <div className="select">
              <select
                name="dockId"
                value={hauler.dock_id}
                onChange={(event) => {
                  const haulerCopy = { ...hauler };
                  haulerCopy.dock_id = parseInt(event.target.value);
                  setHauler(haulerCopy);
                }}
                className="ml-3"
              >
                <option value={0}>Select a dock</option>
                {docks.map((dock) => {
                  return (
                    <option key={dock.id} value={dock.id}>
                      {dock.location}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <button className="save-btn m-3 self-center" onClick={handleSave}>
            Update Hauler
          </button>
        </div>
      </form>
    </div>
  );
};
