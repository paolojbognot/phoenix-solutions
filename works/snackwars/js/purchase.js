/*
SnackWars! purchase.js      Load Third!

Author: Paolo Bognot
Date: 21 Feb 2019
Version: 0.5 alpha
*/

/* ********************************************************************
********************Soup Section***************************************
******************************************************************** */

// Check to see if the form is blank, contains a negative number, or is a decimal
function checkBuyFormSoup() {
  'use strict';
  if ($('#formSoup').val() === '') {
    alert(`Hey dummy, you forgot to fill out the form!`);
    throw new Error(`The form is blank!`);
  }
  else if ($('#formSoup').val() === '0') {
    alert(`Stop wasting my time! You can't buy 0 soups! Thats crazy mang!`);
    throw new Error(`You can't buy 0 soups!`);
  }
  else if (/[\D]+/.test($('#formSoup').val()) === true) {
    alert(`I can't go for that mang. You can't buy negative soups or half a soup. Thats crazy.`);
    throw new Error(`You can't buy negative or decimals soups!`);
  }
  else {
    console.log('DEBUG BUY: 01 checkBuyForm = true');
    return true;  //end checkBuyFormSoup()
  } //end else
}

// Check if the seller has enough item and compare to form value amount
function checkSellerQtySoup() {
  'use strict';
  //check if checkBuyForm === true before proceeding
  if (checkBuyFormSoup() === true) {
    let formAmount = $('#formSoup').val();  // Get value of form
    formAmount = +formAmount;               // convert string to number
    
    if (formAmount > soup.sellerQty) {
      alert(`Hey bro, I don't have enough soups to cover that. You are trying to buy ${formAmount} soups. I only have ${soup.sellerQty} soups on hand.`);
      throw new Error(`checkSellerQty() Player trying to buy: ${formAmount} soups. Seller has: ${soup.sellerQty} soups`);
    }
    else {
      console.log(`DEBUG BUY: 02 checkSellerQty = true`);
      return true;  //end checkSellerQty
    }
  }
  else {
    throw new Error(`checkSellerQty() error!`);
  } //end else
}

// Calculate price and compare to playermoney
function checkPriceSoup() {
  'use strict';
  //check if checkSellerQty === true before proceeding
  if (checkSellerQtySoup() === true) {
    let formAmount = $('#formSoup').val();  // Get value of form
    formAmount = +formAmount;               // convert string to number
    let price = soup.sellerPrice;           // sellerPrice for item
    let buyTotal = formAmount * price;      // Compare buyTotal to gui.playerMoney to see if player has enough money
    
    // check if player has enough money
    if (buyTotal > gui.playerMoney) {
      alert(`Yo' dawg, you broke! This ain't no charity. Get some cash before you come up in here!`);
      throw new Error(`Not enough money! You are trying to buy $${buyTotal} and only have $${gui.playerMoney}!`);
    } //end nested if
    else {
      console.log(`DEBUG BUY: 03 checkPrice = ${buyTotal}`);
      return buyTotal;  //end checkPrice
    } // end inside else
  } //end outer if
  else {
    throw new Error(`checkPrice() error!`);
  }
}

// Settle the bill. Subtract checkPrice from gui.playerMoney then update HTML. Add checkPrice to sellerMoney
function checkSettleSoup() {
  'use strict';
  // Get values for price
  let formAmount = $('#formSoup').val();  // Get value of form
  formAmount = +formAmount;               // convert string to number
  let price = soup.sellerPrice;           // sellerPrice for item
  let buyTotal = formAmount * price;      // subtact buyTotal from gui.playerMoney
  
  // Get values for quantity
  let $sellerQty = $('#qtySoup').text();  // How many items the seller has in stock
  $sellerQty = +$sellerQty;               // convert seller quantity string to number
    
  // Confirm if player wants to perform action
  let areYouSure = confirm(`Are you sure you want to buy ${formAmount} soups for $${buyTotal.toFixed(2)}?`);
  if (areYouSure === true) {
    // Check if checkPrice() returns a number
    if (checkPriceSoup() > 0) {
    // Update playerMoney
    gui.playerMoney -= buyTotal;    //update global value for playerMoney
    $playerMoney.html(`Player Money: $${gui.playerMoney.toFixed(2)}`); // Update HTML for playerMoney
    
    // Update sellerMoney
    gui.sellerMoney += buyTotal;    //update global value for sellerMoney
    $sellerMoney.html(`Seller Money: $${gui.sellerMoney.toFixed(2)}`); // Update HTML for sellerMoney
    
    // Update sellerQty
    soup.sellerQty -= formAmount;   //update global value for sellerQty
    $('#qtySoup').text(soup.sellerQty);
    
    // Update playerQty
    soup.playerQty += formAmount;   //update global value for playerQty
    $('#invSoup').text(soup.playerQty);
    
    console.log(`DEBUG BUY: 04 checkSettle Success!`);
    // Settle
    } //end if
  } //end confirm if
}

