import React, { Component } from 'react'
import { connect } from 'react-redux'

 class DetailShoe extends Component {
  render() {
    return (
      <div>
        <img src ={this.props.detail.image}></img>
      </div>
    )
  }
  
 }

 let mapStateToProps = (state) => {
  return{
    detail : state.shoeReducer.detail
  }
 }
export default connect(mapStateToProps)(DetailShoe)
