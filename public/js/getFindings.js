/**
 * Created by minttu on 28-Sep-17.
 */

//gets the findigs that are selected and calls function placeMultipleMarker() on the findings
function find() {
    $("#submitresponse").html("");
    var berry = $('#berryselect').val();
    if (berry != "(valitse marja)") {
        if (berry == 'kaikki'){
            getFindings(function(findings) {
                placeMultipleMarker(findings);
                //console.log(findings);
            });
        }
        else{
            //tässä muut marjat id:n mukaan
            getBerry(berry, function(selectedBerry){
                getFindingByBerryId(selectedBerry.id, function(findings) {
                    placeMultipleMarker(findings);
                });
            });
        }
    }
    else {
        console.log('Et ole valinnut marjaa!');
        showErrormessage("Valitse ensin marja!");
    }
}

//gets all of the findings from database
function getFindings(callback) {
    $.get(address + "/findings", function(data, status){
        console.log("Data: " + JSON.stringify(data) + "\nStatus: " + status);
        callback(data);
    });

}

//gets findings by berry_id from database
function getFindingByBerryId(id, callback) {
    $.get(address + "/findings/berry/"+id, function(data, status){
        console.log("Data: " + JSON.stringify(data) + "\nStatus: " + status);
        callback(data);
    });

}

function locate2() {
    var locatebutton = $('#locate2-button');
    locatebutton.prop('disabled', true);
    locatebutton.html("Paikantaa...");

    geoFindMe(function(position) {
            var map = getMap2();
            lat = position.coords.latitude;
            lng = position.coords.longitude
            var uluru = {lat: lat, lng: lng};
            placeMarker(uluru, map);
            //addOwnLocationMarker(uluru, map);
            map.setCenter(uluru);
            //enables gps location button again
            locatebutton.html("Paikanna oma sijainti");
            locatebutton.prop('disabled', false);
        },
        function() {
            //error
            console.log("Unable to retrieve your location");
        });
}
