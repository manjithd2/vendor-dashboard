function processing(){
	var processing = document.getElementById('processing-table');
	var order = document.getElementById('new-order-table');
	var ready = document.getElementById('ready-table');
	var dispatch = document.getElementById('dispatch-table');
	var cancel = document.getElementById('cancel-table');
	dispatch.style.display="none";
	order.style.display="none";
	ready.style.display="none";
	processing.style.display="block";
	cancel.style.display="none";
	document.getElementById('cancel').style.background="none";
	document.getElementById('processing').style.background="white";
	document.getElementById('new-order').style.background="none";
	document.getElementById('ready').style.background="none";
	document.getElementById('dispatch').style.background="none";
}

function cancel(){
	var processing = document.getElementById('processing-table');
	var order = document.getElementById('new-order-table');
	var ready = document.getElementById('ready-table');
	var dispatch = document.getElementById('dispatch-table');
	var cancel = document.getElementById('cancel-table');
	dispatch.style.display="none";
	order.style.display="none";
	ready.style.display="none";
	processing.style.display="none";
	cancel.style.display="block";
	document.getElementById('cancel').style.background="white";
	document.getElementById('new-order').style.background="none";
	document.getElementById('ready').style.background="none";
	document.getElementById('dispatch').style.background="none";
	document.getElementById('processing').style.background="none";
}

function neworder(){
	var processing = document.getElementById('processing-table');
	var order = document.getElementById('new-order-table');
	var ready = document.getElementById('ready-table');
	var dispatch = document.getElementById('dispatch-table');
	var cancel = document.getElementById('cancel-table');
	dispatch.style.display="none";
	order.style.display="block";
	ready.style.display="none";
	processing.style.display="none";
	cancel.style.display="none";
	document.getElementById('cancel').style.background="none";
	document.getElementById('processing').style.background="none";
	document.getElementById('new-order').style.background="white";
	document.getElementById('ready').style.background="none";
	document.getElementById('dispatch').style.background="none";
}

function ready(){
	var processing = document.getElementById('processing-table');
	var order = document.getElementById('new-order-table');
	var ready = document.getElementById('ready-table');
	var dispatch = document.getElementById('dispatch-table');
	var cancel = document.getElementById('cancel-table');
	dispatch.style.display="none";
	order.style.display="none";
	ready.style.display="block";
	processing.style.display="none";
	cancel.style.display="none";
	document.getElementById('cancel').style.background="none";
	document.getElementById('processing').style.background="none";
	document.getElementById('new-order').style.background="none";
	document.getElementById('ready').style.background="white";
	document.getElementById('dispatch').style.background="none";
}


function dispatch(){
	var processing = document.getElementById('processing-table');
	var order = document.getElementById('new-order-table');
	var ready = document.getElementById('ready-table');
	var dispatch = document.getElementById('dispatch-table');
	var cancel = document.getElementById('cancel-table');
	dispatch.style.display="block";
	order.style.display="none";
	ready.style.display="none";
	processing.style.display="none";
	cancel.style.display="none";
	document.getElementById('cancel').style.background="none";
	document.getElementById('processing').style.background="none";
	document.getElementById('new-order').style.background="none";
	document.getElementById('ready').style.background="none";
	document.getElementById('dispatch').style.background="white";
}