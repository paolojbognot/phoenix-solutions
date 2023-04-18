/*
SnackWars! sell.js      Load Last!

Author: Paolo Bognot
Date: 21 Feb 2019
Version: 0.5 alpha
*/

/* ********************************************************************
********************Soup Section***************************************
******************************************************************** */

// Check if sell form is blank, negative, or a decimal and throw errors if it is
function checkSellFormSoup() {
  'use strict';
  if ($('#sellSoup').val() === '') {
    alert(`Hey dummy, you left the sell soup form empty!`);
    throw new Error(`The sell soup form is empty!`);
  }
  else if ($('#sellSoup').val() === '0') {
    alert(`What are you trying to do here? You can't sell 0 soups! Stop wasting my time!`);
    throw new Error(`You can't sell 0 soups!`);
  }
  else if (/[\D]+/.test($('#sellSoup').val()) === true) {
    alert(`I can't go for that mang. You can't sell negative soups or half a soup. Thats crazy.`);
    throw new Error(`You can't sell negative or decimal soups!`);
  }
  else {
    console.log('DEBUG SELL: 01 checkSellFormSoup() = true');
    return true;  //end checkBuyForm
  } //end else
}

// Check if the player has enough item to sell. Compare formAmount with soup.playerQty
function checkPlayerQtySoup() {
  'use strict';
  //check if checkSellFormSoup() === true before proceeding
  if (checkSellFormSoup() === true) {
    let formAmount = $('#sellSoup').val();  // Get value of form
    formAmount = +formAmount;               // convert string to number
    
    if (formAmount > soup.playerQty) {
      alert(`Hey are you high or something? You are trying to sell ${formAmount} soups, But you only have ${soup.playerQty} soups. What's up with that?`);
      throw new Error(`checkSellerQty() Player is trying to sell: ${formAmount} soups. Player has: ${soup.playerQty} soups`);
    }
    else {
      console.log(`DEBUG SELL: 02 checkPlayerQtySoup() = true`);
      return true;  //end checkSellerQty
    }
  }
  else {
    throw new Error(`checkPlayerQtySoup() error!`);
  } //end else
}

// Calculate the price of the sale and compare to gui.sellerMoney
function checkSellSoup() {
  'use strict';
  //check if checkPlayerQtySoup === true before continue
  if (checkPlayerQtySoup() === true) {
    let formAmount = $('#sellSoup').val();  // Get value of form
    formAmount = +formAmount;               // convert string to number
    let price = soup.sellerPrice;           // sellerPrice for item
    let sellTotal = formAmount * price;     // total for the sale
    // Compare buyTotal to gui.sellerMoney to see if seller has enough money
    if (sellTotal > gui.sellerMoney) {
      alert(`Hey bruh, I don't have enough money to buy that many soups. I only have $${gui.sellerMoney.toFixed(2)} and the total for this deal is $${sellTotal.toFixed(2)}. Try selling me less.`);
      throw new Error(`The seller does not have enough money. Seller has: $${gui.sellerMoney} and the total for this sale is: $${sellTotal}`);
    } //end inside if
    else {
      console.log(`DEBUG SELL: 03 checkSellSoup() = ${sellTotal}`);
      return sellTotal; //end checkSellSoup
    }
  } //end outside if
}

// Complete transaction. Update HTML for corresponding fields
function checkCompleteSoup() {
  'use strict';
  // Get all values for transaction
  let formAmount = $('#sellSoup').val();  // Get value of form
  formAmount = +formAmount;               // convert string to number
  let price = soup.sellerPrice;           // sellerPrice for item
  let sellTotal = formAmount * price;     // total for the sale
  
  // Ask player if he wants to confirm sell transaction!
  let areYouSure = confirm(`Are you sure you want to sell ${formAmount} soups for $${sellTotal.toFixed(2)}?`);
  if (areYouSure === true) {
    // Check if checkSellSoup() returns a number that is greater than 0
    if (checkSellSoup() > 0) {
      //update gui.sellerMoney
      gui.sellerMoney -= sellTotal;   //update global value for sellerMoney
      $sellerMoney.html(`Seller Money: $${gui.sellerMoney.toFixed(2)}`); // Update HTML for sellerMoney
      
      //update gui.playerMoney
      gui.playerMoney += sellTotal;
      $playerMoney.html(`Player Money: $${gui.playerMoney.toFixed(2)}`); // Update HTML for playerMoney
      
      //update soup.playerQty and HTML
      soup.playerQty -= formAmount;
      $('#invSoup').text(soup.playerQty);
      
      //update soup.sellerQty and HTML
      soup.sellerQty += formAmount;
      $('#qtySoup').text(soup.sellerQty);
      
      console.log(`DEBUG SELL: 04 checkCompleteSoup() Success!`);
    }
  } //end confirm if
}

