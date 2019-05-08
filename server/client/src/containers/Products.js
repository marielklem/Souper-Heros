import React, { Component } from 'react'

class Products extends Component {
  state = {}

  //add one item to cart on each click
  addToCart = (item) => {
    //check to make sure limit in category has not been reached
    if (this.state.length !== 0) {
      const limit = this.props.category.limit
      let sum = 0
      for (let key in this.state) {
        sum += this.state[key]
      }
      if (sum >= limit){
        throw alert (`Limit reached, please remove some ${item.category} items from your cart to add this item`)
      }
   }
   
   //if item already in state, add one
    if (item.name in this.state) {
      const qty = parseInt(this.state[item.name]) + 1
      this.setState({[item.name] : qty})
    } else {
      this.setState({[item.name]: 1})
    }
  }

  //subtract one item from cart on click
  subtractFromCart = (item) => {
    if (this.state[item.name] > 0) {
      const qty = parseInt(this.state[item.name]) - 1
      this.setState({[item.name] : qty})
    } else {
      this.setState({[item.name]: 0})
    }
  }

  render() {
    if (this.props.products.length === 0) {
    }
    return this.props.products.map (item => {
    return (
      <li className="col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2" key={item._id}>
        <div className="card">
          <img className="card-img-top" src={item.image} alt="food item" />
          <h5 className="card-title">{item.name}</h5>
          <div className="qty mt-3">
            <span className="minus bg-secondary" onClick={() => this.subtractFromCart(item)}>-</span>
            <input type="number" className="count" name={item.name} value={this.state[item.name] || 0} />
            <span className="plus bg-secondary" onClick={() => this.addToCart(item)}>+</span>
          </div>
        </div>
      </li>
    )
    })
  }
}

export default Products
