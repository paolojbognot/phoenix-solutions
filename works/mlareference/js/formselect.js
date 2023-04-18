/*  formselect.js
  Hide all the forms on load.
  Get value of form selection from dropbox for Reference Type.
  Display appropriate forms.
  Pass information to engine.js
*/


// Hide all the forms
function loadHide() {
  let $hideMe = $('#bookOne').add($('#bookTwo')).add($('#bookMany')).add($('#database')).add($('#encyclopedia')).add($('#journal')).add($('#magazine')).add($('#newspaper')).add($('#onlineBook')).add($('#website'));
  
  $hideMe.hide();
}

// Fade Out forms on selectbox <option> value 'none'
function hideForms() {
  let $hideMe = $('#bookOne').add($('#bookTwo')).add($('#bookMany')).add($('#database')).add($('#encyclopedia')).add($('#journal')).add($('#magazine')).add($('#newspaper')).add($('#onlineBook')).add($('#website'));
  
  $hideMe.fadeOut(250);
}

// Show all the forms - for debugging
function showForms() {
  let $hideMe = $('#bookOne').add($('#bookTwo')).add($('#bookMany')).add($('#database')).add($('#encyclopedia')).add($('#journal')).add($('#magazine')).add($('#newspaper')).add($('#onlineBook')).add($('#website'));
  
  $hideMe.show();
}

// Get Value from <select> <option> and display form in #genContent
function formSelect() {
  var $ref = $('#referenceType');         // <select> id for dropdown
  var $option = $ref.val();
  
  switch($option) {
    case 'none':
      console.log('No Option has been selected!');
      hideForms();
      break;
      
    case 'bookOne':
      console.log('Loading Book with One Author');
      hideForms();
      $('#bookOne').fadeIn(750);
      break;
      
    case 'bookTwo':
      console.log('Loading Book with Two or Three Authors');
      hideForms();
      $('#bookTwo').fadeIn(750);
      break;
      
    case 'bookMany':
      console.log('Loading Book with Four or more Authors');
      hideForms();
      $('#bookMany').fadeIn(750);
      break;
    
    case 'database':
      console.log('Loading Database');
      hideForms();
      $('#database').fadeIn(750);
      break;
      
    case 'encyclopedia':
      console.log('Loading Encyclopedia');
      hideForms();
      $('#encyclopedia').fadeIn(750);
      break;
    
    case 'journal':
      console.log('Loading Journal');
      hideForms();
      $('#journal').fadeIn(750);
      break;
    
    case 'magazine':
      console.log('Loading Magazine');
      hideForms();
      $('#magazine').fadeIn(750);
      break;
    
    case 'newspaper':
      console.log('Loading Newspaper');
      hideForms();
      $('#newspaper').fadeIn(750);
      break;
    
    case 'onlineBook':
      console.log('Loading Online Book');
      hideForms();
      $('#onlineBook').fadeIn(750);
      break;
    
    case 'website':
      console.log('Loading Website');
      hideForms();
      $('#website').fadeIn(750);
      break;
    
    default:
      console.log("ERROR!!! Default Action: Hide all the forms!");
      hideForms();
      
  } // end switch
}


// Hide all Forms on page load
loadHide();


// click select box to display form
$('#referenceType').on('change', function() {
  formSelect();
});