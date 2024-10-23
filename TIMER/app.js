
let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");


let countDown = () => {
    let futureDate = new Date("1 Jan 2025");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;
    //console.log(myDate);

    let days = Math.floor(myDate / 1000 /*ms to s*/ / 60/*sec to min*/ / 60 /*min to hr*/ / 24/* hr to days*/);

    let hours = Math.floor(myDate / 1000 / 60 / 60 )/* ms to hr*/ % 24;//% 24: Uses the modulus operator to get the remaining hours after accounting for the complete days. This means it gives you the hours that are left after the full days have been counted.

    let min = Math.floor(myDate / 1000 / 60)/* ms to min */ % 60;//remaining minutes left

    let sec = Math.floor(myDate / 1000) /* ms to sec */ % 60;//% 60: Uses the modulus operator to get the remaining seconds after the full minutes have been counted.

    daysItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minItem.innerHTML = min;
    secItem.innerHTML = sec;
}
countDown()

setInterval(countDown,1000)//yaha 1000 isliye kyunki taaki 1sec ke gap me interval chlega
