/**
 * Created by jaimechizavane on 8/15/17.
 */

/* Google Maps
 ------------------------------------------------*/
var map = '';
var center;

function initialize() {
    var mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(-25.9629445, 32.5658072), //-25.9629445,32.5658072,18z localização no Google Maps
        scrollwheel: false,
        draggable:false
    };

    map = new google.maps.Map(document.getElementById('GoogleMap'),  mapOptions);

    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });

    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}

function calculateCenter() {
    center = map.getCenter();
}
