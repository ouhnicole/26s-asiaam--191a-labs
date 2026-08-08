// Initialize the map
const map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/streets/style.json?key=wsyYBQjqRwKnNsZrtci1',
    center: [126.9780, 37.5665],
    zoom: 12
});

// Add trending cafe markers in Seoul
const cafes = [
    {
        name: 'Cafe Onion Anguk',
        coords: [126.982, 37.576],
        description: 'Historic hanok cafe with industrial interior, famous for its croissants and scenic courtyard.',
        rating: '4.4'
    },
    {
        name: 'Thanks Nature Cafe',
        coords: [126.9227, 37.5560],
        description: 'Sheep cafe in Hongdae where you can enjoy coffee and soft desserts beside fluffy animals.',
        rating: '4.1'
    },
    {
        name: 'Cafe Yeonnam-dong 239-20',
        coords: [126.9239, 37.5668],
        description: 'Cartoon-inspired cafe with black-and-white interiors that feel like walking into a sketchbook.',
        rating: '4.5'
    },
    {
        name: 'Fritz Coffee Company',
        coords: [126.9402, 37.5665],
        description: 'Popular specialty coffee shop known for delicious espresso and a charming bakery selection.',
        rating: '4.3'
    },
    {
        name: 'Anthracite Coffee Roasters',
        coords: [126.9368, 37.5563],
        description: 'Industrial-chic roastery cafe offering high-quality coffee with a spacious, relaxed vibe.',
        rating: '4.4'
    }
];

cafes.forEach(cafe => {
    new maplibregl.Marker()
        .setLngLat(cafe.coords)
        .setPopup(new maplibregl.Popup({ offset: 25 })
            .setHTML(`<strong>${cafe.name}</strong><br>${cafe.description}<br><em>Rating: ${cafe.rating} ★</em>`))
        .addTo(map);
});