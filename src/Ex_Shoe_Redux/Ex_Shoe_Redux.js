import React, { Component } from 'react'
import CartShoe from './CartShoe'
import DetailShoe from './DetailShoe'
import ItemShoe from './ItemShoe'
import ListShoe from './ListShoe'
import {shoeArr  } from './data'

export default class Ex_Shoe_Redux extends Component {
  state ={
    shoeArr : shoeArr,
    detail : shoeArr[0],
    cart : [],
  }
  // handleViewDetail = (shoe) => {
  //   this.setState({detail : shoe, });  
  // };

  handleRemove = (id) => {
    let newCart = this.state.cart.filter((item)=>{return item.id!=id;});
    this.setState({cart: newCart})
  }

  handleCart = (shoe) => {
    console.log(shoe);
    const newCart  = this.state.cart;
    // kiểm tra trong giỏ hàng có sản phẩm chưa
    const index = newCart.findIndex((value) => value.id == shoe.id)

    if(index != -1){
      newCart[index].cartQuantity +=1
    }
    else{
      newCart.push({...shoe, cartQuantity : 1})
      
    }
    
    
    this.setState({
      cart : newCart,
    }
      
    )
  }

  handleCartQuantity = (shoeId, quantity) => {
   const newCart = this.state.cart
   const index = newCart.findIndex((value) => value.id == shoeId)
   newCart[index].cartQuantity = newCart[index].cartQuantity + quantity || 1
   
   this.setState(
    {
      cart : newCart,
    }
   )
  }

 
  render() {
    return (
      <div>
        <div className="row">
            <div className='col-6'><CartShoe handleRemove ={this.handleRemove} cart = {this.state.cart} handleCartQuantity = {this.handleCartQuantity}/>
            </div>
            <div className='col-6'><ListShoe handleCart ={this.handleCart}
                                              // handleViewDetail={this.handleViewDetail}
                                            // List={this.state.shoeArr}
                                            />
                                            </div>
            <div className='col-12'><DetailShoe
            //  detail={this.state.detail}
            /></div>
        </div>
       

      </div>
    )
  }
}
