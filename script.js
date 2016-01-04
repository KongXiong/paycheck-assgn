"use strict";
// var hourlyRate;
// var hoursWorked;
// var pay;
// hourlyRate = 18;
// hoursWorked = 40;
// pay = hourlyRate * hoursWorked;

// console.log("This week your pay is $" + pay);


var rate;
var hours;
var check;
var otPay;
rate = prompt("what's pay?");
hours = prompt("what's hours?");
otPay = rate *1.5;
check = rate * hours;
console.log(otPay);
// console.log(check);

if (hours > 40) {
	var x;
	x = hours - 40;
	console.log("ot hrs is " + x);
	var ot;
	ot = x * otPay;
	console.log("Overtime is " + ot);
	var total;
	total = ot + (rate*40);
	var rounded = Math.ceil(total * 100)/100;
	console.log("Total pay with OT is " + rounded);
	}else {console.log(check);
	}



// var rate;
// var hours;
// var check;
// rate = function(yourPay){
// 	prompt("your rate?");
// };
// hours = function(yourHours){
// 	prompt("your hours");
// };
// check = rate * hours;

// console.log(check);

// rate(18);
// hours(40);