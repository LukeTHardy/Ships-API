import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { NavBar } from "./components/NavBar";
import { Ships } from "./components/Ships";
import { Haulers } from "./components/Haulers";
import { Docks } from "./components/Docks";
import { HaulerEdit } from "./components/HaulerEdit";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route path="/" element={<Homepage />} />
        <Route path="ships" element={<Ships />} />
        <Route path="haulers">
          <Route index element={<Haulers />} />
          <Route path=":haulerId/edit" element={<HaulerEdit />} />
        </Route>
        <Route path="docks" element={<Docks />} />
      </Route>
    </Routes>
  );
};