// Event Handler for buy buttons
$('#buySoupBtn').on('click', (e) => {
  'use strict';
  e.preventDefault();   // Prevent page from loading
  checkSettleSoup();    // Execute purchase
});

/* ********************************************************************
********************Soda Section***************************************
******************************************************************** */

// Check to see if the form is blank, contains a negative number, or is a decimal
function checkBuyFormSoda() {
  'use strict';
  if ($('#formSoda').val() === '') {
    alert(`Hey dummy, you forgot to fill out the form!`);
    throw new Error(`The form is blank!`);
  }
  else if ($('#formSoda').val() === '0') {
    alert(`Stop wasting my time! You can't buy 0 sodas! Thats crazy mang!`);
    throw new Error(`You can't buy 0 sodas!`);
  }
  else if (/[\D]+/.test($('#formSoda').val()) === true) {
    alert(`I can't go for that mang. You can't buy negative sodas or half a soda. Thats crazy.`);
    throw new Error(`You can't buy negative or decimals sodas!`);
  }
  else {
    console.log('DEBUG: 01 checkBuyForm = true');
    return true;  //end checkBuyForm
  } //end else
}

// Check if the seller has enough item and compare to form value amount
function checkSellerQtySoda() {
  'use strict';
  //check if checkBuyForm === true before proceeding
  if (checkBuyFormSoda() === true) {
    let formAmount = $('#formSoda').val();  // Get value of form
    formAmount = +formAmount;               // convert string to number
    
    if (formAmount > soda.sellerQty) {
      alert(`Hey bro, I don't have enough sodas to cover that. You are trying to buy ${formAmount} sodas. I only have ${soda.sellerQty} sodas on hand.`);
      throw new Error(`checkSellerQty() Player trying to buy: ${formAmount} sodas. Seller has: ${soda.sellerQty} sodas`);
    }
    else {
      console.log(`DEBUG: 02 checkSellerQty = true`);
      return true;  //end checkSellerQty
    }
  }
  else {
    throw new Error(`checkSellerQty() error!`);
  }
  
}

// Calculate price and compare to playermoney
function checkPriceSoda() {
  'use strict';
  //check if checkSellerQty === true before proceeding
  if (checkSellerQtySoda() === true) {
    let formAmount = $('#formSoda').val();  // Get value of form
    formAmount = +formAmount;               // convert string to number
    let price = soda.sellerPrice;           // sellerPrice for item
    let buyTotal = formAmount * price;      // Compare buyTotal to gui.playerMoney to see if player has enough money
    
    // check if player has enough money
    if (buyTotal > gui.playerMoney) {
      alert(`Yo' dawg, you broke! This ain't no charity. Get some cash before you come up in here!`);
      throw new Error(`Not enough money! You are trying to buy $${buyTotal} and only have $${gui.playerMoney}!`);
    } //end nested if
    else {
      console.log(`DEBUG: 03 checkPrice = ${buyTotal}`);
      return buyTotal;  //end checkPrice
    } // end inside else
  } //end outer if
  else {
    throw new Error(`checkPrice() error!`);
  }
}

