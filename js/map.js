var map = L.map('map').setView([32.682152, -117.092972], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([32.682152, -117.092972]).addTo(map)
    .bindPopup('Find me herer')
    .openPopup();


    // add this to empty space on my index