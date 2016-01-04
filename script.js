"use strict";

function weeklyPay (rate, hours) {
	var rate;
	var hours;
	var check;
	var otPay;
	var x;
	var ot;
	var total;
	var rounded;
	rate = prompt("what's pay?");
	hours = prompt("what's hours?");
	otPay = rate *1.5;
	check = rate * hours;
	x = hours - 40;
	ot = x * otPay;
	total = ot + (rate*40);
	rounded =Math.ceil(total * 100)/100;
	
	if (hours > 40) {
		console.log("Total pay with OT is " + rounded);
	}else {
		console.log(check);
	}
};

weeklyPay();