// Settle the bill. Subtract checkPrice from gui.playerMoney then update HTML. Add checkPrice to sellerMoney
function checkSettleSoda() {
  'use strict';
  // Get values for price
  let formAmount = $('#formSoda').val();  // Get value of form
  formAmount = +formAmount;               // convert string to number
  let price = soda.sellerPrice;           // sellerPrice for item
  let buyTotal = formAmount * price;      // subtact buyTotal from gui.playerMoney
  
  // Get values for quantity
  let $sellerQty = $('#qtySoda').text();  // How many items the seller has in stock
  $sellerQty = +$sellerQty;               // convert seller quantity string to number
    
  // Confirm if player wants to perform action
  let areYouSure = confirm(`Are you sure you want to buy ${formAmount} sodas for $${buyTotal.toFixed(2)}?`);
  if (areYouSure === true) {
    // Check if checkPrice() returns a number
    if (checkPriceSoda() > 0) {
    // Update playerMoney
    gui.playerMoney -= buyTotal;
    $playerMoney.html(`Player Money: $${gui.playerMoney.toFixed(2)}`); // Update HTML for playerMoney
    
    // Update sellerMoney
    gui.sellerMoney += buyTotal;
    $sellerMoney.html(`Seller Money: $${gui.sellerMoney.toFixed(2)}`); // Update HTML for sellerMoney
    
    // Update sellerQty
    soda.sellerQty -= formAmount;
    $('#qtySoda').text(soda.sellerQty);
    
    // Update playerQty
    soda.playerQty += formAmount;
    $('#invSoda').text(soda.playerQty);
    
    console.log(`DEBUG: 04 checkSettle Success!`);
    // Settle
    } //end if
  } //end confirm if
}

// Event Handler for buy buttons
$('#buySodaBtn').on('click', (e) => {
  'use strict';
  e.preventDefault();   // Prevent page from loading
  checkSettleSoda();    // Execute purchase
});

/* ********************************************************************
********************Honeybun Section***********************************
******************************************************************** */

// Check to see if the form is blank, contains a negative number, or is a decimal
function checkBuyFormHoneybun() {
  'use strict';
  if ($('#formHoneybun').val() === '') {
    alert(`Hey dummy, you forgot to fill out the form!`);
    throw new Error(`The form is blank!`);
  }
  else if ($('#formHoneybun').val() === '0') {
    alert(`Stop wasting my time! You can't buy 0 honeybuns! Thats crazy mang!`);
    throw new Error(`You can't buy 0 honeybuns!`);
  }
  else if (/[\D]+/.test($('#formHoneybun').val()) === true) {
    alert(`I can't go for that mang. You can't buy negative honeybuns or half a honeybun. Thats crazy.`);
    throw new Error(`You can't buy negative or decimals honeybuns!`);
  }
  else {
    console.log('DEBUG: 01 checkBuyForm = true');
    return true;  //end checkBuyForm
  } //end else
}

// Check if the seller has enough item and compare to form value amount
function checkSellerQtyHoneybun() {
  'use strict';
  //check if checkBuyForm === true before proceeding
  if (checkBuyFormHoneybun() === true) {
    let formAmount = $('#formHoneybun').val();  // Get value of form
    formAmount = +formAmount;               // convert string to number
    
    if (formAmount > honeybun.sellerQty) {
      alert(`Hey bro, I don't have enough honeybuns to cover that. You are trying to buy ${formAmount} honeybuns. I only have ${honeybun.sellerQty} honeybuns on hand.`);
      throw new Error(`checkSellerQty() Player trying to buy: ${formAmount} honeybuns. Seller has: ${honeybun.sellerQty} honeybuns`);
    }
    else {
      console.log(`DEBUG: 02 checkSellerQty = true`);
      return true;  //end checkSellerQty
    }
  }
  else {
    throw new Error(`checkSellerQty() error!`);
  }
  
}

// Calculate price and compare to playermoney
function checkPriceHoneybun() {
  'use strict';
  //check if checkSellerQty === true before proceeding
  if (checkSellerQtyHoneybun() === true) {
    let formAmount = $('#formHoneybun').val();  // Get value of form
    formAmount = +formAmount;               // convert string to number
    let price = honeybun.sellerPrice;           // sellerPrice for item
    let buyTotal = formAmount * price;      // Compare buyTotal to gui.playerMoney to see if player has enough money
    
    // check if player has enough money
    if (buyTotal > gui.playerMoney) {
      alert(`Yo' dawg, you broke! This ain't no charity. Get some cash before you come up in here!`);
      throw new Error(`Not enough money! You are trying to buy $${buyTotal} and only have $${gui.playerMoney}!`);
    } //end nested if
    else {
      console.log(`DEBUG: 03 checkPrice = ${buyTotal}`);
      return buyTotal;  //end checkPrice
    } // end inside else
  } //end outer if
  else {
    throw new Error(`checkPrice() error!`);
  }
}