$('#sellSoupBtn').on('click', (e) => {
  'use strict';
  e.preventDefault();   // Prevent page from loading
  // Execute sale
  checkCompleteSoup();
});

/* ********************************************************************
********************Soda Section***************************************
******************************************************************** */

// Check if sell form is blank, negative, or a decimal and throw errors if it is
function checkSellFormSoda() {
  'use strict';
  if ($('#sellSoda').val() === '') {
    alert(`Hey dummy, you left the sell soda form empty!`);
    throw new Error(`The sell soda form is empty!`);
  }
  else if ($('#sellSoda').val() === '0') {
    alert(`What are you trying to do here? You can't sell 0 sodas! Stop wasting my time!`);
    throw new Error(`You can't sell 0 sodas!`);
  }
  else if (/[\D]+/.test($('#sellSoda').val()) === true) {
    alert(`I can't go for that mang. You can't sell negative sodas or half a soda. Thats crazy.`);
    throw new Error(`You can't sell negative or decimal sodas!`);
  }
  else {
    console.log('DEBUG SELL: 01 checkSellFormSoda() = true');
    return true;  //end checkBuyForm
  } //end else
}

// Check if the player has enough item to sell. Compare formAmount with soda.playerQty
function checkPlayerQtySoda() {
  'use strict';
  //check if checkSellFormSoda() === true before proceeding
  if (checkSellFormSoda() === true) {
    let formAmount = $('#sellSoda').val();  // Get value of form
    formAmount = +formAmount;               // convert string to number
    
    if (formAmount > soda.playerQty) {
      alert(`Hey are you high or something? You are trying to sell ${formAmount} sodas, But you only have ${soda.playerQty} sodas. What's up with that?`);
      throw new Error(`checkSellerQty() Player is trying to sell: ${formAmount} sodas. Player has: ${soda.playerQty} sodas`);
    }
    else {
      console.log(`DEBUG SELL: 02 checkPlayerQtySoda() = true`);
      return true;  //end checkSellerQty
    }
  }
  else {
    throw new Error(`checkPlayerQtySoda() error!`);
  } //end else
}

// Calculate the price of the sale and compare to gui.sellerMoney
function checkSellSoda() {
  'use strict';
  //check if checkPlayerQtySoda === true before continue
  if (checkPlayerQtySoda() === true) {
    let formAmount = $('#sellSoda').val();  // Get value of form
    formAmount = +formAmount;               // convert string to number
    let price = soda.sellerPrice;           // sellerPrice for item
    let sellTotal = formAmount * price;     // total for the sale
    // Compare buyTotal to gui.sellerMoney to see if seller has enough money
    if (sellTotal > gui.sellerMoney) {
      alert(`Hey bruh, I don't have enough money to buy that many sodas. I only have $${gui.sellerMoney.toFixed(2)} and the total for this deal is $${sellTotal.toFixed(2)}. Try selling me less.`);
      throw new Error(`The seller does not have enough money. Seller has: $${gui.sellerMoney} and the total for this sale is: $${sellTotal}`);
    } //end inside if
    else {
      console.log(`DEBUG SELL: 03 checkSellSoda() = ${sellTotal}`);
      return sellTotal; //end checkSellSoda
    }
  } //end outside if
}

