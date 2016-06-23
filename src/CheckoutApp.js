/**
 * CheckoutApp.js
 * Developed by Edison Jimenez (@ejimenez) on 6/23/16
 * Coding challenge submission for DF Studio
 */

// Import required modules
import React from 'react';
import AppBar from 'material-ui/AppBar';
import HomeIcon from 'material-ui/svg-icons/action/shopping-cart';
import IconButton from 'material-ui/IconButton';
import {GridList, GridTile} from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import {greenA700, redA700, fullWhite, blue700} from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';
import update from 'react-addons-update';
import CheckIcon from 'material-ui/svg-icons/navigation/check';
import CancelIcon from 'material-ui/svg-icons/navigation/cancel';
import RefreshIcon from 'material-ui/svg-icons/navigation/refresh';
import PaymentIcon from 'material-ui/svg-icons/action/payment';
import Dialog from 'material-ui/Dialog';
import CartTable from './CartTable';
import CartList from './CartList';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';

// Inline Styles needed for specific components
const styles = {
  title: {
    fontWeight: 300
  },
  button: {
    margin: 24
  }
}

export default class CheckoutApp extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      items: this.props.items,
      checkoutDisabled: true,
      dialogOpen: false,
      stepIndex: 0
    }
  }

  handleSubmit () {
    this.setState({
      stepIndex: this.state.stepIndex + 1
    });
  }

  getStepContent (stepIndex) {
    switch (stepIndex) {
    case 0:
      return <CartTable items={this.state.items} />;
    case 1:
      return (
        <div>
          <CartList items={this.state.items} />
          <h3 className="cartListConfirmation">Thank you for your purchase!</h3>
        </div>
      );
    default:
      return;
    }
  }

  onItemAdd (id) {
    const updatedItems = update(this.state.items, {[id]: {inCart: {$set: this.state.items[id].inCart + 1}}});

    this.setState({
      items: updatedItems,
      checkoutDisabled: false
    })
  }

  onItemSubtract (id) {
    if (this.state.items[id].inCart > 0) {

      const updatedItems = update(this.state.items, {[id]: {inCart: {$set: this.state.items[id].inCart - 1}}});
      this.setState({
        items: updatedItems
      })
    }
  }

  onClearCart () {
    this.setState({
      items: this.props.items,
      checkoutDisabled: true
    })
  }

  handleDialogOpen () {
    this.setState({dialogOpen: true});
  }

  handleDialogClose () {
    this.setState({dialogOpen: false});
  }

  handleFinished () {
    this.setState({
      dialogOpen: false,
      stepIndex: 0
    });

    this.onClearCart();
  }

  render () {
    return (
      <div>
        <AppBar
          title="Checkout System"
          titleStyle={styles.title}
          zDepth = {0}
          iconElementLeft={<IconButton><HomeIcon /></IconButton>}
          iconElementRight={
            <FlatButton
              label="Clear Cart"
              icon={<RefreshIcon />}
              onClick={this.onClearCart.bind(this)}
            />
          }
        />
        <div className="instructions">
          <p><b>Directions:</b></p>
          <p>Use the - and + buttons below each item to add or remove items from your cart.
          Each circle reqresents the number of items currently in the cart.
          You can also click on the "Clear" button on the top-right corner of the app bar in order to remove all items and start over.
          Once you are satisfied, click on the "Checkout" button below to proceed with your purchase.</p>
        </div>
        <div className="itemsForSale">
          <GridList
            cellHeight={250}
            cols={3}
          >
            {this.state.items.map((item, index) => (
              <GridTile
                key={item.img}
                title={item.title}
                subtitle={<span><b>${(item.price).toFixed(2)}</b></span>}
                actionIcon={
                  <div>
                    <FlatButton
                      className="actionButton"
                      onClick={this.onItemSubtract.bind(this, index)}
                      icon={<ContentRemove color={redA700} />}
                    />
                    <Avatar
                      color={fullWhite}
                      backgroundColor={blue700}
                      size={30}
                    >
                    {this.state.items[index].inCart}
                    </Avatar>
                    <FlatButton
                      className="actionButton"
                      onClick={this.onItemAdd.bind(this, index)}
                      icon={<ContentAdd color={greenA700} />}
                    />
                  </div>
                }
              >
                <img src={item.img} />
              </GridTile>
            ))}
          </GridList>
        </div>
        <div className="checkoutButton">
          <FlatButton
            primary={true}
            disabled={this.state.checkoutDisabled}
            label="Checkout"
            style={styles.button}
            onClick={this.handleDialogOpen.bind(this)}
            icon={<CheckIcon />}
          />
        </div>
        <Dialog
          title="Checkout"
          actions={
          this.state.stepIndex === 1 ? (
            <div>
              <FlatButton
                label="Close Window and Restart"
                primary={true}
                onTouchTap={this.handleFinished.bind(this)}
              />
            </div>
          ) : (
            <div>
              <FlatButton
                label="Cancel"
                secondary={true}
                icon={<CancelIcon />}
                onTouchTap={this.handleDialogClose.bind(this)}
              />
              <FlatButton
                label="Submit Order"
                primary={true}
                icon={<PaymentIcon />}
                onTouchTap={this.handleSubmit.bind(this)}
              />
            </div>
          )
          }
          modal={true}
          open={this.state.dialogOpen}
        >
          <div style={{width: '100%', margin: 'auto'}}>
            <Stepper activeStep={this.state.stepIndex}>
              <Step>
                <StepLabel>Review</StepLabel>
              </Step>
              <Step>
                <StepLabel>Confirmation</StepLabel>
              </Step>
            </Stepper>
          </div>
          {this.getStepContent(this.state.stepIndex)}
        </Dialog>
      </div>
    )
  }
}

// Define the types of props we need for this class
CheckoutApp.propTypes = {
  items: React.PropTypes.array
}
