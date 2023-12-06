import React, { Component } from 'react'

export default class CartShoe extends Component {
  render() {
    let{  cart,handleRemove, handleCartQuantity } = this.props;
    return (
      
    <table className='table'>
      <thead></thead>
      <tr>
        <th>Name</th>
        <th>Image</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Total</th>
        <th>Delete</th>
      </tr>
      <tbody>
       
          {
          cart.map((item,index) =>{
            return( 
            <tr key={index}>
              <td>{item.name}</td>
              <td><img style ={{width:50}}src={item.image}></img></td>
              <td>
                <button className='btn btn-danger' onClick={() => {handleCartQuantity(item.id,-1)}}>-</button>
                <span className='px-4'>{item.cartQuantity}</span>
                <button className='btn btn-success' onClick={() => {handleCartQuantity(item.id,1)}}>+</button>
                </td>
                
              <td>{item.price}</td>
              <td>{item.price * item.cartQuantity}</td>
              <td><button className='btn btn-danger' onClick={() => {handleRemove(item.id)}}>Delete</button></td>
            </tr>);  
          }
          )
          }
        
      </tbody>
    </table>
    )
  }
}
