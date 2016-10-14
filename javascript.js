var quotes = [
	'Solitude is the place of purification.<br>Martin Buber', 
	'Once you eliminate the impossible, whatever remains, no matter how improbable, must be the truth.<br>Arthur Conan Doyle', 
	'A goal is a dream with a deadline.<br>Napoleon Hill', 
	'Art is the stored honey of the human soul, gathered on wings of misery and travail.<br>Theodore Dreiser', 
	'We waste time looking for the perfect lover, instead of creating the perfect love.<br>Tom Robbins', 
	'Success is simple. Do what\'s right, the right way, at the right time.<br>Arnold H. Glasow', 
	'A real friend is one who walks in when the rest of the world walks out.<br>Walter Winchell', 
	'Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor.<br>Sholom Aleichem', 
	'Do not take life too seriously. You will never get out of it alive.<br>Elbert Hubbard', 
	'What you do today can improve all your tomorrows.<br>Ralph Marston',
	'Every block of stone has a statue inside it and it is the task of the sculptor to discover it.<br>Michelangelo',
	'A creative man is motivated by the desire to achieve, not by the desire to beat others.<br>Ayn Rand',
	'It alweys seems imposibble until it\'s done<br>Nelson Mandela',
	'Alweys do your best. What you plant now, you will harvest later.<br>Og Mandino',
	'It\'s not whether you get knocked down, it\'s whether you get back up.',
	'The harder the conflict, the more glorious the triumph.<br>Thomas Paine',
	'In order to succeed, we must first believe that we can.<br>Nikos Kazantzakis',
	'What you do today can improve all your tomorrows.<br>Ralph Marston',
	'You will never win if you never begin.<br>Helen Rowland',
	'It does not matter how slowly you go as long as you do not stop.<br>Confucius',
	'You just can\'t beat the person who never gives up.<br>Babe Ruth'
];


function nextQuote() {
	
	var roundNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById("quote-display").innerHTML = quotes[roundNumber];

}