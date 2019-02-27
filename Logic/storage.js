if (localStorage.getItem('Player1NickEasy') == null) {
	let playerCounter = 0;

	let playersNickArray = new Array('0', 'Hetza Hellshock', 'Mason Kernigann', 'Victor The Great', 'John John', 'Jason Brody', 'Rodrigez Dead', 'Alexey Sidorov', 'Alisa Dvachevskaya', 'Kurumi Tokisaki', 'Duke Nukem');
	let playersTimeArray = new Array('0', '30', '40', '45', '50', '55', '60', '65', '70', '75', '80');
	let playersEmailArray = new Array('0', 'germanofficer@web.de', 'givemestrength@gmail.com', 'tothevictory@gmail.com', 'johnjohny@gmail.com', 'rookisland@gmail.com', 'sandesert@gmail.com', 'russia125@mail.ru', 'soviet@mail.ru', 'timeruler@live.jp', 'atomicguy@gmail.com');

	while (playerCounter <= 10) {
		localStorage.setItem(`Player${playerCounter}NickHard`, playersNickArray[0]);
		localStorage.setItem(`Player${playerCounter}TimeHard`, playersTimeArray[0]  * 4);
		localStorage.setItem(`Player${playerCounter}EmailHard`, playersEmailArray[0]);

		localStorage.setItem(`Player${playerCounter}NickMedium`, playersNickArray[0]);
		localStorage.setItem(`Player${playerCounter}TimeMedium`, playersTimeArray[0] * 2.5);
		localStorage.setItem(`Player${playerCounter}EmailMedium`, playersEmailArray[0]);

		localStorage.setItem(`Player${playerCounter}NickEasy`, playersNickArray[0]);
		localStorage.setItem(`Player${playerCounter}TimeEasy`, playersTimeArray[0]);
		localStorage.setItem(`Player${playerCounter}EmailEasy`, playersEmailArray[0]);

		playersNickArray.splice(0, 1);
		playersTimeArray.splice(0, 1);
		playersEmailArray.splice(0, 1);

		playerCounter++;
	}
}