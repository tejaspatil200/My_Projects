import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from './../actions/userActions';

function Navbar() {

  const dispatch = useDispatch();

  const cartreducer = useSelector(state => state.CartReducer)
 const { cartItems } = cartreducer

 // const cartItems = JSON.parse(localStorage.getItem('cartItems'))
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))
  return (

    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Shop bazar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">

            <div className="navbar-nav ms-auto">


              {currentUser ? (
                // <li>{currentUser.name}</li>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {currentUser.name}
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="/profile">Profile</a>
                    <a className="dropdown-item" href="/orders">Order Details</a>
                    {/* //for inline function use arrow fn */}
                    <li className="dropdown-item" onClick={ ()=>{dispatch(logoutUser())} }>
                      
                      Logout
                    
                    
                    </li>
                  </div>
                </div>



              ) : (

                <li className="nav-item">
                  <a className="nav-link" href="/login">Login</a>
                </li>


              )}




              <li >
                

                <Link to="/cart" className="nav-link" >
                  <i class="fas fa-shopping-cart">{cartItems.length}</i>
                </Link>

              </li>

            </div>

           
          </div>
        </div>
      </nav>

    </div>

  );
}

export default Navbar;