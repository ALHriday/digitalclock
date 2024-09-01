let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let ampm = document.querySelector(".ampm");


function updateTime() {

    const time = new Date();
    
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    h > 12 ? ampm.innerText = "PM" : "AM";

    let hrs = h > 12 ? h % 12 : h;
    let hour = hrs < 10 ? "0" + hrs : hrs;
    
    let minute = m < 10 ? "0" + m : m;
    let second = s < 10 ? "0" + s : s;

    hours.innerText = hour;
    minutes.innerText = minute;
    seconds.innerText = second;
};

setInterval(updateTime, 1000);
