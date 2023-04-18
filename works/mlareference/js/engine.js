/*  engine.js
  Grab values from form and append a new <p> to #genRef
*/


const $genRef = $('#genRef'); // declare variable for target div id. append <p>'s to #genRef

// Book with One Author
$('#bookOneBtn').on('click', () => {
  $genRef.append('<p>' + $('#bookOneLastName').val() + ', ' + $('#bookOneFirstName').val() +'. ' + '<i>' + $('#bookOneTitle').val() + '</i>' + '. ' + $('#bookOneLocation').val() + ': ' + $('#bookOnePublisher').val() + ', ' + $('#bookOneYear').val() + '. ' + $('#bookOneFormat').val() + '.');
});

// Book with Two or Three Authors
$('#bookTwoBtn').on('click', () => {
  $genRef.append('<p>' + $('#bookTwoFirstLastName').val() + ', ' + $('#bookTwoFirstFirstName').val() + ', ' + $('#bookTwoSecondFirstName').val() + ' ' + $('#bookTwoSecondLastName').val() + ', and ' + $('#bookTwoThirdFirstName').val() + ' ' + $('#bookTwoThirdLastName').val() + '. ' + '<i>' + $('#bookTwoTitle').val() + '</i>' + '. ' + $('#bookTwoLocation').val() + ': ' + $('#bookTwoPublisher').val() + ', ' + $('#bookTwoYear').val() + '. ' + $('#bookTwoFormat').val() + '.');
});

// Book with Four or More Authors
$('#bookManyBtn').on('click', () => {
  $genRef.append('<p>' + $('#bookManyLastName').val() + ', ' + $('#bookManyFirstName').val() + ', et al. ' + '<i>' + $('#bookManyTitle').val() + '. ' + '</i>' + $('#bookManyLocation').val() + ': ' + $('#bookManyPublisher').val() + ', ' + $('#bookManyYear').val() + '. ' + $('#bookManyFormat').val() + '.');
});

// Database
$('#databaseBtn').on('click', () => {
  $genRef.append('<p>' + $('#databaseLastName').val() + ', ' + $('#databaseFirstName').val() + '. "' + $('#databaseTitle').val() + '." ' + '<i>' + $('#databaseJournalTitle').val() + '. ' + '</i>' + $('#databaseVolume').val() + '. ' + $('#databaseIssue').val() + ' (' + $('#databaseYear').val() + '): ' + $('#databasePages').val() + '. ' + '<i>' + $('#databaseName').val() + '. ' + '</i>' + $('#databaseFormat').val() + '. ' + $('#databaseDate').val() + '.');
});

// Encyclopedia
$('#encyclopediaBtn').on('click', () => {
  $genRef.append('<p>' + '"' + $('#encyclopediaTitle').val() + '." ' + $('#encyclopediaName').val() + '. ' + $('#encyclopediaEdition').val() + '. ' + $('#encyclopediaYear').val() + '. ' + $('#encyclopediaFormat').val() + '.');
});

// Journal
$('#journalBtn').on('click', () => {
  $genRef.append('<p>' + $('#journalLastName').val() + ', ' + $('#journalFirstName').val() + '. "' + $('#journalTitle').val() + '." ' + '<i>' + $('#journalName').val() + '. ' + '</i>' + $('#journalVolume').val() + '.' + $('#journalIssue').val() + ' (' + $('#journalYear').val() + '): ' + $('#journalPages').val() + '. ' + $('#journalFormat').val() + '.');
});

// Magazine
$('#magazineBtn').on('click', () => {
  $genRef.append('<p>' + $('#magazineLastName').val() + ', ' + $('#magazineFirstName').val() + '. "' + $('#magazineTitle').val() + '." ' + '<i>' + $('#magazineName').val() + '</i>' + ' ' + $('#magazineDate').val() + ': ' + $('#magazinePages').val() + '. ' + $('#magazineFormat').val() + '.');
});

// Newspaper
$('#newspaperBtn').on('click', () => {
  $genRef.append('<p>' + $('#newspaperLastName').val() + ', ' + $('#newspaperFirstName').val() + '. "' + $('#newspaperTitle').val() + '." ' + '<i>' + $('#newspaperName').val() + '</i>' + ' ' + $('#newspaperDate').val() + ', ' + $('#newspaperEdition').val() + ': ' + $('#newspaperPages').val() + '. ' + $('#newspaperFormat').val() + '.');
});

// Online Book
$('#onlineBookBtn').on('click', () => {
  $genRef.append('<p>' + $('#onlineBookLastName').val() + ', ' + $('#onlineBookFirstName').val() + '. ' + '<i>' + $('#onlineBookTitle').val() + '. ' + '</i>' + $('#onlineBookWebsite').val() + '. ' + $('#onlineBookPublisher').val() + ', ' + $('#onlineBookDate').val() + '. ' + '<i>' + $('#onlineBookVender').val() + '. ' + '</i>' + $('#onlineBookFormat').val() + '. ' + $('#onlineBookDate').val() + '.');
});

// Website
$('#websiteBtn').on('click', () => {
  $genRef.append('<p>' + $('#websiteLastName').val() + ', ' + $('#websiteFirstname').val() + '. "' + $('#websitePageName').val() + '." ' + '<i>' + $('#websiteAddress').val() + '. ' + '</i>' + $('#websiteDate').val() + '. ' + $('#websiteFormat').val() + '. ' + $('#websiteAccess').val() +'.');
});