function updateClock() {
  const now = new Date();
  
  // Format the time as HH:MM:SS
  const time = now.toLocaleTimeString('en-US', {
    hour12: false, // Use 24-hour format
  });

  // Format the date as MMM DD, YYYY
  const options = { month: 'short', day: '2-digit', year: 'numeric' };
  const date = now.toLocaleDateString('en-US', options);

  // Update the HTML elements with the current time and date
  document.getElementById('time').textContent = time;
  document.getElementById('date').textContent = date;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately on page load
updateClock();