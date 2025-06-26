import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <header className="header">
            <h1>
                React Browser <span>Routes</span>
            </h1>
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "active-item" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                isActive ? "active-item" : ""
                            }
                        >
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/signin"
                            className={({ isActive }) =>
                                isActive ? "active-item" : ""
                            }
                        >
                            Sign In
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/profile"
                            className={({ isActive }) =>
                                isActive ? "active-item" : ""
                            }
                        >
                            Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "active-item" : ""
                            }
                        >
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Menu;
