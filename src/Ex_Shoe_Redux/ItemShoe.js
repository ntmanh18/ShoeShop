import React, { Component } from 'react'
import { connect } from 'react-redux'

 class ItemShoe extends Component {
  render() {
    let {data, handleCart} = this.props
    return (
      <div className='col-4 card '>
        <img src={data.image} alt='hello' className='w-100'></img>
       <br/>
       <button className='btn btn-primary' onClick={() => handleCart(data)} >Add</button>
       <button className='btn btn-info' onClick={() =>   this.props.handleClickView (data)}>View</button>
      </div>
    )
  }

}
let mapDispatchToProps = (dispatch) => {
  return{
    handleClickView  : (shoe) => {
      let action ={
        type : "VIEW_DETAIL",
        payload: shoe,
      };
      dispatch(action);
    },
  };
};
export default connect(null,mapDispatchToProps)(ItemShoe)