// Complete transaction. Update HTML for corresponding fields
function checkCompleteSoda() {
  'use strict';
  // Get all values for transaction
  let formAmount = $('#sellSoda').val();  // Get value of form
  formAmount = +formAmount;               // convert string to number
  let price = soda.sellerPrice;           // sellerPrice for item
  let sellTotal = formAmount * price;     // total for the sale
  
  // Ask player if he wants to confirm sell transaction!
  let areYouSure = confirm(`Are you sure you want to sell ${formAmount} sodas for $${sellTotal.toFixed(2)}?`);
  if (areYouSure === true) {
    // Check if checkSellSoda() returns a number that is greater than 0
    if (checkSellSoda() > 0) {
      //update gui.sellerMoney
      gui.sellerMoney -= sellTotal;   //update global value for sellerMoney
      $sellerMoney.html(`Seller Money: $${gui.sellerMoney.toFixed(2)}`); // Update HTML for sellerMoney
      
      //update gui.playerMoney
      gui.playerMoney += sellTotal;
      $playerMoney.html(`Player Money: $${gui.playerMoney.toFixed(2)}`); // Update HTML for playerMoney
      
      //update soda.playerQty and HTML
      soda.playerQty -= formAmount;
      $('#invSoda').text(soda.playerQty);
      
      //update soda.sellerQty and HTML
      soda.sellerQty += formAmount;
      $('#qtySoda').text(soda.sellerQty);
      
      console.log(`DEBUG SELL: 04 checkCompleteSoda() Success!`);
    }
  } //end confirm if
}

$('#sellSodaBtn').on('click', (e) => {
  'use strict';
  e.preventDefault();   // Prevent page from loading
  // Execute sale
  checkCompleteSoda();
});

/* ********************************************************************
********************Honeybun Section***********************************
******************************************************************** */

// Check if sell form is blank, negative, or a decimal and throw errors if it is
function checkSellFormHoneybun() {
  'use strict';
  if ($('#sellHoneybun').val() === '') {
    alert(`Hey dummy, you left the sell honeybun form empty!`);
    throw new Error(`The sell honeybun form is empty!`);
  }
  else if ($('#sellHoneybun').val() === '0') {
    alert(`What are you trying to do here? You can't sell 0 honeybuns! Stop wasting my time!`);
    throw new Error(`You can't sell 0 honeybuns!`);
  }
  else if (/[\D]+/.test($('#sellHoneybun').val()) === true) {
    alert(`I can't go for that mang. You can't sell negative honeybuns or half a honeybun. Thats crazy.`);
    throw new Error(`You can't sell negative or decimal honeybuns!`);
  }
  else {
    console.log('DEBUG SELL: 01 checkSellFormHoneybun() = true');
    return true;  //end checkBuyForm
  } //end else
}

// Check if the player has enough item to sell. Compare formAmount with honeybun.playerQty
function checkPlayerQtyHoneybun() {
  'use strict';
  //check if checkSellFormHoneybun() === true before proceeding
  if (checkSellFormHoneybun() === true) {
    let formAmount = $('#sellHoneybun').val();  // Get value of form
    formAmount = +formAmount;               // convert string to number
    
    if (formAmount > honeybun.playerQty) {
      alert(`Hey are you high or something? You are trying to sell ${formAmount} honeybuns, But you only have ${honeybun.playerQty} honeybuns. What's up with that?`);
      throw new Error(`checkSellerQty() Player is trying to sell: ${formAmount} honeybuns. Player has: ${honeybun.playerQty} honeybuns`);
    }
    else {
      console.log(`DEBUG SELL: 02 checkPlayerQtyHoneybun() = true`);
      return true;  //end checkSellerQty
    }
  }
  else {
    throw new Error(`checkPlayerQtyHoneybun() error!`);
  } //end else
}

// Calculate the price of the sale and compare to gui.sellerMoney
function checkSellHoneybun() {
  'use strict';
  //check if checkPlayerQtyHoneybun === true before continue
  if (checkPlayerQtyHoneybun() === true) {
    let formAmount = $('#sellHoneybun').val();  // Get value of form
    formAmount = +formAmount;               // convert string to number
    let price = honeybun.sellerPrice;           // sellerPrice for item
    let sellTotal = formAmount * price;     // total for the sale
    // Compare buyTotal to gui.sellerMoney to see if seller has enough money
    if (sellTotal > gui.sellerMoney) {
      alert(`Hey bruh, I don't have enough money to buy that many honeybuns. I only have $${gui.sellerMoney.toFixed(2)} and the total for this deal is $${sellTotal.toFixed(2)}. Try selling me less.`);
      throw new Error(`The seller does not have enough money. Seller has: $${gui.sellerMoney} and the total for this sale is: $${sellTotal}`);
    } //end inside if
    else {
      console.log(`DEBUG SELL: 03 checkSellHoneybun() = ${sellTotal}`);
      return sellTotal; //end checkSellHoneybun
    }
  } //end outside if
}

