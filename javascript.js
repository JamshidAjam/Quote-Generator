var quotes = [
	'1111111', 
	'2222222', 
	'3333333', 
	'4444444', 
	'5555555', 
	'6666666', 
	'7777777', 
	'8888888', 
	'9999999', 
	'0000000' 
];


function nextQuote() {
	
	var roundNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById("quote-display").innerHTML = quotes[roundNumber];

}