// Settle the bill. Subtract checkPrice from gui.playerMoney then update HTML. Add checkPrice to sellerMoney
function checkSettleHoneybun() {
  'use strict';
  // Get values for price
  let formAmount = $('#formHoneybun').val();  // Get value of form
  formAmount = +formAmount;               // convert string to number
  let price = honeybun.sellerPrice;           // sellerPrice for item
  let buyTotal = formAmount * price;      // subtact buyTotal from gui.playerMoney
  
  // Get values for quantity
  let $sellerQty = $('#qtyHoneybun').text();  // How many items the seller has in stock
  $sellerQty = +$sellerQty;               // convert seller quantity string to number
    
  // Confirm if player wants to perform action
  let areYouSure = confirm(`Are you sure you want to buy ${formAmount} honeybuns for $${buyTotal.toFixed(2)}?`);
  if (areYouSure === true) {
    // Check if checkPrice() returns a number
    if (checkPriceHoneybun() > 0) {
    // Update playerMoney
    gui.playerMoney -= buyTotal;
    $playerMoney.html(`Player Money: $${gui.playerMoney.toFixed(2)}`); // Update HTML for playerMoney
    
    // Update sellerMoney
    gui.sellerMoney += buyTotal;
    $sellerMoney.html(`Seller Money: $${gui.sellerMoney.toFixed(2)}`); // Update HTML for sellerMoney
    
    // Update sellerQty
    honeybun.sellerQty -= formAmount;
    $('#qtyHoneybun').text(honeybun.sellerQty);
    
    // Update playerQty
    honeybun.playerQty += formAmount;
    $('#invHoneybun').text(honeybun.playerQty);
    
    console.log(`DEBUG: 04 checkSettle Success!`);
    // Settle
    } //end if
  } //end confirm if
}

// Event Handler for buy buttons
$('#buyHoneybunBtn').on('click', (e) => {
  'use strict';
  e.preventDefault();   // Prevent page from loading
  checkSettleHoneybun();    // Execute purchase
});

/* ********************************************************************
********************Chips Section**************************************
******************************************************************** */

// Check to see if the form is blank, contains a negative number, or is a decimal
function checkBuyFormChips() {
  'use strict';
  if ($('#formChips').val() === '') {
    alert(`Hey dummy, you forgot to fill out the form!`);
    throw new Error(`The form is blank!`);
  }
  else if ($('#formChips').val() === '0') {
    alert(`Stop wasting my time! You can't buy 0 chips! Thats crazy mang!`);
    throw new Error(`You can't buy 0 chips!`);
  }
  else if (/[\D]+/.test($('#formChips').val()) === true) {
    alert(`I can't go for that mang. You can't buy negative chips or half a chips. Thats crazy.`);
    throw new Error(`You can't buy negative or decimals chips!`);
  }
  else {
    console.log('DEBUG: 01 checkBuyForm = true');
    return true;  //end checkBuyForm
  } //end else
}

// Check if the seller has enough item and compare to form value amount
function checkSellerQtyChips() {
  'use strict';
  //check if checkBuyForm === true before proceeding
  if (checkBuyFormChips() === true) {
    let formAmount = $('#formChips').val();  // Get value of form
    formAmount = +formAmount;               // convert string to number
    
    if (formAmount > chips.sellerQty) {
      alert(`Hey bro, I don't have enough chips to cover that. You are trying to buy ${formAmount} chips. I only have ${chips.sellerQty} chips on hand.`);
      throw new Error(`checkSellerQty() Player trying to buy: ${formAmount} chips. Seller has: ${chips.sellerQty} chips`);
    }
    else {
      console.log(`DEBUG: 02 checkSellerQty = true`);
      return true;  //end checkSellerQty
    }
  }
  else {
    throw new Error(`checkSellerQty() error!`);
  }
  
}

