/**
 * Created by Jordie on 18/11/16.
 */


var map;
var infowindow;

function initMap() {
    var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);

    map = new google.maps.Map(document.getElementById('map'), {
        center: pyrmont,
        zoom: 15
    });
    infowindow = new google.maps.InfoWindow();
    var request = {
        location: pyrmont,
        radius: '5000',
        keyword: [document.getElementById('place_search').value]
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);

    map.addListener('center_changed', function(){

        var newrequest = {
            location: map.getCenter(),
            radius: '5000',
            keyword: [document.getElementById('place_search').value]
        };
        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(newrequest, callback);


    })
}



function callback(results, status) {

    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            var place = results[i];
            createMarker(results[i]);
        }
    }
}

function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}