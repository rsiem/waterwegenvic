function openMap() {

    //document.getElementById("result-map").style.width = "100%";
    //document.getElementById("result-map").style.height = "50vh";
    //document.getElementById("result-map").hidden = false;
    document.getElementById("map").style.display = "block";
    document.getElementById("result-information").style.display = "block";

    var locations = [];

    // The first step is obtain all the latitude and longitude from the HTML
    // The below is a simple jQuery selector
    $(".coordinates#result").each(function () {
        var longitude = $(".longitude", this).text().trim();
        var latitude = $(".latitude", this).text().trim();
        var restricted_use = $(".restricted_use", this).text().trim();
        var address = $(".address", this).text().trim();

        // Create a point data structure to hold the values.
        var point = {
            "latitude": latitude,
            "longitude": longitude,
            "restricted_use": restricted_use
            "address": address
        };

        // Push them all into an array.
        locations.push(point);
    });

    for (i = 0; i < locations.length; i++) {
        var feature = {
            "type": "Feature",
            "properties": {
                "description": locations[i].restricted_use,
                "icon": "marker"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [locations[i].longitude, locations[i].latitude]
            }
        };
        data.push(feature)
    }

    mapboxgl.accessToken = 'pk.eyJ1IjoicnNpZW0iLCJhIjoiY2psNGg4anU5MTVoczNrbjNyenZwanBxeSJ9.DBTDs4C0kgfrM2huvyW8vA';
    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [locations[0].longitude, locations[0].latitude], // starting position
        zoom: 13 // starting zoom
    });

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());

    map.on('load', function () {
        // Add a layer showing the places.
        map.addLayer({
            "id": "places",
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": data
                }
            },
            "layout": {
                "icon-image": "{icon}-15",
                "icon-size": 3,
                "icon-allow-overlap": true
            }
        });

        //for (i = 1; i < data.length; i++) {
        //    console.log(data[i].geometry.coordinates);
        //}

        // When a click event occurs on a feature in the places layer, open a popup at the
        // location of the feature, with description HTML from its properties.
        map.on('click', 'places', function (e) {
            var coordinates = e.features[0].geometry.coordinates.slice();
            var description = e.features[0].properties.description;

            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML(description)
                .addTo(map);
        });

        // Change the cursor to a pointer when the mouse is over the places layer.
        map.on('mouseenter', 'places', function () {
            map.getCanvas().style.cursor = 'pointer';
        });

        // Change it back to a pointer when it leaves.
        map.on('mouseleave', 'places', function () {
            map.getCanvas().style.cursor = '';
        });
    });
}