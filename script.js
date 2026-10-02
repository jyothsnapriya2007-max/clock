function updateClock() {

    // Get the current date and time
    const now = new Date();

    // Get hours, minutes and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add 0 before single-digit numbers
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    // Display the time
    document.getElementById("clock").textContent =
        hours + ":" + minutes + ":" + seconds;
}

// Run immediately
updateClock();

// Update every 1 second
setInterval(updateClock, 1000);