import React from "react";
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";

const Navbar = () => {

  const state = useSelector((state) => state.handleCart);

  return (
    <>
      <div className="hero">

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand fw-bold fs-4 font-weight-bold" href="#">MY COLLECTION</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/">
                  <h5 className="nav-link " >Home <span className="sr-only">(current)</span></h5>
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/product">
                  <h5 className="nav-link" >Products</h5>
                </Link>

              </li>
              <li className="nav-item active">
                <Link to="/category">
                  <h5 className="nav-link" >Categories</h5>
                </Link>

              </li>
              <li className="nav-item active">
                <Link to="/contact">

                  <h5 className="nav-link" >Contact us</h5>
                </Link>

              </li>





            </ul>
            <div className="buttons">
              <button className="btn btn-outline-dark m-2"> <i className="fa fa-sign-in me-1"></i> Login </button>
              <Link to="/register">

                <button className="btn btn-outline-dark m-2"> <i className="fa fa-user-plus me-1"></i> Register </button>
              </Link>


              <Link to="/cart">
                <button className="btn btn-outline-dark m-2"> <i className="fa fa-shopping-cart me-1"></i> Cart ({state.length}) </button>
              </Link>

            </div>

          </div>
        </nav>

      </div>
    </>
  )
}

export default Navbar;