// Calculate price and compare to playermoney
function checkPriceChips() {
  'use strict';
  //check if checkSellerQty === true before proceeding
  if (checkSellerQtyChips() === true) {
    let formAmount = $('#formChips').val();  // Get value of form
    formAmount = +formAmount;               // convert string to number
    let price = chips.sellerPrice;           // sellerPrice for item
    let buyTotal = formAmount * price;      // Compare buyTotal to gui.playerMoney to see if player has enough money
    
    // check if player has enough money
    if (buyTotal > gui.playerMoney) {
      alert(`Yo' dawg, you broke! This ain't no charity. Get some cash before you come up in here!`);
      throw new Error(`Not enough money! You are trying to buy $${buyTotal} and only have $${gui.playerMoney}!`);
    } //end nested if
    else {
      console.log(`DEBUG: 03 checkPrice = ${buyTotal}`);
      return buyTotal;  //end checkPrice
    } // end inside else
  } //end outer if
  else {
    throw new Error(`checkPrice() error!`);
  }
}

// Settle the bill. Subtract checkPrice from gui.playerMoney then update HTML. Add checkPrice to sellerMoney
function checkSettleChips() {
  'use strict';
  // Get values for price
  let formAmount = $('#formChips').val();  // Get value of form
  formAmount = +formAmount;               // convert string to number
  let price = chips.sellerPrice;           // sellerPrice for item
  let buyTotal = formAmount * price;      // subtact buyTotal from gui.playerMoney
  
  // Get values for quantity
  let $sellerQty = $('#qtyChips').text();  // How many items the seller has in stock
  $sellerQty = +$sellerQty;               // convert seller quantity string to number
    
  // Confirm if player wants to perform action
  let areYouSure = confirm(`Are you sure you want to buy ${formAmount} chips for $${buyTotal.toFixed(2)}?`);
  if (areYouSure === true) {
    // Check if checkPrice() returns a number
    if (checkPriceChips() > 0) {
    // Update playerMoney
    gui.playerMoney -= buyTotal;
    $playerMoney.html(`Player Money: $${gui.playerMoney.toFixed(2)}`); // Update HTML for playerMoney
    
    // Update sellerMoney
    gui.sellerMoney += buyTotal;
    $sellerMoney.html(`Seller Money: $${gui.sellerMoney.toFixed(2)}`); // Update HTML for sellerMoney
    
    // Update sellerQty
    chips.sellerQty -= formAmount;
    $('#qtyChips').text(chips.sellerQty);
    
    // Update playerQty
    chips.playerQty += formAmount;
    $('#invChips').text(chips.playerQty);
    
    console.log(`DEBUG: 04 checkSettle Success!`);
    // Settle
    } //end if
  } //end confirm if
}

// Event Handler for buy buttons
$('#buyChipsBtn').on('click', (e) => {
  'use strict';
  e.preventDefault();   // Prevent page from loading
  checkSettleChips();    // Execute purchase
});

/* ********************************************************************
********************Meatlog Section************************************
******************************************************************** */

// Check to see if the form is blank, contains a negative number, or is a decimal
function checkBuyFormMeatlog() {
  'use strict';
  if ($('#formMeatlog').val() === '') {
    alert(`Hey dummy, you forgot to fill out the form!`);
    throw new Error(`The form is blank!`);
  }
  else if ($('#formMeatlog').val() === '0') {
    alert(`Stop wasting my time! You can't buy 0 meatlogs! Thats crazy mang!`);
    throw new Error(`You can't buy 0 meatlogs!`);
  }
  else if (/[\D]+/.test($('#formMeatlog').val()) === true) {
    alert(`I can't go for that mang. You can't buy negative meatlogs or half a meatlog. Thats crazy.`);
    throw new Error(`You can't buy negative or decimals meatlogs!`);
  }
  else {
    console.log('DEBUG: 01 checkBuyForm = true');
    return true;  //end checkBuyForm
  } //end else
}

