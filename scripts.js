function updateTimeAndDate() {
    const offset = 3.5; // UTC +3:30
    const now = new Date();
    const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));
    const localTime = new Date(utcNow.getTime() + (offset * 60 * 60 * 1000));

    const hours = String(localTime.getUTCHours()).padStart(2, '0');
    const minutes = String(localTime.getUTCMinutes()).padStart(2, '0');
    const seconds = String(localTime.getUTCSeconds()).padStart(2, '0');
    const day = String(localTime.getUTCDate()).padStart(2, '0');
    const month = String(localTime.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = localTime.getUTCFullYear();

    document.getElementById('globalTime').textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById('globalDate').textContent = `${day}.${month}.${year}`;
}

// Initial update
updateTimeAndDate();

// Update every second
setInterval(updateTimeAndDate, 1000);

