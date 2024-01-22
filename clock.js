let a = 0;
const background = document.getElementsByClassName("bg");
setInterval(function () {
    background[0].style.background = `conic-gradient( from  ${a}deg,
        #1d3a3d 10deg,
        #494f58 0deg,
        #1d3a3d 10deg,
        #ffffff)`;
        a++;
        if (a > 360) {
            a = 0;
        }
}, 0.005);
setInterval(function () {
    let min = new Date().getMinutes();
    let hour = new Date().getHours();
    let second = new Date().getSeconds();
    if(hour = 12) {
    hour -= 12;
    }
    document.getElementsByClassName("hour")[0].innerHTML = hour + " hours";
    document.getElementsByClassName("minutes")[0].innerHTML = min + " min";
    document.getElementsByClassName("seconds")[0].innerHTML = second + " sec";
}, 1000)
