const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("mins");
const secEl = document.getElementById("secs");

function updateClock() {
    let now = new Date();

    let hrs = now.getHours();
    // Add zero if less than 10
    hrs = (hrs < 10) ? "0" + hrs : hrs;
    hourEl.innerText = hrs;

    let mins = now.getMinutes();
    // Truncate at 2 digits and add zero if necessary
    mins = (mins < 10) ? "0" + mins : mins;
    minuteEl.innerText = mins;

    let secs = now.getSeconds();
    // Truncate at 2 digits and add zero if necessary
    secs = (secs < 10) ? "0" + secs : secs;
    secEl.innerText = secs;
}

// Call the function to start the clock immediately
updateClock();

// Set interval to update the clock every second
setInterval(updateClock, 1000);
