import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import logoV2 from "../assets/images/logoV2.svg";

export const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
      <p className="col-md-4 mb-0 text-body-secondary">
        © Crack it squad, 2026
      </p>
      <img className="bi me-2" height="32" src={logoV2} />
      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item">
          <NavLink to="/" className="nav-link px-2 text-body-secondary">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="" className="nav-link px-2 text-body-secondary">
            About us
          </NavLink>
        </li>
        <li className="nav-item">
          <Link
            to="https://github.com/Karl97490/e-commerce-react"
            className="nav-link px-2 text-body-secondary"
          >
            Github
          </Link>
        </li>
      </ul>
    </footer>
  );
};
