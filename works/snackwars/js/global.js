/*
SnackWars! global.js      Load first!

Author: Paolo Bognot
Date: 21 Feb 2019
Version: 0.5 alpha
*/

// Variables global counters: dayCount, playerMoney, sellerMoney
let gui = {
  day: 1,
  playerMoney: 20,
  sellerMoney: 30,
  purse: 30,  // Base sellerMoney used in calculation
  status: function() {
    'use strict';
    for(let key in gui) {
      console.log(`STATUS! ${key}: ${gui[key]}`);
    }
  }
};

// Variables for targeting gui in HTML
const $dayCount = $('#dayCount');
const $playerMoney = $('#playerMoney');
const $sellerMoney = $('#sellerMoney');
const $endTurn = $('#endTurn');     // For button 'Go to Sleep' to end turn and update gui counters

// Declare variables for store items
let soup = {
  itemName: "soup",
  basePrice: 0.25,
  baseQty: 72,
  playerQty: 0,
  sellerPrice: 0,
  sellerQty: 72,
  status: function() {
    'use strict';
    for(var key in soup) {
      console.log(`STATUS! ${key}: ${soup[key]}`);
    }
  }
};

let soda = {
  itemName: "soda",
  basePrice: 0.55,
  baseQty: 36,
  playerQty: 0,
  sellerPrice: 0,
  sellerQty: 36,
  status: function() {
    'use strict';
    for(var key in soda) {
      console.log(`STATUS! ${key}: ${soda[key]}`);
    }
  }
};

let honeybun = {
  itemName: "honeybun",
  basePrice: 0.95,
  baseQty: 12,
  playerQty: 0,
  sellerPrice: 0,
  sellerQty: 12,
  status: function() {
    'use strict';
    for(var key in honeybun) {
      console.log(`STATUS! ${key}: ${honeybun[key]}`);
    }
  }
};

let chips = {
  itemName: "chips",
  basePrice: 1.40,
  baseQty: 10,
  playerQty: 0,
  sellerPrice: 0,
  sellerQty: 10,
  status: function() {
    'use strict';
    for(var key in chips) {
      console.log(`STATUS! ${key}: ${chips[key]}`);
    }
  }
};

let meatlog = {
  itemName: "meatlog",
  basePrice: 2.25,
  baseQty: 10,
  playerQty: 0,
  sellerPrice: 0,
  sellerQty: 10,
  status: function() {
    'use strict';
    for(var key in meatlog) {
      console.log(`STATUS! ${key}: ${meatlog[key]}`);
    }
  }
};

let icecream = {
  itemName: "icecream",
  basePrice: 3.25,
  baseQty: 10,
  playerQty: 0,
  sellerPrice: 0,
  sellerQty: 10,
  status: function() {
    'use strict';
    for(var key in icecream) {
      console.log(`STATUS! ${key}: ${icecream[key]}`);
    }
  }
};

// Array of item objects
const itemArr = [soup, soda, honeybun, chips, meatlog, icecream];