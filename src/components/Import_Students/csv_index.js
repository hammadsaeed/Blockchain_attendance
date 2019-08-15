import { auth, db } from '../../firebase';

export const handleFiles  = (files) =>{
	if (window.FileReader) {
		// FileReader are supported.
		getAsText(files[0]);
	} else {
		alert('FileReader are not supported in this browser.');
	}
}

function getAsText(fileToRead) {
	var reader = new FileReader();
	// Handle errors load
	reader.onload = loadHandler;
	reader.onerror = errorHandler;
	// Read file into memory as UTF-8
	reader.readAsText(fileToRead);
}

function loadHandler(event) {
	var csv = event.target.result;
	processData(csv);
}

function processData(csv) {
    var allTextLines = csv.split(/\r\n|\n/);
    var lines = [];
    while (allTextLines.length) {
        lines.push(allTextLines.shift().split(','));
    }
	var getStudent = addingStudentToClass(lines)
//	console.log(lines);
	//drawOutput(lines);
}

function addingStudentToClass(csvFromFile) {
		var valueFromDb=[]
		var valueFromCSV=[]
		var studentName
		var onevaluefromdb
		var newvv
		var moduleName=csvFromFile[0][1]
		var teacherID =csvFromFile[0][4]
		db.savingTeacherID(teacherID,moduleName)
		db.savingTeacherIDInTeacher(teacherID,moduleName)

		//console.log(csvFromFile.length)
		for(var i=2;i<csvFromFile.length;i++){
		//console.log(csvFromFile[i][0]);
		valueFromCSV.push(csvFromFile[i][0]);
		if(csvFromFile[i][0].length > '0'){
		console.log(csvFromFile[i][0])
		db.savingStudentID(csvFromFile[i][0],moduleName)
		}
		}
		db.countNumberOfStudents().then(function(snapshot) {
			   var currentval = (snapshot.val());
			   newvv= Object.keys(currentval)
			   console.log(valueFromCSV)
			   console.log(newvv)
			   valueFromCSV.forEach(function(entry) {
				   if(newvv.includes(entry)){
					 console.log(entry)
					 db.createAClassEntry(entry,moduleName)

				   }

			   });
})

	//   console.log(onevaluefromdb);
	 //  console.log(studentName)
	   //	savingOnDb(valueFromCSV,valueFromDb[j],moduleName,studentName);

	}
//if your csv file contains the column names as the first line
function processDataAsObj(csv){
    var allTextLines = csv.split(/\r\n|\n/);
    var lines = [];

    //first line of csv
    var keys = allTextLines.shift().split(',');

    while (allTextLines.length) {
        var arr = allTextLines.shift().split(',');
        var obj = {};
        for(var i = 0; i < keys.length; i++){
            obj[keys[i]] = arr[i];
	}
        lines.push(obj);
    }
        console.log(lines);
	drawOutputAsObj(lines);
}

function errorHandler(evt) {
	if(evt.target.error.name == "NotReadableError") {
		alert("Canno't read file !");
	}
}

function drawOutput(lines){
	//Clear previous data
	var table = document.createElement("table");
	for (var i = 0; i < lines.length; i++) {
		var row = table.insertRow(-1);
		for (var j = 0; j < lines[i].length; j++) {
			var firstNameCell = row.insertCell(-1);
			firstNameCell.appendChild(document.createTextNode(lines[i][j]));
		}
	}
	document.getElementById("output").appendChild(table);
}

//draw the table, if first line contains heading
function drawOutputAsObj(lines){
	//Clear previous data
	document.getElementById("output").innerHTML = "";
	var table = document.createElement("table");

	//for the table headings
	var tableHeader = table.insertRow(-1);
 	Object.keys(lines[0]).forEach(function(key){
 		var el = document.createElement("TH");
		el.innerHTML = key;
		tableHeader.appendChild(el);
	});

	//the data
	for (var i = 0; i < lines.length; i++) {
		var row = table.insertRow(-1);
		Object.keys(lines[0]).forEach(function(key){
			var data = row.insertCell(-1);
			data.appendChild(document.createTextNode(lines[i][key]));
		});
	}
	document.getElementById("output").appendChild(table);
}
