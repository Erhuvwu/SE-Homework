import React, { Component } from 'react';
import GoodsList from './GoodsList';
import goods from './data'
import Cart from './Cart'
import './App.css'

class App extends Component {
  state = {
    goods: goods,
    item: '',
    brand: '',
    units: '',
    quantity: 0,
    cartItems: []
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const newItem = {
			item: this.state.item,
			quantity: this.state.quantity,
			units: this.state.units
		};
		console.log('we are inside handlesubmit this is our new item', newItem);

		// * adding our new item to our state products
		this.setState({
			item: '',
			quantity: 0,
			units: '',
			goods: [ newItem, ...this.state.goods ]
			
		});
	}

  addToCart = (product) => { //whatever item is, it will be added to the cartItem state
		this.setState({
			cartItems: [ product, ...this.state.cartItems ]
		});
	}

  removeGood = (index) => {
    this.setState({
      Good: this.state.good.filter((_, i) => i !== index)
    });
  }
  
  render() {
    return (
      <div>
        <div id="title">Groceries List</div>
        <div className="form-container">
          <form id="form" onSubmit={this.handleSubmit}>
            <label htmlFor="item">Item: </label>
            <input type="text" value={this.state.item} onChange={this.handleChange} id="item" />
            <br />
            <label htmlFor="quantity">Quantity: </label>
            <input type="text" value={this.state.quantity} onChange={this.handleChange} id="quantity" />
            <br />
            <label htmlFor="units">Units: </label>
            <input type="text" value={this.state.units} onChange={this.handleChange} id="units" />
            <br />
            <input type="submit" />
          </form>
          </div>
          <div className='goods-container'>
          <div className='goods'>
            <h3 className='title1'>Goods Available in the Store</h3>
            <ul>
              {
                this.state.goods.map((good, index) => {
                  return (
                    <GoodsList key={index} good={good} handleAdd={this.addToCart} handleRemove={this.removeGood}/>
                  );
                })}
            </ul>
          </div>
          <div className="cart">
						<h3 className="title1">Items Purchased</h3>
						<ul>{
               this.state.cartItems.map((product, index) => {
                return (
                  <Cart key={index} product={product}/>
                )
              })
              }
            </ul>
            </div>
					</div>
        

      </div>
    );
  }
}

export default App;