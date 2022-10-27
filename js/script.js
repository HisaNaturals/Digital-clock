const clock = document.querySelector('.clock');

function runClock() {
   var time = new Date();
   // console.log(time);
   var hrs = time.getHours();
   // console.log(hrs);
   var min = time.getMinutes();
   // console.log(min);
   var sec = time.getSeconds();
   // console.log(sec);
   var txt = "AM";
   if (hrs > 12) {
      hrs = hrs - 12;
      txt = "PM";
   } else if (hrs == 0) {
      hrs = 12;
      txt = "AM";
   }
   hrs = hrs < 10 ? '0' + hrs : hrs;
   min = min < 10 ? '0' + min : min;
   sec = sec < 10 ? '0' + sec : sec;
   // console.log(`${hrs} : ${min} : ${sec}`);
   clock.innerHTML = `${hrs} : ${min} : ${sec} ${txt}`;
}

runClock();
setInterval(runClock, 1000);