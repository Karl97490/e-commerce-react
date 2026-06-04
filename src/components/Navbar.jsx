import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import logoV2 from "../assets/images/logoV2.svg";

export const Navbar = () => {
  return (
    <nav className="navbar"> 
      <div className="container-fluid">
        <NavLink to="/">
          <div className="navbar-brand">
            <img
              src={logoV2}
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            <span>E-commerce</span>
          </div>
        </NavLink>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};
