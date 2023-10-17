import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light admincol nav-pills nav-fill">
      <div className="container-fluid">
        <a className="navbar-brand mb-0 h1 nav__link" href="/order">
          Admin
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link  fw-bold nav__link " to="/order">
                Order
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fw-bold nav__link"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link className="nav-link fw-bold" to="/laptop">
                    laptop
                  </Link>
                </li>
                <li>
                  <Link className="nav-link fw-bold" to="/mobile">
                    Mobile
                  </Link>
                </li>
                <li>
                  <Link className="nav-link fw-bold" to="/earphone">
                    Earphone
                  </Link>
                </li>
                <li>
                  <Link className="nav-link fw-bold" to="/tv">
                    Tv
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link className="nav-link fw-bold nav__link" to="/employee">
                Employee
              </Link>
            </li>
            <li>
              <Link className="nav-link fw-bold nav__link" to="/delivery">
                Delivery
              </Link>
            </li>
            <li>
              <Link className="nav-link fw-bold nav__link" to="/logout">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
