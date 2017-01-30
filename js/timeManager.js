function StartTime() {
    seconds = 120;
    s = document.getElementById("seconds");
    m = document.getElementById("minutes");
    timePlay = setInterval(function()) {
        seconds--;
        secs = seconds;
        mins = 2;
            while (secs >= 60) {
            mins --;
            secs -= 60;
    };
        if (mins < 10) m.innerHTML = "0" + mins;
            else m.innerHTML = mins;
        if (secs < 10) s.innerHTML = "0" + secs;
            else s.innerHTML = secs;
  }, 1000};



function ResetTime() {
    clearInterval(timePlay);
}
