import React from "react";
import { Dropdown } from "react-bootstrap";

const AdminHeader = () => {
    return(
        <>
        <nav className="navbar navbar-dark bg-primary ">
        <div className="container-fluid">
            <a className="navbar-brand fs-3 px-5">Food Adda</a>
            <div className="btn-group ">
                <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    CATEGORY
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="addcategory.html">Add Category</a></li>
                  <li><a className="dropdown-item" href="viewcategory.html">View & Delete Category</a></li>
                  <li><a className="dropdown-item" href="viewallfood.html">View All Foods</a></li>
                </ul>
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    RESTAURANTS
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="viewrestaurants.html">View & Delete Restaurant</a></li>
                  <li><a className="dropdown-item" href="viewdeliverypersons.html">View Delivery Person Details </a></li>
                </ul>
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    CUSTOMERS
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="viewcustomers.html">View Customers</a></li>
                  <li><a className="dropdown-item" href="viewallcustomersorder.html">View Customer Orders</a></li>
                </ul>
              </div>
            <div className="lg-rg bg-primary mx-2 px-2">
                <a href="adminregister.html"><button type="button" className="btn  btn-outline-light mx-2">Register</button></a>
                <a href="Welcome.html"><button type="button" className="btn  btn-light btn-outline-danger mx-2">Logout</button></a>
            </div>
        </div>
        </nav>

        </>
    )
}

export default AdminHeader;