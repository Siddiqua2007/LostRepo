let map;
let markers = [];
let markerCluster;

function initMap() {
    // Initialize map centered on Bengaluru, India
    map = new google.maps.Map(document.getElementById('leak-map'), {
        center: { lat: 12.9716, lng: 77.5946 },
        zoom: 12,
        styles: [
            {
                featureType: 'all',
                elementType: 'all',
                stylers: [
                    { saturation: -20 },
                    { lightness: 10 }
                ]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [
                    { color: '#3498db' }
                ]
            }
        ]
    });

    // Sample leak data
    const leaks = [
        { location: { lat: 12.9716, lng: 77.5946 }, type: 'Broken Pipe', severity: 'high', description: 'Major pipe burst near MG Road' },
        { location: { lat: 12.9650, lng: 77.6000 }, type: 'Leaking Tap', severity: 'low', description: 'Dripping tap in park' },
        { location: { lat: 12.9800, lng: 77.5900 }, type: 'Overflowing Tank', severity: 'medium', description: 'Tank overflow at community center' },
        { location: { lat: 12.9600, lng: 77.5800 }, type: 'Broken Pipe', severity: 'high', description: 'Pipe leak near Koramangala' },
        { location: { lat: 12.9750, lng: 77.6100 }, type: 'Other', severity: 'medium', description: 'Unidentified leak near market' }
    ];

    // Custom marker icons
    const iconBase = 'https://maps.google.com/mapfiles/ms/icons/';
    const icons = {
        low: iconBase + 'green-dot.png',
        medium: iconBase + 'yellow-dot.png',
        high: iconBase + 'red-dot.png'
    };

    // Add markers
    leaks.forEach(leak => {
        const marker = new google.maps.Marker({
            position: leak.location,
            map: map,
            icon: icons[leak.severity],
            title: leak.type
        });

        // Info window
        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div style="font-family: 'Open Sans', sans-serif; color: #333;">
                    <h3 style="margin-bottom: 10px;">${leak.type}</h3>
                    <p><strong>Severity:</strong> ${leak.severity.charAt(0).toUpperCase() + leak.severity.slice(1)}</p>
                    <p><strong>Description:</strong> ${leak.description}</p>
                </div>
            `
        });

        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });

        markers.push(marker);
    });

    // Marker clustering
    markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
        gridSize: 50,
        minimumClusterSize: 2
    });

    // Add legend
    const legend = document.createElement('div');
    legend.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    legend.style.padding = '10px';
    legend.style.borderRadius = '5px';
    legend.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    legend.style.margin = '10px';
    legend.innerHTML = `
        <h4 style="margin-bottom: 10px; font-family: 'Poppins', sans-serif;">Leak Severity</h4>
        <p><img src="${icons.low}" style="width: 20px; vertical-align: middle; margin-right: 5px;"> Low</p>
        <p><img src="${icons.medium}" style="width: 20px; vertical-align: middle; margin-right: 5px;"> Medium</p>
        <p><img src="${icons.high}" style="width: 20px; vertical-align: middle; margin-right: 5px;"> High</p>
    `;

    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
}

// Handle API key absence
if (typeof google === 'undefined') {
    document.getElementById('leak-map').innerHTML = `
        <div style="padding: 20px; text-align: center; color: #e74c3c;">
            <p>Please provide a valid Google Maps API key in the script tag.</p>
        </div>
    `;
}