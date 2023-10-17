import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light admincol">
        <div className="container-fluid">
          <a className="navbar-brand nav__link" href="/customer">
            Employee
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link nav__link" to="/customer">
                  customer
                </Link>
              </li>
              <li>
                <Link className="nav-link nav__link" to="/emp-mobile">
                 mobile
                </Link>
              </li>
              <li>
                <Link className="nav-link nav__link" to="/emp-laptop">
                  laptop
                </Link>
              </li>
              <li>
                <Link className="nav-link nav__link" to="/emp-earphone">
                  earphone
                </Link>
              </li>
              <li>
                <Link className="nav-link nav__link" to="/emp-tv">
                  tv
                </Link>
              </li>
              <li>
                <Link className="nav-link nav__link" to="/employeelogout">
                  logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
export default Navbar