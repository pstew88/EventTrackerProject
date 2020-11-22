window.addEventListener('load', function() {
	console.log('Script loaded');
	listRaids();
	init();
});

function init() {
	console.log('in init');

	document.raidForm.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		var raidId = document.raidForm.raidId.value;
		if (!isNaN(raidId) && raidId > 0) {
			getRaid(raidId);
		}
	});

	document.newRaidForm.submitRaid.addEventListener('click', function(event) {
		event.preventDefault();
		let newRaidForm = document.newRaidForm;
		var raid = {
			name: newRaidForm.raidName.value,
			timeStarted: newRaidForm.startTime.value,
			timeEnded: newRaidForm.endTime.value,
			numberOfAttendees: newRaidForm.numberAttendees.value,
			numberOfTanks: newRaidForm.numberTanks.value,
			numberOfHealers: newRaidForm.numberHealers.value,
			numberOfDps: newRaidForm.numberDPS.value,
			numberBossesKilled: newRaidForm.numberBosses.value,
			bestItemDropped: newRaidForm.bestItem.value

		};
		createRaid(raid);
	});
	document.getElementById('editRaid').addEventListener('click', function(event) {
		event.preventDefault();

		var raid = {
			id: document.getElementById('raidId').value,
			name: document.getElementById('raidName').value,
			timeStarted: document.getElementById('startTime').value,
			timeEnded: document.getElementById('endTime').value,
			numberOfAttendees: document.getElementById('numberAttendees').value,
			numberOfTanks: document.getElementById('numberTanks').value,
			numberOfHealers: document.getElementById('numberHealers').value,
			numberOfDps: document.getElementById('numberDPS').value,
			numberBossesKilled: document.getElementById('numberBosses').value,
			bestItemDropped: document.getElementById('bestItem').value
		};
		editRaid(raid);
	});
	document.getElementById('deleteRaid').addEventListener('click', function(event) {
		event.preventDefault();
		var raid = {
			id: document.getElementById('raidId').value
		}
		deleteRaid(raid);
	});
};

function showRaid(raid) {
	var form = document.getElementById('editRaidForm');
	console.log(form.children);
	form.children[0].setAttribute('value', raid.id);
	form.children[1].setAttribute('value', raid.name);
	form.children[2].setAttribute('value', raid.timeStarted);
	form.children[3].setAttribute('value', raid.timeEnded);
	form.children[4].setAttribute('value', raid.numberOfAttendees);
	form.children[5].setAttribute('value', raid.numberOfTanks);
	form.children[6].setAttribute('value', raid.numberOfHealers);
	form.children[7].setAttribute('value', raid.numberOfDps);
	form.children[8].setAttribute('value', raid.numberBossesKilled);
	form.children[9].setAttribute('value', raid.bestItemDropped);
};




function listRaids() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/index');

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {


				let raid = JSON.parse(xhr.responseText);
				for (let i = 0; i < raid.length; i++) {
					console.log(raid.name);
				}
				displayRaid(raid);
			} else {
			}
		}
	};

	xhr.send();
}

function getRaid(raidId) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/index/' + raidId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {

				let raid = JSON.parse(xhr.responseText);
				console.log(raid);
			} else {
			}
		}
	};

	xhr.send();
}

function createRaid(raid) {
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/create', true);

	xhr.setRequestHeader("Content-type", "application/json");

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) { // Ok or Created
				var data = JSON.parse(xhr.responseText);
				console.log(raid);
			} else {
				console.log("POST request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	};

	var userObjectJson = JSON.stringify(raid); // Convert JS object to JSON string

	xhr.send(userObjectJson);
};

function editRaid(raid) {
	var xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/update/' + raid.id);

	xhr.setRequestHeader("Content-type", "application/json");

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) { // Ok or Created
				var data = JSON.parse(xhr.responseText);
				console.log(raid);
			} else {
				console.log("POST request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	};

	var userObjectJson = JSON.stringify(raid); // Convert JS object to JSON string

	xhr.send(userObjectJson);
	console.log(userObjectJson);
};

function deleteRaid(raid) {
	var xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/delete/' + raid.id);
	console.log(raid.id);
	xhr.setRequestHeader("Content-type", "application/json");

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) { // Ok or Created
				console.log(raid);
			} else {
				console.log("POST request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	};


	xhr.send(null);
};


function displayRaid(raid) {

	var table = document.createElement('table');
	var head = document.createElement('thead');
	var headTr = document.createElement('tr');
	var th1 = document.createElement('th');
	var th2 = document.createElement('th');
	var th3 = document.createElement('th');
	var th4 = document.createElement('th');
	var th5 = document.createElement('th');
	var th6 = document.createElement('th');
	var th7 = document.createElement('th');
	var th8 = document.createElement('th');
	var th9 = document.createElement('th');
	th1.textContent = 'Name';
	th2.textContent = 'Time Started';
	th3.textContent = 'Time Ended';
	th4.textContent = 'Number of Attendees';
	th5.textContent = 'Number of Tanks';
	th6.textContent = 'Number of Healers';
	th7.textContent = 'Number of DPS';
	th8.textContent = 'Number of Bosses Killed';
	th9.textContent = 'Best Item Dropped';
	headTr.appendChild(th1);
	headTr.appendChild(th2);
	headTr.appendChild(th3);
	headTr.appendChild(th4);
	headTr.appendChild(th5);
	headTr.appendChild(th6);
	headTr.appendChild(th7);
	headTr.appendChild(th8);
	headTr.appendChild(th9);
	head.appendChild(headTr);
	table.appendChild(head);
	var tBody = document.createElement('tbody');
	for (let i = 0; i < raid.length; i++) {
		var tr = document.createElement('tr');

		tr.addEventListener('click', function(e) {
			// TODO pass
			// raid.id 
			showRaid(raid[i]);
		});

		var td1 = document.createElement('td');
		var td2 = document.createElement('td');
		var td3 = document.createElement('td');
		var td4 = document.createElement('td');
		var td5 = document.createElement('td');
		var td6 = document.createElement('td');
		var td7 = document.createElement('td');
		var td8 = document.createElement('td');
		var td9 = document.createElement('td');
		td1.textContent = raid[i].name;
		td2.textContent = raid[i].timeStarted;
		td3.textContent = raid[i].timeEnded;
		td4.textContent = raid[i].numberOfAttendees;
		td5.textContent = raid[i].numberOfTanks;
		td6.textContent = raid[i].numberOfHealers;
		td7.textContent = raid[i].numberOfDps;
		td8.textContent = raid[i].numberBossesKilled;
		td9.textContent = raid[i].bestItemDropped;
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		tr.appendChild(td5);
		tr.appendChild(td6);
		tr.appendChild(td7);
		tr.appendChild(td8);
		tr.appendChild(td9);
		tBody.appendChild(tr);
	}
	table.appendChild(tBody);
	document.body.appendChild(table);

};