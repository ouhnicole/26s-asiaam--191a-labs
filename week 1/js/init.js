// Initialize the map
const map = new maplibregl.Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/style.json',
    center: [-118.444, 34.0709],
    zoom: 15
});

// Add a marker to the map
new maplibregl.Marker()
    .setLngLat([-118.444, 34.0709])
    .setPopup(new maplibregl.Popup({ offset: 25 })
        .setHTML('Math Sciences 4328 aka the Technology Sandbox<br> is the lab where I used to work in '))
    .addTo(map);
    