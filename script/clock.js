setInterval(showTime, 1000);
function showTime() {
  var time = new Date();
  var hour = time.getHours();
  am_pm = "AM";

  if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
  }
  if (hour == 0) {
    hr = 12;
    am_pm = "AM";
  }

  document.getElementById("clock").innerHTML = `${time.getDate()}/${
    time.getMonth() + 1
  }/${time.getFullYear()} - ${hour}:${time.getMinutes()}:${time.getSeconds()}${am_pm}`;
}
showTime();
