import React from "react";

const RestaurantHeader = () => {
    return(
        <>   
        <nav className="navbar navbar-dark bg-primary ">
        <div className="container-fluid">
            <a className="navbar-brand fs-3 px-5">Food Adda</a>
            <div className="btn-group ">
                <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    MY FOOD
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="addfood.html">Add Food</a></li>
                  <li><a className="dropdown-item" href="viewmyfoods.html">View & Delete Food</a></li>
                </ul>
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    DELIVERY PERSON
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="deliverypersonregister.html">Register Delivery Person</a></li>
                  <li><a className="dropdown-item" href="viewallresdeliveryper.html">View & Delete Delivery Person Details </a></li>
                </ul>
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    ORDERS
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="viewallrestaurantorders.html">View Orders</a></li>
                </ul>
              </div>
            <div className="lg-rg bg-primary mx-2 px-2">
                <a href="Welcome.html"><button type="button" className="btn btn-outline-light mx-2">Logout</button></a>
            </div>
        </div>
        </nav>
        </>
    )
}