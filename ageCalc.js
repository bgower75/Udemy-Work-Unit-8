var age = prompt("How old are you?");
// divide age by 4 to get number of leap years
var leapNum = age / 4; //can also do it by multiplying age my 365.25 to get average number of leap years
// multiply age by number of days in the year plus number of leapyear days
var num = age * 365;
// var num = age * 365.25;
alert(age + " years is roughly " + num + " days");