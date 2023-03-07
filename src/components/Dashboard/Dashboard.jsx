import React from "react";
import logo1 from "../images/logo-below.png";
import logo2 from "../images/logo-above.png";
import home from '../images/Vector4.png';
import profile from '../images/Vector (5).png';
import orders from '../images/Vector (6).png';
import cart from '../images/Vector (7).png';
import six from '../images/6.png';
import cart1 from '../images/bon-vivant-qom5MPOER-I-unsplash 5.png';
import cart2 from '../images/bon-vivant-qom5MPOER-I-unsplash 6.png';
import cart3 from '../images/bon-vivant-qom5MPOER-I-unsplash 7.png';
import cart4 from '../images/bon-vivant-qom5MPOER-I-unsplash 8.png';
import cart5 from '../images/bon-vivant-qom5MPOER-I-unsplash 9.png';
import cart6 from '../images/bon-vivant-qom5MPOER-I-unsplash 10.png';
import "./Dashboard.css";

function Dashboard() {
  const Foodcart = (props) => {
    return (
      <div className="food-cart">
        <img  src={props.img} alt="" />
        <h4>{props.header}</h4>
        <p>{props.text}</p>
        <p>
          <span className="spanleft">{props.price}</span>
          <span className="spanright">Add to cart</span>
        </p>
      </div>
    )
  }

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="dashboard-logo">
          <img src={logo1} alt="Logo" className="logo-below"></img>
          <img src={logo2} alt="Logo" className="logo-above"></img>
          <span>Lilies</span>
        </div>

        <div className="active-links">
            <div className="active">
                <img src={home} alt="" />
                <span>Dashboard</span>
            </div>

            <div className="active-d">
                <img src={profile} alt="" />
                <span>Your Profile</span>
            </div>

            <div className="active-d">
                <img src={orders} alt="" />
                <span>Orders</span>
                <img className="six" src={six} alt="" />
            </div>

            <div className="active-d">
                <img src={cart} alt="" />
                <span>Your Cart</span>
                <img className="special" src={six} alt="" />
            </div>
        </div>
      </div>

      <div className="r">
        <div className="main-div">
          <div className="main">
            <p className="above">Good morning, Oghenevwede!</p>
            <p className="under">What delicious meal are you craving today?</p>
          </div>

          <div className="pic"></div>
        </div>

        <div className="food-carts-div">
           <Foodcart img={cart1} header={'Stir Fry Pasta'} text={'The in-house pasta and chicken by chef Moose'} price={'N 1,000.00'}/>
           <Foodcart img={cart2} header={'Stir Fry Pasta'} text={'The in-house pasta and chicken by chef Moose'} price={'N 1,000.00'}/>
           <Foodcart img={cart3} header={'Stir Fry Pasta'} text={'The in-house pasta and chicken by chef Moose'} price={'N 1,000.00'}/>
           <Foodcart img={cart4} header={'Stir Fry Pasta'} text={'The in-house pasta and chicken by chef Moose'} price={'N 1,000.00'}/>
           <Foodcart img={cart5} header={'Stir Fry Pasta'} text={'The in-house pasta and chicken by chef Moose'} price={'N 1,000.00'}/>
           <Foodcart img={cart6} header={'Stir Fry Pasta'} text={'The in-house pasta and chicken by chef Moose'} price={'N 1,000.00'}/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
