var now = new Date();
var firstDay = new Date("2017-06-17T24:00:00");

var toNow = now.getTime();
var toFirst = firstDay.getTime();
var passedTime = toNow - toFirst;

var passedDay = Math.round(passedTime/(1000*60*60*24));

document.querySelector("#accent").innerText = passedDay + "일";

calcDate(1000);
calcDate(2000);
calcDate(5000);
calcDate(10000);


function calcDate (days) {
var future = toFirst + days * (1000*60*60*24);
var someday = new Date(future);

var year = someday.getFullYear();
var month = someday.getMonth()+1;
var date = someday.getDate();

document.querySelector("#date" + days).innerText = year + "년" + month + "월" + date + "일";
}