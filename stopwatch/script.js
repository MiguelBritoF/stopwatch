var seconds = 0;
var minutes = 0;
var hours = 0;
var t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    document.getElementById("stopwatch").innerHTML = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    
    timer();
}

function timer() {
    t = setTimeout(add, 1000);
}

function start() {
    if (!t) {
        timer();
    }
}

function pause() {
    clearTimeout(t);
    t = null;
}

function reset() {
    clearTimeout(t);
    document.getElementById("stopwatch").innerHTML = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
