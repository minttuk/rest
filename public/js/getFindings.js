/**
 * Created by minttu on 28-Sep-17.
 */


function find() {
    var berry = $('#berryselect').val();
    console.log("valinta on " + berry);
    var map = getMap();
    var bounds = new google.maps.LatLngBounds();
    var markers;
    if (berry != '(valitse marja)' || berry != '') {
        if (berry == 'kaikki'){
            getFindings(function(findings) {
                console.log(findings);
                for (var i = 0; i < findings.length; i++) {
                    var position = new google.maps.LatLng(findings[i].lat, findings[i].long);
                    bounds.extend(position);
                    placeMultipleMarker(position, map);
                    var position2 = {lat: 60.1699, lng: 24.9384}; //just for testing
                    bounds.extend(position2);
                    placeMultipleMarker(position2, map);
                }

                // Automatically center the map fitting all markers on the screen
                map.fitBounds(bounds);
            });
        }
        else{
            //tähän muut marjat
        }

    }
    else {
        console.log('error');
    }

    function getFindings(callback) {
        //$.get("http://localhost:8888/rest/public/api/findings", function(data, status){ //Sainin localhost
        //$.get("http://localhost/rest/public/api/findings", function(data, status){ //Mintun localhost
            $.get(address + "/findings", function(data, status){
                console.log("Data: " + JSON.stringify(data) + "\nStatus: " + status);
            callback(data);
        });

    }

}
