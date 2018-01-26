import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addItem, handleInputChange, clearItemObj, toggleModal} from "../actions/CartActions";
import Modal from 'react-modal';

class AddItemModal extends Component {

  handleInputChange(ref, e) {
    const obj = {};
    obj[ref] = e.target.value;
    this.props.handleInputChange(obj);
  }

  addItem() {
    const {item} = this.props;
    if ((item.name.length === 0) || (item.price.length === 0) || (item.totalItem.length === 0)) {
      return;
    }
    this.props.addItem(this.props.item);
    this.props.clearItemObj();
    this.props.toggleModal();
  }

  render() {
    const customStyle ={
      overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(0, 0, 0, 0.75)'

      },
      content : {
        position                   : 'absolute',
        top                        : '90px',
        left                       : '375px',
        right                      : '375px',
        bottom                     : '90px',
        border                     : '1px solid #ccc',
        background                 : '#fff',
        overflow                   : 'auto',
        WebkitOverflowScrolling    : 'touch',
        borderRadius               : '4px',
        outline                    : 'none',
        padding                    : '20px',
        maxHeight                  : '380px'
      }
    };

    return (
      <Modal
        isOpen={this.props.isModalOpen}
        style={customStyle}
        ariaHideApp={false}
      >
        <div className="row">
          <div className="col-md-12">
            <form className="form-horizontal">
              <fieldset>

                <legend>Add an Item</legend>

                <div className="form-group">
                  <label className="col-sm-2 control-label" for="textinput">Name</label>
                  <div className="col-sm-10">
                    <input
                      type="text" className="form-control" placeholder="Name" required
                      value={this.props.item.name}
                      onChange={this.handleInputChange.bind(this, 'name')}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-sm-2 control-label" for="textinput">Comment</label>
                  <div className="col-sm-10">
                    <input
                      type="text" className="form-control" placeholder="Comment"
                      value={this.props.item.comment}
                      onChange={this.handleInputChange.bind(this, 'comment')}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-sm-2 control-label" for="textinput">Price</label>
                  <div className="col-sm-4">
                    <input
                      type="number" className="form-control" placeholder="Price" required
                      value={this.props.item.price}
                      onChange={this.handleInputChange.bind(this, 'price')}
                    />
                  </div>

                  <label className="col-sm-2 control-label" for="textinput">Tax</label>
                  <div className="col-sm-4">
                    <input
                      type="number" className="form-control" placeholder="Tax" required
                      value={this.props.item.tax}
                      onChange={this.handleInputChange.bind(this, 'tax')}
                    />
                  </div>
                </div>



                <div className="form-group">
                  <label className="col-sm-2 control-label" for="textinput">Total Item</label>
                  <div className="col-sm-10">
                    <input
                      type="number" className="form-control" placeholder="Total Item" required
                      value={this.props.item.totalItem}
                      onChange={this.handleInputChange.bind(this, 'totalItem')}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <div className="pull-right">
                      <button onClick={() => this.props.toggleModal()} type="submit" className="btn btn-default" style={{marginRight: '10px'}}>Cancel</button>
                      <button type="submit" onClick={this.addItem.bind(this)} className="btn btn-primary">Save</button>
                    </div>
                  </div>
                </div>

              </fieldset>
            </form>
          </div>
        </div>
      </Modal>
    );
  }
}

function mapDispatchToprops(dispatch) {
  return bindActionCreators({addItem, handleInputChange, clearItemObj, toggleModal}, dispatch);
}

function mapStateToProps(state) {
  return {
    isModalOpen: state.isModalOpen,
    item: state.itemObj
  }
}

export default connect(mapStateToProps, mapDispatchToprops)(AddItemModal);
