import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [notActive, setActive] = useState(false);
  const [notActive2, setActive2] = useState(false);
  const location = useLocation();

  const toggleActive = () => {
    setActive2(false);
    const currentState = notActive;
    setActive(!currentState);
  };
  const toggleActive2 = () => {
    setActive(false);
    const currentState2 = notActive2;
    setActive2(!currentState2);
  };

  const className = (path) => {
    if (location.pathname === path) return "active";
    return null;
  };

  return (
    <nav className="navbar">
      <h1>BitBlog</h1>
      <div className="links">
        <Link to="/" className={className("/")} /*onClick={toggleActive}*/>
          Home
        </Link>
        <Link to="/create" className={className("/create")} /*onClick={toggleActive2}*/>
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
