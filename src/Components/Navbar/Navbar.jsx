import Brand from "./Brand";
//import CategoryItem from "./CategoryItem";
import MenuButton from "./MenuButton";
import CartWidget from "./Cart/CartWidget";
import { NavLink } from "react-router-dom";
import Navbar_Routes from "../../routes/Routes";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Brand BrandName="M.L.L." />
        <MenuButton />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 displaySpace">
            {Navbar_Routes.map((route) => (
              <li key={route.path} className="nav-item marginsNav">
                <NavLink
                  to={route.path}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  {route.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
