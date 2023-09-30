function updateTime() {
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');
    const locationElement = document.getElementById('location');

    const now = new Date();
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

    const date = now.toLocaleDateString('en-US', dateOptions);
    const time = now.toLocaleTimeString('en-US', timeOptions);
    const location = Intl.DateTimeFormat().resolvedOptions().timeZone;

    dateElement.textContent = `Fecha: ${date}`;
    timeElement.textContent = `Hora: ${time}`;
    locationElement.textContent = `Ubicación: ${location}`;
}

setInterval(updateTime, 1000);
updateTime();
