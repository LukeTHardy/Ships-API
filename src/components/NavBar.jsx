import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navbar-container flex items-center font-sans text-3xl bg-black h-12">
      <Link to={"/ships"}>
        <div className="nav-link mx-5 ml-10">Ships</div>
      </Link>
      <Link to={"/haulers"}>
        <div className="nav-link mx-5">Haulers</div>
      </Link>
      <Link to={"/docks"}>
        <div className="nav-link mx-5">Docks</div>
      </Link>
    </div>
  );
};
