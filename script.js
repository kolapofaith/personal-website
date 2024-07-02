document.addEventListener('DOMContentLoaded', function() {
    // Function to display current UTC time
    function displayCurrentTimeUTC() {
        const now = new Date();
        const options = { weekday: 'long', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'UTC' };
        const formattedTime = now.toLocaleDateString('en-US', options);
        document.querySelector('[data-testid="currentTimeUTC"]').textContent = formattedTime;
    }

    // Function to display current day of the week
    function displayCurrentDay() {
        const now = new Date();
        const options = { weekday: 'long' };
        const dayOfWeek = now.toLocaleDateString('en-US', options);
        document.querySelector('[data-testid="currentDay"]').textContent = dayOfWeek;
    }

    // Replace placeholders with actual data
    document.querySelector('[data-testid="slackDisplayName"]').textContent = "Faithbabanla";
    document.querySelector('[data-testid="slackEmail"]').textContent = "kolapofaith@gmail.com";

    // Call functions to display current time and day
    displayCurrentTimeUTC();
    displayCurrentDay();

});
