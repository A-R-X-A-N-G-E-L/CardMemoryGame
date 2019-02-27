function createRecordsTable(difficulty) {
	var cell;

	let container = document.createElement("div");
	container.id = "records-container";

	let content = document.createElement("div");
	content.id = "records-content";

	let link = document.createElement("a");
	link.href = "index.html";

	let button = document.createElement("button");
	button.id = "records-button";	
	button.innerHTML = "Back";

	let table = document.createElement("table");
	table.border = "2";
	table.id = "table";

	let tableName = document.createElement("caption");
	tableName.innerHTML = `<h3>${difficulty} Mode</h3>`;
	tableName.id = "table-name";
	table.appendChild(tableName);
	
	let row = document.createElement("tr");

	cell = document.createElement("th");
	cell.innerHTML = "Nickname";
	row.appendChild(cell);

	cell = document.createElement("th");
	cell.innerHTML = "Email";
	row.appendChild(cell);

	cell = document.createElement("th");
	cell.innerHTML = "Time";
	row.appendChild(cell);

	table.appendChild(row);

	let playerCounter = 1;	
	while (playerCounter <= 10) {
		let row = document.createElement("tr");

		cell = document.createElement("th");
		cell.innerHTML = localStorage.getItem(`Player${playerCounter}Nick${difficulty}`);
		row.appendChild(cell);

		cell = document.createElement("th");
		cell.innerHTML = localStorage.getItem(`Player${playerCounter}Email${difficulty}`);
		row.appendChild(cell);

		cell = document.createElement("th");
		cell.innerHTML = localStorage.getItem(`Player${playerCounter}Time${difficulty}`) + 's';
		row.appendChild(cell);

		playerCounter++;
		table.appendChild(row);			
	}

	content.appendChild(table);
	link.appendChild(button);
	content.appendChild(link);
	container.appendChild(content);
	document.body.appendChild(container);	
}