function completed(){
	document.getElementById('pending-table').style.display="none";
	document.getElementById('completed-table').style.display="block";
	//buttons
	document.getElementById('pending').style.background="none";
	document.getElementById('completed').style.background="white";
}

function pending(){
	document.getElementById('pending-table').style.display="block";
	document.getElementById('completed-table').style.display="none";
	//buttons
	document.getElementById('pending').style.background="white";
	document.getElementById('completed').style.background="none";
}
