export const getShips = () => {
  return fetch(`http://localhost:8000/ships?_expand=hauler`).then((res) =>
    res.json()
  );
};
export const getHaulers = () => {
  return fetch(`http://localhost:8000/haulers`).then((res) => res.json());
};
export const getDocks = () => {
  return fetch(`http://localhost:8000/docks?_embed=hauler`).then((res) =>
    res.json()
  );
};

export const getHaulerById = (haulerId) => {
  return fetch(`http://localhost:8000/haulers/${haulerId}`).then((res) =>
    res.json()
  );
};

export const editHauler = (newHaulerObj) => {
  return fetch(`http://localhost:8000/haulers/${newHaulerObj.id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(newHaulerObj),
  });
};

export const deleteShip = (shipId) => {
  return fetch(`http://localhost:8000/ships/${shipId}`, {
    method: "DELETE",
  });
};
