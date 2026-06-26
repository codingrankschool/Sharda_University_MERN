import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const links = [
    { path: "/", title: "HOME" },
    { path: "/about", title: "ABOUT" },
    { path: "/contact", title: "CONTACT" },
    { path: "/users", title: "USER" },
    { path: "/todos", title: "TODOS" },
  ];

  let activeSystle = {
    backgroundColor: "red",
    color: "white",
    textDecoration: "none",
  };

  let defaultSystle = {
    color: "black",
    textDecoration: "none",
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        backgroundColor: "lightgray",
      }}
    >
      {/* <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/contact">CONTACT</Link>
      <Link to="/users">USER</Link> */}

      {links.map(({ path, title }, index) => (
        <NavLink
          style={({ isActive }) => (isActive ? activeSystle : defaultSystle)}
          key={index}
          to={path}
        >
          {title}
        </NavLink>
      ))}
    </div>
  );
}
