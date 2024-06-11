function updateTimeAndDate() {
    const now = new Date();
    const localTime = new Date(now.getTime() + (3.5 * 60 * 60 * 1000));

    const hours = String(localTime.getHours()).padStart(2, '0');
    const minutes = String(localTime.getMinutes()).padStart(2, '0');
    const seconds = String(localTime.getSeconds()).padStart(2, '0');
    const day = String(localTime.getDate()).padStart(2, '0');
    const month = String(localTime.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = localTime.getFullYear();

    document.getElementById('globalTimeMobile').textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById('globalDateMobile').textContent = `${day}.${month}.${year}`;
    document.getElementById('globalTimeDesktop').textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById('globalDateDesktop').textContent = `${day}.${month}.${year}`;
}

document.addEventListener('DOMContentLoaded', function () {
    updateTimeAndDate();
    setInterval(updateTimeAndDate, 1000);
});
