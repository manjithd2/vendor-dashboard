function processing(){
	var processing = document.getElementById('processing-table');
	var order = document.getElementById('new-order-table');
	var ready = document.getElementById('ready-table');
	var dispatch = document.getElementById('dispatch-table');
	dispatch.style.display="none";
	order.style.display="none";
	ready.style.display="none";
	processing.style.display="block";
}

function neworder(){
	var processing = document.getElementById('processing-table');
	var order = document.getElementById('new-order-table');
	var ready = document.getElementById('ready-table');
	var dispatch = document.getElementById('dispatch-table');
	dispatch.style.display="none";
	order.style.display="block";
	ready.style.display="none";
	processing.style.display="none";
}

function ready(){
	var processing = document.getElementById('processing-table');
	var order = document.getElementById('new-order-table');
	var ready = document.getElementById('ready-table');
	var dispatch = document.getElementById('dispatch-table');
	dispatch.style.display="none";
	order.style.display="none";
	ready.style.display="block";
	processing.style.display="none";
}

function dispatch(){
	var processing = document.getElementById('processing-table');
	var order = document.getElementById('new-order-table');
	var ready = document.getElementById('ready-table');
	var dispatch = document.getElementById('dispatch-table');
	dispatch.style.display="block";
	order.style.display="none";
	ready.style.display="none";
	processing.style.display="none";
}