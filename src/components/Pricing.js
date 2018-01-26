import React, { Component } from 'react';
import { connect } from 'react-redux';

class Pricing extends Component {
  renderRows(netTotal) {
    const {cartItems} = this.props;
    const taxObj = {};
    cartItems.map((value) => {
      if (taxObj[value.tax] !== undefined) {
        taxObj[value.tax] = taxObj[value.tax] + (value.totalItem - value.price);
      }
      else {
        taxObj[value.tax] = (value.totalItem - value.price);
      }

      return null;
    });
    let taxAmount = 0;
    const rows = [];

    Object.keys(taxObj).forEach(key => {
      taxAmount += taxObj[key];
      rows.push(
        <tr key={key}>
          <td>{key}%</td>
          <td>{taxObj[key].toFixed(2)}<i className="glyphicon glyphicon-euro" aria-hidden="true"></i></td>
        </tr>
      );
    });

    return (
      <tbody>
        <tr>
          <td>Tax</td>
          <td>{taxAmount.toFixed(2)}<i className="glyphicon glyphicon-euro" aria-hidden="true"></i></td>
        </tr>
        {
          rows
        }
        <tr className="grand-total"  color="#FFF">
          <td>Grand Total</td>
          <td>{netTotal.toFixed(2)}<i className="glyphicon glyphicon-euro" aria-hidden="true"></i></td>
        </tr>
      </tbody>
    );
  }

  render() {
    const {cartItems} = this.props;
    if (cartItems.length === 0) {
      return (
        <div className="row">
          <div className="col-md-12 text-center">No Data Found</div>
        </div>
      );
    }
    const netTotal =  cartItems.map((value) => value.price ).reduce((sum, value) => sum + value);
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="col-md-offset-9">
            <div className="panel">
              <table className="table pricing-container">
                <thead>
                  <tr className="bold">
                    <th>Net Total</th>
                    <th>{netTotal}<i className="glyphicon glyphicon-euro" aria-hidden="true"></i></th>
                  </tr>
                </thead>
                {this.renderRows(netTotal)}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cartItems: state.cartItems,
  }
}

export default connect(mapStateToProps, null)(Pricing);
