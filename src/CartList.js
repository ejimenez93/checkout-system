/**
 * CartList.js
 * Developed by Edison Jimenez (@ejimenez) on 6/23/16
 * Coding challenge submission for DF Studio
 */

 // Import Required Modules
 import React from 'react';
 import {List, ListItem} from 'material-ui/List';
 import Subheader from 'material-ui/Subheader';
 import Avatar from 'material-ui/Avatar';
 import Divider from 'material-ui/Divider';

 export default class CartList extends React.Component {
   render () {
     var total = 0;
     return (
       <List>
         <Subheader>Receipt</Subheader>
         {this.props.items.map(function (item) {
           if (item.inCart > 0) {
             total += (item.price * item.inCart)
             total = total * 1.072
             return (
               <ListItem
                 key={item.img}
                 primaryText={item.title}
                 secondaryText={'$' + item.price.toFixed(2)}
                 leftAvatar={<Avatar src={item.img} />}
               />
             )
           }
         })}
         <Divider />
         <ListItem
           primaryText={'Total Amount Paid: $' + total.toFixed(2)}
         />
       </List>
     )
   }
 }

 CartList.propTypes = {
   items: React.PropTypes.array
 }