// Complete transaction. Update HTML for corresponding fields
function checkCompleteHoneybun() {
  'use strict';
  // Get all values for transaction
  let formAmount = $('#sellHoneybun').val();  // Get value of form
  formAmount = +formAmount;               // convert string to number
  let price = honeybun.sellerPrice;           // sellerPrice for item
  let sellTotal = formAmount * price;     // total for the sale
  
  // Ask player if he wants to confirm sell transaction!
  let areYouSure = confirm(`Are you sure you want to sell ${formAmount} honeybuns for $${sellTotal.toFixed(2)}?`);
  if (areYouSure === true) {
    // Check if checkSellHoneybun() returns a number that is greater than 0
    if (checkSellHoneybun() > 0) {
      //update gui.sellerMoney
      gui.sellerMoney -= sellTotal;   //update global value for sellerMoney
      $sellerMoney.html(`Seller Money: $${gui.sellerMoney.toFixed(2)}`); // Update HTML for sellerMoney
      
      //update gui.playerMoney
      gui.playerMoney += sellTotal;
      $playerMoney.html(`Player Money: $${gui.playerMoney.toFixed(2)}`); // Update HTML for playerMoney
      
      //update honeybun.playerQty and HTML
      honeybun.playerQty -= formAmount;
      $('#invHoneybun').text(honeybun.playerQty);
      
      //update honeybun.sellerQty and HTML
      honeybun.sellerQty += formAmount;
      $('#qtyHoneybun').text(honeybun.sellerQty);
      
      console.log(`DEBUG SELL: 04 checkCompleteHoneybun() Success!`);
    }
  } //end confirm if
}

$('#sellHoneybunBtn').on('click', (e) => {
  'use strict';
  e.preventDefault();   // Prevent page from loading
  // Execute sale
  checkCompleteHoneybun();
});

/* ********************************************************************
********************Chips Section**************************************
******************************************************************** */

// Check if sell form is blank, negative, or a decimal and throw errors if it is
function checkSellFormChips() {
  'use strict';
  if ($('#sellChips').val() === '') {
    alert(`Hey dummy, you left the sell chips form empty!`);
    throw new Error(`The sell chips form is empty!`);
  }
  else if ($('#sellChips').val() === '0') {
    alert(`What are you trying to do here? You can't sell 0 chips! Stop wasting my time!`);
    throw new Error(`You can't sell 0 chips!`);
  }
  else if (/[\D]+/.test($('#sellChips').val()) === true) {
    alert(`I can't go for that mang. You can't sell negative chips or half a chips. Thats crazy.`);
    throw new Error(`You can't sell negative or decimal chips!`);
  }
  else {
    console.log('DEBUG SELL: 01 checkSellFormChips() = true');
    return true;  //end checkBuyForm
  } //end else
}

// Check if the player has enough item to sell. Compare formAmount with chips.playerQty
function checkPlayerQtyChips() {
  'use strict';
  //check if checkSellFormChips() === true before proceeding
  if (checkSellFormChips() === true) {
    let formAmount = $('#sellChips').val();  // Get value of form
    formAmount = +formAmount;               // convert string to number
    
    if (formAmount > chips.playerQty) {
      alert(`Hey are you high or something? You are trying to sell ${formAmount} chips, But you only have ${chips.playerQty} chips. What's up with that?`);
      throw new Error(`checkSellerQty() Player is trying to sell: ${formAmount} chips. Player has: ${chips.playerQty} chips`);
    }
    else {
      console.log(`DEBUG SELL: 02 checkPlayerQtyChips() = true`);
      return true;  //end checkSellerQty
    }
  }
  else {
    throw new Error(`checkPlayerQtyChips() error!`);
  } //end else
}

