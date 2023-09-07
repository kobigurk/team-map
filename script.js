const map = L.map('map').setView([0, 0], 2);  // Centered at [0, 0] and zoomed out

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const layerGroup = L.layerGroup().addTo(map);

const loadJson = (data) => {
    data.forEach(member => {
        const { name, location, imageUrl, timezone } = member;
        const latlng = location.split(',').map(coord => parseFloat(coord.trim()));

        const icon = L.icon({
            iconUrl: imageUrl,
            iconSize: [38, 38],
            popupAnchor: [-3, -76]
        });

        L.marker(latlng, { icon: icon }).addTo(layerGroup)
            .bindPopup(`<strong>${name}</strong><br>${new Date().toLocaleString('en-UK', { timeZone: timezone })}`);
    });
};

document.getElementById('jsonUpload').addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const content = e.target.result;
            const data = JSON.parse(content);

            layerGroup.clearLayers();

            loadJson(data);

        };
        reader.readAsText(file);
    }
});

loadJson([{
    "name": "Kobi Gurkan",
    "location": "31.7683N,35.2137E",
    "imageUrl": "https://pbs.twimg.com/profile_images/1450135683188854787/Gzb5--kd_400x400.jpg",
    "timezone": "Asia/Jerusalem"
}]);