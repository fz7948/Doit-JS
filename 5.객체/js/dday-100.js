var firstDay = new Date("2017-06-17");
var toFirst = firstDay.getTime();

var future = toFirst + 100*(1000*60*60*24);
var someday = new Date(future);

var year = someday.getFullYear();
var month = someday.getMonth() + 1;
var date = someday.getDate();

document.querySelector("#date100").innerText = year + "년" + month + "월" + date + "일";