// Calculate the price of the sale and compare to gui.sellerMoney
function checkSellChips() {
  'use strict';
  //check if checkPlayerQtyChips === true before continue
  if (checkPlayerQtyChips() === true) {
    let formAmount = $('#sellChips').val();  // Get value of form
    formAmount = +formAmount;               // convert string to number
    let price = chips.sellerPrice;           // sellerPrice for item
    let sellTotal = formAmount * price;     // total for the sale
    // Compare buyTotal to gui.sellerMoney to see if seller has enough money
    if (sellTotal > gui.sellerMoney) {
      alert(`Hey bruh, I don't have enough money to buy that many chips. I only have $${gui.sellerMoney.toFixed(2)} and the total for this deal is $${sellTotal.toFixed(2)}. Try selling me less.`);
      throw new Error(`The seller does not have enough money. Seller has: $${gui.sellerMoney} and the total for this sale is: $${sellTotal}`);
    } //end inside if
    else {
      console.log(`DEBUG SELL: 03 checkSellChips() = ${sellTotal}`);
      return sellTotal; //end checkSellChips
    }
  } //end outside if
}

// Complete transaction. Update HTML for corresponding fields
function checkCompleteChips() {
  'use strict';
  // Get all values for transaction
  let formAmount = $('#sellChips').val();  // Get value of form
  formAmount = +formAmount;               // convert string to number
  let price = chips.sellerPrice;           // sellerPrice for item
  let sellTotal = formAmount * price;     // total for the sale
  
  // Ask player if he wants to confirm sell transaction!
  let areYouSure = confirm(`Are you sure you want to sell ${formAmount} chips for $${sellTotal.toFixed(2)}?`);
  if (areYouSure === true) {
    // Check if checkSellChips() returns a number that is greater than 0
    if (checkSellChips() > 0) {
      //update gui.sellerMoney
      gui.sellerMoney -= sellTotal;   //update global value for sellerMoney
      $sellerMoney.html(`Seller Money: $${gui.sellerMoney.toFixed(2)}`); // Update HTML for sellerMoney
      
      //update gui.playerMoney
      gui.playerMoney += sellTotal;
      $playerMoney.html(`Player Money: $${gui.playerMoney.toFixed(2)}`); // Update HTML for playerMoney
      
      //update chips.playerQty and HTML
      chips.playerQty -= formAmount;
      $('#invChips').text(chips.playerQty);
      
      //update chips.sellerQty and HTML
      chips.sellerQty += formAmount;
      $('#qtyChips').text(chips.sellerQty);
      
      console.log(`DEBUG SELL: 04 checkCompleteChips() Success!`);
    }
  } //end confirm if
}

$('#sellChipsBtn').on('click', (e) => {
  'use strict';
  e.preventDefault();   // Prevent page from loading
  // Execute sale
  checkCompleteChips();
});

/* ********************************************************************
********************Meatlog Section************************************
******************************************************************** */

// Check if sell form is blank, negative, or a decimal and throw errors if it is
function checkSellFormMeatlog() {
  'use strict';
  if ($('#sellMeatlog').val() === '') {
    alert(`Hey dummy, you left the sell meatlog form empty!`);
    throw new Error(`The sell meatlog form is empty!`);
  }
  else if ($('#sellMeatlog').val() === '0') {
    alert(`What are you trying to do here? You can't sell 0 meatlogs! Stop wasting my time!`);
    throw new Error(`You can't sell 0 meatlogs!`);
  }
  else if (/[\D]+/.test($('#sellMeatlog').val()) === true) {
    alert(`I can't go for that mang. You can't sell negative meatlogs or half a meatlog. Thats crazy.`);
    throw new Error(`You can't sell negative or decimal meatlogs!`);
  }
  else {
    console.log('DEBUG SELL: 01 checkSellFormMeatlog() = true');
    return true;  //end checkBuyForm
  } //end else
}

// Check if the player has enough item to sell. Compare formAmount with meatlog.playerQty
function checkPlayerQtyMeatlog() {
  'use strict';
  //check if checkSellFormMeatlog() === true before proceeding
  if (checkSellFormMeatlog() === true) {
    let formAmount = $('#sellMeatlog').val();  // Get value of form
    formAmount = +formAmount;               // convert string to number
    
    if (formAmount > meatlog.playerQty) {
      alert(`Hey are you high or something? You are trying to sell ${formAmount} meatlogs, But you only have ${meatlog.playerQty} meatlogs. What's up with that?`);
      throw new Error(`checkSellerQty() Player is trying to sell: ${formAmount} meatlogs. Player has: ${meatlog.playerQty} meatlogs`);
    }
    else {
      console.log(`DEBUG SELL: 02 checkPlayerQtyMeatlog() = true`);
      return true;  //end checkSellerQty
    }
  }
  else {
    throw new Error(`checkPlayerQtyMeatlog() error!`);
  } //end else
}

