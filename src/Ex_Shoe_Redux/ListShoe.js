import React, { Component } from 'react'
import ItemShoe from './ItemShoe';
import { connect } from 'react-redux';


 class ListShoe extends Component {
  render() {
    const{handleCart} = this.props;
    return (
     
      <div className='row'>
        {this.props.List.map(
          (item,index) => {
            return( 
        <ItemShoe
        handleCart = {handleCart}
        // handleViewDetail = {this.props.handleViewDetail}
        key={index} data={item}/>
        );
        
        })}
      </div>
    )
  }
}
let mapStateToProps = (state) => {
  return {  
    List : state.shoeReducer.shoeArr,
    //root -> initialState
  };

};
  export default connect(mapStateToProps)(ListShoe);