// Check if the seller has enough item and compare to form value amount
function checkSellerQtyMeatlog() {
  'use strict';
  //check if checkBuyForm === true before proceeding
  if (checkBuyFormMeatlog() === true) {
    let formAmount = $('#formMeatlog').val();  // Get value of form
    formAmount = +formAmount;               // convert string to number
    
    if (formAmount > meatlog.sellerQty) {
      alert(`Hey bro, I don't have enough meatlogs to cover that. You are trying to buy ${formAmount} meatlogs. I only have ${meatlog.sellerQty} meatlogs on hand.`);
      throw new Error(`checkSellerQty() Player trying to buy: ${formAmount} meatlogs. Seller has: ${meatlog.sellerQty} meatlogs`);
    }
    else {
      console.log(`DEBUG: 02 checkSellerQty = true`);
      return true;  //end checkSellerQty
    }
  }
  else {
    throw new Error(`checkSellerQty() error!`);
  }
  
}

// Calculate price and compare to playermoney
function checkPriceMeatlog() {
  'use strict';
  //check if checkSellerQty === true before proceeding
  if (checkSellerQtyMeatlog() === true) {
    let formAmount = $('#formMeatlog').val();  // Get value of form
    formAmount = +formAmount;               // convert string to number
    let price = meatlog.sellerPrice;           // sellerPrice for item
    let buyTotal = formAmount * price;      // Compare buyTotal to gui.playerMoney to see if player has enough money
    
    // check if player has enough money
    if (buyTotal > gui.playerMoney) {
      alert(`Yo' dawg, you broke! This ain't no charity. Get some cash before you come up in here!`);
      throw new Error(`Not enough money! You are trying to buy $${buyTotal} and only have $${gui.playerMoney}!`);
    } //end nested if
    else {
      console.log(`DEBUG: 03 checkPrice = ${buyTotal}`);
      return buyTotal;  //end checkPrice
    } // end inside else
  } //end outer if
  else {
    throw new Error(`checkPrice() error!`);
  }
}

// Settle the bill. Subtract checkPrice from gui.playerMoney then update HTML. Add checkPrice to sellerMoney
function checkSettleMeatlog() {
  'use strict';
  // Get values for price
  let formAmount = $('#formMeatlog').val();  // Get value of form
  formAmount = +formAmount;               // convert string to number
  let price = meatlog.sellerPrice;           // sellerPrice for item
  let buyTotal = formAmount * price;      // subtact buyTotal from gui.playerMoney
  
  // Get values for quantity
  let $sellerQty = $('#qtyMeatlog').text();  // How many items the seller has in stock
  $sellerQty = +$sellerQty;               // convert seller quantity string to number
    
  // Confirm if player wants to perform action
  let areYouSure = confirm(`Are you sure you want to buy ${formAmount} meatlogs for $${buyTotal.toFixed(2)}?`);
  if (areYouSure === true) {
    // Check if checkPrice() returns a number
    if (checkPriceMeatlog() > 0) {
    // Update playerMoney
    gui.playerMoney -= buyTotal;
    $playerMoney.html(`Player Money: $${gui.playerMoney.toFixed(2)}`); // Update HTML for playerMoney
    
    // Update sellerMoney
    gui.sellerMoney += buyTotal;
    $sellerMoney.html(`Seller Money: $${gui.sellerMoney.toFixed(2)}`); // Update HTML for sellerMoney
    
    // Update sellerQty
    meatlog.sellerQty -= formAmount;
    $('#qtyMeatlog').text(meatlog.sellerQty);
    
    // Update playerQty
    meatlog.playerQty += formAmount;
    $('#invMeatlog').text(meatlog.playerQty);
    
    console.log(`DEBUG: 04 checkSettle Success!`);
    // Settle
    } //end if
  } //end confirm if
}

// Event Handler for buy buttons
$('#buyMeatlogBtn').on('click', (e) => {
  'use strict';
  e.preventDefault();   // Prevent page from loading
  checkSettleMeatlog();    // Execute purchase
});

/* ********************************************************************
********************Icecream Section***********************************
******************************************************************** */

// Check to see if the form is blank, contains a negative number, or is a decimal
function checkBuyFormIcecream() {
  'use strict';
  if ($('#formIcecream').val() === '') {
    alert(`Hey dummy, you forgot to fill out the form!`);
    throw new Error(`The form is blank!`);
  }
  else if ($('#formIcecream').val() === '0') {
    alert(`Stop wasting my time! You can't buy 0 icecreams! Thats crazy mang!`);
    throw new Error(`You can't buy 0 icecreams!`);
  }
  else if (/[\D]+/.test($('#formIcecream').val()) === true) {
    alert(`I can't go for that mang. You can't buy negative icecreams or half a icecream. Thats crazy.`);
    throw new Error(`You can't buy negative or decimals icecreams!`);
  }
  else {
    console.log('DEBUG: 01 checkBuyForm = true');
    return true;  //end checkBuyForm
  } //end else
}