// Calculate the price of the sale and compare to gui.sellerMoney
function checkSellMeatlog() {
  'use strict';
  //check if checkPlayerQtyMeatlog === true before continue
  if (checkPlayerQtyMeatlog() === true) {
    let formAmount = $('#sellMeatlog').val();  // Get value of form
    formAmount = +formAmount;               // convert string to number
    let price = meatlog.sellerPrice;           // sellerPrice for item
    let sellTotal = formAmount * price;     // total for the sale
    // Compare buyTotal to gui.sellerMoney to see if seller has enough money
    if (sellTotal > gui.sellerMoney) {
      alert(`Hey bruh, I don't have enough money to buy that many meatlogs. I only have $${gui.sellerMoney.toFixed(2)} and the total for this deal is $${sellTotal.toFixed(2)}. Try selling me less.`);
      throw new Error(`The seller does not have enough money. Seller has: $${gui.sellerMoney} and the total for this sale is: $${sellTotal}`);
    } //end inside if
    else {
      console.log(`DEBUG SELL: 03 checkSellMeatlog() = ${sellTotal}`);
      return sellTotal; //end checkSellMeatlog
    }
  } //end outside if
}

// Complete transaction. Update HTML for corresponding fields
function checkCompleteMeatlog() {
  'use strict';
  // Get all values for transaction
  let formAmount = $('#sellMeatlog').val();  // Get value of form
  formAmount = +formAmount;               // convert string to number
  let price = meatlog.sellerPrice;           // sellerPrice for item
  let sellTotal = formAmount * price;     // total for the sale
  
  // Ask player if he wants to confirm sell transaction!
  let areYouSure = confirm(`Are you sure you want to sell ${formAmount} meatlogs for $${sellTotal.toFixed(2)}?`);
  if (areYouSure === true) {
    // Check if checkSellMeatlog() returns a number that is greater than 0
    if (checkSellMeatlog() > 0) {
      //update gui.sellerMoney
      gui.sellerMoney -= sellTotal;   //update global value for sellerMoney
      $sellerMoney.html(`Seller Money: $${gui.sellerMoney.toFixed(2)}`); // Update HTML for sellerMoney
      
      //update gui.playerMoney
      gui.playerMoney += sellTotal;
      $playerMoney.html(`Player Money: $${gui.playerMoney.toFixed(2)}`); // Update HTML for playerMoney
      
      //update meatlog.playerQty and HTML
      meatlog.playerQty -= formAmount;
      $('#invMeatlog').text(meatlog.playerQty);
      
      //update meatlog.sellerQty and HTML
      meatlog.sellerQty += formAmount;
      $('#qtyMeatlog').text(meatlog.sellerQty);
      
      console.log(`DEBUG SELL: 04 checkCompleteMeatlog() Success!`);
    }
  } //end confirm if
}

$('#sellMeatlogBtn').on('click', (e) => {
  'use strict';
  e.preventDefault();   // Prevent page from loading
  // Execute sale
  checkCompleteMeatlog();
});

/* ********************************************************************
********************Icecream Section***********************************
******************************************************************** */

// Check if sell form is blank, negative, or a decimal and throw errors if it is
function checkSellFormIcecream() {
  'use strict';
  if ($('#sellIcecream').val() === '') {
    alert(`Hey dummy, you left the sell icecream form empty!`);
    throw new Error(`The sell icecream form is empty!`);
  }
  else if ($('#sellIcecream').val() === '0') {
    alert(`What are you trying to do here? You can't sell 0 icecreams! Stop wasting my time!`);
    throw new Error(`You can't sell 0 icecreams!`);
  }
  else if (/[\D]+/.test($('#sellIcecream').val()) === true) {
    alert(`I can't go for that mang. You can't sell negative icecreams or half a icecream. Thats crazy.`);
    throw new Error(`You can't sell negative or decimal icecreams!`);
  }
  else {
    console.log('DEBUG SELL: 01 checkSellFormIcecream() = true');
    return true;  //end checkBuyForm
  } //end else
}

