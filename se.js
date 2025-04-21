document.querySelector('nav button[type="button"]').addEventListener('click', function() {
    var mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

document.addEventListener("DOMContentLoaded", function () {
    // Set the date to countdown to (replace with your desired date)
    const targetDate = new Date("2025-08-13T23:55:00");

    // Update the countdown every second
    setInterval(updateCountdown, 1000);

    function updateCountdown() {
        const currentDate = new Date();
        const timeDifference = targetDate - currentDate;

        if (timeDifference > 0) {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            // Display the countdown in the HTML element with id "countdown"
            document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
            // If the countdown is over, display a message
            document.getElementById("countdown").innerHTML = "Countdown Over!";
        }
    }
});
