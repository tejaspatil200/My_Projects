import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import './navbar.css'
function Navbar() {


 return (

    <div>

        <nav className="navbar navbar-expand-lg navbar-light deliverycol " >
            <div className="container-fluid">
                <a className="navbar-brand nav__link" href="/orderlist">
                    Delivery
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
                            <Link className="nav-link nav__link" to="/orderlist">
                                Orders
                            </Link>
                        </li>


                        <li>
                            <Link className=" nav-link  nav__link" to="/delprofile">
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link className=" nav-link  nav__link" to="/deliverylogout">
                                Logout
                            </Link>
                        </li>
                     
                    </ul>
                </div>
            </div>
        </nav>
    </div>
)}

export default Navbar