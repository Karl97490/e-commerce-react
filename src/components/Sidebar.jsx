import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import logoV2 from "../assets/images/logoV2.svg";
import homeIcon from "../assets/images/home-icon.svg";
import aboutIcon from "../assets/images/about-icon.svg";
import profileIcon from "../assets/images/profile-icon.svg";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="container header">
        <img src={logoV2} alt="Logo" height="30px" />
      </div>
      <ul className="side-nav">
        <NavLink to="/">
          <div className="nav-items container">
            <img src={homeIcon} alt="Home icon" height="30px" />
          </div>
        </NavLink>
        <NavLink to="about">
          <div className="nav-items container">
            <img src={aboutIcon} alt="About icon" height="30px" />
          </div>
        </NavLink>
      </ul>
      <div className="container footer">
        <NavLink to="">
          <img src={profileIcon} alt="Admin profile" height="35px" />
        </NavLink>
      </div>
    </aside>
  );
};

{
  /* <div
  className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
  style={{ width: "280px", height: "500px" }}
>
  <NavLink
    to="/"
    className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
  >
    <img className="bi me-2" width="40" height="32" />
  </NavLink>
  <ul className="nav nav-pills flex-column mb-auto">
    <li className="nav-item">
      <NavLink to="/" className="nav-link active" aria-current="page">
        <img className="bi me-2" width="16" height="16" />
        Home
      </NavLink>
    </li>
    <li>
      <a href="#" className="nav-link text-white">
        <img className="bi me-2" width="16" height="16"></img>
        Dashboard
      </a>
    </li>
  </ul>
  <div className="dropdown">
    <NavLink
      to={undefined}
      className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
      id="dropdownUser1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <img
        src="https://github.com/mdo.png"
        alt=""
        width="32"
        height="32"
        className="rounded-circle me-2"
      />
      <strong>Admin</strong>
    </NavLink>
  </div>
</div>; */
}
