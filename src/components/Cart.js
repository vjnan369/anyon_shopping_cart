import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteItem} from "../actions/CartActions";

class Cart extends Component {

  deleteItem(id) {
    this.props.deleteItem(id)
  }

  renderItems() {
    const {cartItems} = this.props;
    if (cartItems.length === 0) {
      return;
    }
    return (
      <tbody >
      {
        cartItems.map(item => {
          return (
            <tr key={item.id}>
              <td>{item.id + 1}</td>
              <td>{item.name}</td>
              <td>{item.comment}</td>
              <td>{item.price.toFixed(2)} <i className="glyphicon glyphicon-euro" aria-hidden="true"></i></td>
              <td>{item.tax}%</td>
              <td>{item.totalItem.toFixed(2)} <i className="glyphicon glyphicon-euro" aria-hidden="true"></i></td>
              <td onClick={this.deleteItem.bind(this, item.id)}>
                <button type="button" className="btn btn-xs  btn-danger">
                  <i className="glyphicon glyphicon-remove" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
          );
        })
      }
      </tbody>
    );
  }

  render() {
    return (
      <div className="row table-container">
        <div className="col-md-12">
          <div className="panel">
            <table className="table">
              <thead>
              <tr bgcolor='#3E5195'>
                <th>#</th>
                <th>Name</th>
                <th>Comments</th>
                <th>Price</th>
                <th>Tax</th>
                <th>Total Item</th>
                <th align="left">Action</th>
              </tr>
              </thead>
              {this.renderItems()}
            </table>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cartItems: state.cartItems,
  }
}

function mapDispatchToprops(dispatch) {
  return bindActionCreators({deleteItem}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToprops)(Cart);
