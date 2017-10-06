var marker, positionMarker;
var map, map2; //map2 in showFindings.html
var infowindow;
var content;
var markersArray = [];


//Adds a marker on the map. If the map is map2, info "Oma sijainti" is added. This marker is not added to the markers array.
function placeMarker(position, map) {
    if (positionMarker == null) {
        var icon = {
            url: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-man-128.png", // url
            scaledSize: new google.maps.Size(50, 50), // scaled size
            origin: new google.maps.Point(0, 0), // origin
            anchor: new google.maps.Point(25, 50) // anchor
        };

        positionMarker = new google.maps.Marker({
            position: position,
            map: map,
            icon: icon
        });
        if (map == map2){
            addInfoWindowContent(positionMarker, "i", "Oma sijainti");
        }
    }
    else {
        positionMarker.setPosition(position);
    }
    map.setCenter(position);
    map.setZoom(15);
}

//clears map from berries and adds selected findings markers to map with infowindow content.
//if users position is marked on map, it is not cleared.
function placeMultipleMarker(findings) {
    clearMap();
    if (!$.trim(findings)){
        showErrormessage("Valitettavasti haluamasi marjan marjapaikkoja ei löytynyt!");
        map2.setCenter({lat: 60.1699, lng: 24.9384});
    }
    else{
        var bounds = new google.maps.LatLngBounds();
        var berry;
        for (var i = 0; i < findings.length; i++) {
            var lat = findings[i].lat;
            var lng = findings[i].long;
            var position = {lat: lat, lng: lng};
            bounds.extend(position);
            addMarker(position, map2, i);
            //Adds infowindow content to markers
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    getBerry(findings[i].berry_id, function(selectedBerry){
                        infowindow.setContent(selectedBerry.name);
                        infowindow.open(map2, marker);
                    });
                }
            })(marker, i));
        }

        // Automatically center the map fitting all markers on the screen
        map2.fitBounds(bounds);
        var zoom = map2.getZoom();
        if (zoom > 13){
            map2.setZoom(13);
        }
    }
}

//Adds a marker on the map and to the markers array
function addMarker(position, map, i) {
    marker = new google.maps.Marker({
        position: position,
        map: map
    });
    markersArray.push(marker);
}

//Adds infowindow content to a marker.
function addInfoWindowContent(marker, i, content){
    // Allow each marker to have an info window
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
            infowindow.setContent(content);
            infowindow.open(map2, marker);
        }
    })(marker, i));
}

//clears the markers in the markers array from the map.
function clearMap() {
    if (markersArray) {
        for (i in markersArray) {
            markersArray[i].setMap(null);
        }
        markersArray.length = 0;
    }
}

//initializes map to be used in page addFindings.html
function initMap() {
    var uluru = {lat: 60.1699, lng: 24.9384};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    map.addListener('click', function(e) {
        placeMarker(e.latLng, map);
    });
}

//Initializes map2 to be used in the showFindings.html page.
function initMap2() {
    infowindow = new google.maps.InfoWindow();
    var uluru = {lat: 60.1699, lng: 24.9384};
    map2 = new google.maps.Map(document.getElementById('map2'), {
        zoom: 15,
        center: uluru
    });
}

function getMap() {
  return map;
}

function getMap2(){
    return map2;
}

function getMarker() {
  return marker;
}