// Check if the player has enough item to sell. Compare formAmount with icecream.playerQty
function checkPlayerQtyIcecream() {
  'use strict';
  //check if checkSellFormIcecream() === true before proceeding
  if (checkSellFormIcecream() === true) {
    let formAmount = $('#sellIcecream').val();  // Get value of form
    formAmount = +formAmount;               // convert string to number
    
    if (formAmount > icecream.playerQty) {
      alert(`Hey are you high or something? You are trying to sell ${formAmount} icecreams, But you only have ${icecream.playerQty} icecreams. What's up with that?`);
      throw new Error(`checkSellerQty() Player is trying to sell: ${formAmount} icecreams. Player has: ${icecream.playerQty} icecreams`);
    }
    else {
      console.log(`DEBUG SELL: 02 checkPlayerQtyIcecream() = true`);
      return true;  //end checkSellerQty
    }
  }
  else {
    throw new Error(`checkPlayerQtyIcecream() error!`);
  } //end else
}

// Calculate the price of the sale and compare to gui.sellerMoney
function checkSellIcecream() {
  'use strict';
  //check if checkPlayerQtyIcecream === true before continue
  if (checkPlayerQtyIcecream() === true) {
    let formAmount = $('#sellIcecream').val();  // Get value of form
    formAmount = +formAmount;               // convert string to number
    let price = icecream.sellerPrice;           // sellerPrice for item
    let sellTotal = formAmount * price;     // total for the sale
    // Compare buyTotal to gui.sellerMoney to see if seller has enough money
    if (sellTotal > gui.sellerMoney) {
      alert(`Hey bruh, I don't have enough money to buy that many icecreams. I only have $${gui.sellerMoney.toFixed(2)} and the total for this deal is $${sellTotal.toFixed(2)}. Try selling me less.`);
      throw new Error(`The seller does not have enough money. Seller has: $${gui.sellerMoney} and the total for this sale is: $${sellTotal}`);
    } //end inside if
    else {
      console.log(`DEBUG SELL: 03 checkSellIcecream() = ${sellTotal}`);
      return sellTotal; //end checkSellIcecream
    }
  } //end outside if
}

// Complete transaction. Update HTML for corresponding fields
function checkCompleteIcecream() {
  'use strict';
  // Get all values for transaction
  let formAmount = $('#sellIcecream').val();  // Get value of form
  formAmount = +formAmount;               // convert string to number
  let price = icecream.sellerPrice;           // sellerPrice for item
  let sellTotal = formAmount * price;     // total for the sale
  
  // Ask player if he wants to confirm sell transaction!
  let areYouSure = confirm(`Are you sure you want to sell ${formAmount} icecreams for $${sellTotal.toFixed(2)}?`);
  if (areYouSure === true) {
    // Check if checkSellIcecream() returns a number that is greater than 0
    if (checkSellIcecream() > 0) {
      //update gui.sellerMoney
      gui.sellerMoney -= sellTotal;   //update global value for sellerMoney
      $sellerMoney.html(`Seller Money: $${gui.sellerMoney.toFixed(2)}`); // Update HTML for sellerMoney
      
      //update gui.playerMoney
      gui.playerMoney += sellTotal;
      $playerMoney.html(`Player Money: $${gui.playerMoney.toFixed(2)}`); // Update HTML for playerMoney
      
      //update icecream.playerQty and HTML
      icecream.playerQty -= formAmount;
      $('#invIcecream').text(icecream.playerQty);
      
      //update icecream.sellerQty and HTML
      icecream.sellerQty += formAmount;
      $('#qtyIcecream').text(icecream.sellerQty);
      
      console.log(`DEBUG SELL: 04 checkCompleteIcecream() Success!`);
    }
  } //end confirm if
}

$('#sellIcecreamBtn').on('click', (e) => {
  'use strict';
  e.preventDefault();   // Prevent page from loading
  // Execute sale
  checkCompleteIcecream();
});


/*  end */