/**
 * CartTable.js
 * Developed by Edison Jimenez (@ejimenez) on 6/23/16
 * Coding challenge submission for DF Studio
 */

// Import Required Modules
import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

export default class CartTable extends React.Component {
  render () {
    var checkoutValues = {
      subtotal: 0,
      tax: 0,
      total: 0
    };
    return (
      <Table
        selectable={false}
        height="300px"
      >
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
        >
          <TableRow>
            <TableHeaderColumn>Item</TableHeaderColumn>
            <TableHeaderColumn>Quantity</TableHeaderColumn>
            <TableHeaderColumn>Price</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {this.props.items.map((function (item) {
            if (item.inCart > 0) {
              checkoutValues.subtotal += (item.inCart * item.price);
              checkoutValues.tax = (checkoutValues.subtotal * 0.072);
              checkoutValues.total = (checkoutValues.subtotal + checkoutValues.tax)
              return (
                <TableRow key={item.img}>
                  <TableRowColumn>{item.title}</TableRowColumn>
                  <TableRowColumn>{item.inCart}</TableRowColumn>
                  <TableRowColumn>${(item.inCart * item.price).toFixed(2)}</TableRowColumn>
                </TableRow>
              )
            }
          }))}
          <TableRow>
            <TableRowColumn colSpan="2"><i>Subtotal:</i></TableRowColumn>
            <TableRowColumn>${checkoutValues.subtotal.toFixed(2)}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn colSpan="2"><i>Tax @ 7.2%:</i></TableRowColumn>
            <TableRowColumn>${checkoutValues.tax.toFixed(2)}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn colSpan="2" />
            <TableRowColumn><h3 className="totalLabel">Total: ${checkoutValues.total.toFixed(2)}</h3></TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    )
  }
}

CartTable.propTypes = {
  items: React.PropTypes.array
}