// Check if the seller has enough item and compare to form value amount
function checkSellerQtyIcecream() {
  'use strict';
  //check if checkBuyForm === true before proceeding
  if (checkBuyFormIcecream() === true) {
    let formAmount = $('#formIcecream').val();  // Get value of form
    formAmount = +formAmount;               // convert string to number
    
    if (formAmount > icecream.sellerQty) {
      alert(`Hey bro, I don't have enough icecreams to cover that. You are trying to buy ${formAmount} icecreams. I only have ${icecream.sellerQty} icecreams on hand.`);
      throw new Error(`checkSellerQty() Player trying to buy: ${formAmount} icecreams. Seller has: ${icecream.sellerQty} icecreams`);
    }
    else {
      console.log(`DEBUG: 02 checkSellerQty = true`);
      return true;  //end checkSellerQty
    }
  }
  else {
    throw new Error(`checkSellerQty() error!`);
  }
  
}

// Calculate price and compare to playermoney
function checkPriceIcecream() {
  'use strict';
  //check if checkSellerQty === true before proceeding
  if (checkSellerQtyIcecream() === true) {
    let formAmount = $('#formIcecream').val();  // Get value of form
    formAmount = +formAmount;               // convert string to number
    let price = icecream.sellerPrice;           // sellerPrice for item
    let buyTotal = formAmount * price;      // Compare buyTotal to gui.playerMoney to see if player has enough money
    
    // check if player has enough money
    if (buyTotal > gui.playerMoney) {
      alert(`Yo' dawg, you broke! This ain't no charity. Get some cash before you come up in here!`);
      throw new Error(`Not enough money! You are trying to buy $${buyTotal} and only have $${gui.playerMoney}!`);
    } //end nested if
    else {
      console.log(`DEBUG: 03 checkPrice = ${buyTotal}`);
      return buyTotal;  //end checkPrice
    } // end inside else
  } //end outer if
  else {
    throw new Error(`checkPrice() error!`);
  }
}

// Settle the bill. Subtract checkPrice from gui.playerMoney then update HTML. Add checkPrice to sellerMoney
function checkSettleIcecream() {
  'use strict';
  // Get values for price
  let formAmount = $('#formIcecream').val();  // Get value of form
  formAmount = +formAmount;               // convert string to number
  let price = icecream.sellerPrice;           // sellerPrice for item
  let buyTotal = formAmount * price;      // subtact buyTotal from gui.playerMoney
  
  // Get values for quantity
  let $sellerQty = $('#qtyIcecream').text();  // How many items the seller has in stock
  $sellerQty = +$sellerQty;               // convert seller quantity string to number
    
  // Confirm if player wants to perform action
  let areYouSure = confirm(`Are you sure you want to buy ${formAmount} icecreams for $${buyTotal.toFixed(2)}?`);
  if (areYouSure === true) {
    // Check if checkPrice() returns a number
    if (checkPriceIcecream() > 0) {
    // Update playerMoney
    gui.playerMoney -= buyTotal;
    $playerMoney.html(`Player Money: $${gui.playerMoney.toFixed(2)}`); // Update HTML for playerMoney
    
    // Update sellerMoney
    gui.sellerMoney += buyTotal;
    $sellerMoney.html(`Seller Money: $${gui.sellerMoney.toFixed(2)}`); // Update HTML for sellerMoney
    
    // Update sellerQty
    icecream.sellerQty -= formAmount;
    $('#qtyIcecream').text(icecream.sellerQty);
    
    // Update playerQty
    icecream.playerQty += formAmount;
    $('#invIcecream').text(icecream.playerQty);
    
    console.log(`DEBUG: 04 checkSettle Success!`);
    // Settle
    } //end if
  } //end confirm if
}

// Event Handler for buy buttons
$('#buyIcecreamBtn').on('click', (e) => {
  'use strict';
  e.preventDefault();   // Prevent page from loading
  checkSettleIcecream();    // Execute purchase
});


//DONE!