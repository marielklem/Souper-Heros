import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from "../actions";
import grapes from "../static/grapes.jpg"
import feed from "../static/network.png"
import {Link} from 'react-router-dom';

class Welcome extends Component {
  //on page load, fetch all products
  componentDidMount = () => {
    this.props.fetchCategories();
    this.props.fetchProducts();
    this.props.fetchOrders();
  }

  render() {
    return(
      <React.Fragment>
      <header>

        {/* <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
          <div className="container">
            <a className="navbar-brand" href="#">
              <strong>Souper Heroes</strong>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-7" aria-controls="navbarSupportedContent-7" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent-7">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to="/checkout" className="nav-link">View Cart</Link>
                </li>
                <li className="nav-item">
                  <Link to="/shop" className="nav-link">Shop</Link>
                </li>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link">Profile</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}

        <div className="view" style={{"background-image": `url(${grapes})`, "background-repeat": "no-repeat", "backgroundSize": "cover", "backgroundPosition": "center center", "minHeight": "500px"}}>
          <div className="mask rgba-gradient d-flex justify-content-center align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-md-6 white-text text-center text-md-left mt-xl-5 mb-5" style={{"color": "#eee"}}>
                  <h3 className="h1-responsive font-weight-bold mt-sm-5">Welcome to Souper Heroes!</h3>
                  <hr style={{"color": 'white'}}/>
                  <h6 className="mb-4">Souper Heroes starts with the idea that a client can shop from anywhere and pick up pre-packed bags at times that align with their schedule in order to connect busy clients with food resources more efficiently. Clients can shop current inventory and volunteers will be notified when food bags have been requested. Limits can be made to maintain inventory, while tracking demographics information and utilization for reporting purposes.</h6>
                </div>

                <div className="col-md-6 col-xl-5 mt-xl-5 end-network">
                  <img src={feed} alt="" className="img-responsive"/>
                </div>
                

              </div>

            </div>

          </div>

        </div>

      </header>

      <div className="main">
        <div className="container">
          <div className="row py-5">
            <div className="col-xs-12 col-md-4 text-center">
              <Link to="/checkout">
                <i className="fas fa-store big-icons"/>
              </Link>
              <div style={{"paddingTop": "20px"}}>See what food we have in our pantry right now and shop for you and your family </div>
            </div>
            <div className="col-xs-4 col-md-4 text-center">
              <Link to="/checkout">
                <i className="fas fa-user big-icons"/>
              </Link>
              <div style={{"paddingTop": "20px"}}>Create a profile to help us collect demographics information for reporting purposes for the Food Bank of Central and Eastern NC</div>
            </div>
            <div className="col-xs-4 col-md-4 text-center">
              <Link to="/checkout"><i className="fas fa-shopping-cart big-icons"/></Link>
              <div style={{"paddingTop": "20px"}}>Already started shopping? See what you have in your cart and checkout to place your order</div>
            </div>
          </div>

        </div>
      </div>
</React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return { 
    cart: state.cart,
    user: state.user,
    orders: state.orders
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch(actionTypes.fetchCategories()),
    fetchProducts: () => dispatch(actionTypes.fetchProducts()),
    fetchOrders: () => dispatch(actionTypes.fetchOrders())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)  