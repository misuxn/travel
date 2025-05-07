// Update date and time in navigation
function updateDateTime() {
    const now = new Date();
    
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    
    const dateTimeString = now.toLocaleDateString('en-US', options);
    
    // Update all instances of currentDateTime (for multi-page site)
    const dateTimeElements = document.querySelectorAll('#currentDateTime');
    dateTimeElements.forEach(element => {
        element.textContent = dateTimeString;
    });
}

// Update immediately and then every second
updateDateTime();
setInterval(updateDateTime, 1000);