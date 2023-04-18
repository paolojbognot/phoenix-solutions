/*
SnackWars! initialize.js      Load Second!

Author: Paolo Bognot
Date: 21 Feb 2019
Version: 0.5 alpha
*/

// IIFE On load set day, playerMoney, sellerMoney to default values
(() => {
  updateGui();            // Set day, sellerMoney, playerMoney
  randomPrice(itemArr);
  randomQty(itemArr);
  updatePrice();
  updateQty();
  randomAlias();
  // TO DO: alert() explaining basic rules!
  alert(`Listen up short timer. Let me drop some knowledge on you. You got 30 days to the house. You don't want to leave here like a bum do you? You need to come up with some kind of hustle. I recomend hustlin' snacks dawg. Buy low and sell high. I'll shoot you $20.00 to get you started. By the way, don't forget that everything here at Pigeon Bay sucks so its gonna cost you about $0.25 a day to buy chow and hygiene. These streets are grimy. If you go broke, your on your own. This ain't a game, its the snack game!`);
  console.log(`DEBUG: Initializing Game!`);
})();

function updateGui() {
  'use strict';
  $dayCount.html(`Day: ${gui.day}`);
  $playerMoney.html(`Player Money: $${gui.playerMoney.toFixed(2)}`);
  $sellerMoney.html(`Seller Money: $${gui.sellerMoney.toFixed(2)}`);
}

function updatePrice() {
  'use strict';
  $('#priceSoup').html(soup.sellerPrice.toFixed(2));
  $('#priceSoda').html(soda.sellerPrice.toFixed(2));
  $('#priceHoneybun').html(honeybun.sellerPrice.toFixed(2));
  $('#priceChips').html(chips.sellerPrice.toFixed(2));
  $('#priceMeatlog').html(meatlog.sellerPrice.toFixed(2));
  $('#priceIcecream').html(icecream.sellerPrice.toFixed(2));
}

function updateQty() {
  'use strict';
  $('#qtySoup').html(soup.sellerQty);
  $('#qtySoda').html(soda.sellerQty);
  $('#qtyHoneybun').html(honeybun.sellerQty);
  $('#qtyChips').html(chips.sellerQty);
  $('#qtyMeatlog').html(meatlog.sellerQty);
  $('#qtyIcecream').html(icecream.sellerQty);
}

// subtracts 0.25 from gui.playerMoney counter (for daily tax) and adds 1 to gui.day counter
function dailyChange() {
  'use strict';
  gui.day += 1;             // Add one to the day counter
  gui.playerMoney -= 0.25;  // Subract 0.25 cents per day from the gui.playerMoney to encourage 'Hustlin'
  gui.sellerMoney = gui.purse * (Math.random()+Math.random());
}

// Randomize sellerPrice for items use itemArr as argument
function randomPrice(item) {
  'use strict';
  for (let i = 0; i < item.length; i++) {
    let loopItem = item[i];
    loopItem.sellerPrice = loopItem.basePrice * (Math.random()+Math.random());
    loopItem.sellerPrice = +loopItem.sellerPrice; // Convert string to a number
    }
    // console.log("DEBUG: Price Randomized!");
}

// Randomize sellerQty for items use itemArr as argument
function randomQty(item) {
  'use strict';
  for (let i = 0; i < item.length; i++) {
    let loopItem = item[i];
    loopItem.sellerQty = Math.ceil(loopItem.baseQty * (Math.random()+Math.random()));
    }
    // console.log("DEBUG: Quantity Randomized!");
}

// Generate random integer
function randomInt(min, max) {
  'use strict';
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Randomize Face Picture in HTML
function randomFace() {
  'use strict';
  const faceArr = [1,2,3,4,5,6,7,8,9,10];    // Array of face pictures
  let pic = randomInt(1,10);
  $('#face').attr('src',`img/${pic}.jpg`);
  // console.log("DEBUG: Face Randomized!");
}

// Randomize #sellerName
function randomAlias() {
  'use strict';
  const alias = ['Ant', 'Ice-Pick', 'Mad-Dog', 'Lonely-Boy', 'Droopy', 'Casper', 'Happy', 'T-Bone', 'Dre', 'One-Punch', 'K.O.', 'Chainsaw' ,'Cowboy' , 'Dirty Dave', 'Jake', 'Chad', 'Chicago', 'Chop-Chop', 'AK', 'Azn-Blue', 'LB', 'Wolf', 'Hollywood', 'Pretty Boy', 'Sad Boy'];
  let i = randomInt(0,24);
  $('#sellerName').text(`${alias[i]}'s Store`);
}

function youBroke() {
  'use strict';
  if (gui.playerMoney < 0) {
    alert(`You broke son! You took out a loan, and were unable to pay it back. You never saw the bonecrusher coming and got stabbed. You died. GAME OVER! YOU LOSE!`);
  }
}

function parole() {
  'use strict';
  if (gui.day === 31) {
    alert(`You made it. Its time to parole. Now kick rocks! GAME OVER! YOU WIN! You made $${gui.playerMoney}`);
  }
}

// click the "Go to Sleep" button and end the day. Update gui.day and gui.playerMoney (for daily living tax)
$endTurn.on('click', (e) => {
  'use strict';
  e.preventDefault;
  let areYouSure = confirm("You done hustin' for the day mang?");
  if (areYouSure === true) {
    console.log(`END TURN!`);
    // Update day, randomize gui.sellerMoney, apply daily tax to gui.playerMoney, randomize sellerPrice && sellerQty
    dailyChange();
    randomPrice(itemArr);
    randomQty(itemArr);
    randomFace();
    randomAlias();
    
    // Update the HTML gui
    updateGui();
    updatePrice();
    updateQty();
    youBroke();
    parole();
  }
});