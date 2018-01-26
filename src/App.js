import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {clearItems, toggleModal, clearItemObj} from "./actions/CartActions";
import './index.css';
import Cart from './components/Cart';
import AddItemModal from './components/AddItemModal';
import Pricing from './components/Pricing';

class App extends Component {
  addItem() {
    this.props.addItem(this.props.item);
    this.props.clearItemObj();
  }

  showAddModal() {
    this.props.toggleModal();
  }

  clearItems() {
    this.props.clearItems()
  }

  render() {
    return (
      <div className="container">
        <div>
          <div className="row">
            <div className="col-md-12">
              <div className="pull-left"><h3 className="title">Your cart</h3></div>
              <div className="pull-right m-t-3">
                <a className="btn btn-sm btn-primary" onClick={this.showAddModal.bind(this)}>
                  <i className="glyphicon glyphicon-plus"></i>
                  &nbsp;Add New Product
                </a>
              </div>
              <div className="pull-right m-t-3" style={{marginRight: '10px'}}>
                <a className="btn btn-sm btn-danger" onClick={this.clearItems.bind(this)}>
                  <i className="glyphicon glyphicon-trash"></i>
                  &nbsp;Clear Cart
                </a>
              </div>
            </div>
          </div>
          <AddItemModal />
          <Cart />
          <Pricing />
        </div>
      </div>
    );
  }
}

function mapDispatchToprops(dispatch) {
  return bindActionCreators({clearItems, clearItemObj, toggleModal}, dispatch);
}

function mapStateToProps(state) {
  return {
    item: state.itemObj
  }
}
export default connect(mapStateToProps, mapDispatchToprops)(App);
