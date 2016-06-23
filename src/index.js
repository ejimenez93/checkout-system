/**
 * Index.js
 * Developed by Edison Jimenez (@ejimenez) on 6/23/16
 * Coding challenge submission for DF Studio
 */

// Import required modules
import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CheckoutApp from './CheckoutApp';
import './styles.scss'

// This function is needed viewing on a mobile device to
// turn all 'clicks' into taps
injectTapEventPlugin();

// Create our items for sale constant
const itemsForSale = [
  {
    inCart: 0,
    img: 'https://www.organicfacts.net/wp-content/uploads/2013/05/Cabbage11.jpg',
    title: 'Cabbage',
    price: 1.29
  },
  {
    inCart: 0,
    img: 'http://mydoglikes.com/wp-content/uploads/2015/01/DSC_1926-810x540.jpg',
    title: 'Chuckit',
    price: 7.82
  },
  {
    inCart: 0,
    img: 'http://www.offthegridnews.com/wp-content/uploads/2014/06/ammo-wikihow-400x265.jpg',
    title: 'Ammo',
    price: 0.20
  },
  {
    inCart: 0,
    img: 'http://images.all-free-download.com/images/graphiclarge/purple_dvd_background_207933.jpg',
    title: 'DVD',
    price: 14.77
  },
  {
    inCart: 0,
    img: 'http://skateparkoftampa.com/spot/productcolorwayimages/4741.jpg',
    title: 'Pants',
    price: 34.73
  },
  {
    inCart: 0,
    img: 'http://img2-2.timeinc.net/toh/i/g/10/tools/10-tool-test-driver/04-drill-drivers.jpg',
    title: 'Drill',
    price: 28.96
  }
]

render(
  <MuiThemeProvider>
    <CheckoutApp items={itemsForSale}/>
  </MuiThemeProvider>,
  document.getElementById('root')
);
