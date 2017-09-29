/**
 * Created by minttu on 28-Sep-17.
 */


function find() {
    var berry = $('#berryselect').val();
    console.log("valinta on " + berry);
    var bounds = new google.maps.LatLngBounds();
    var markers;
    if (berry != "(valitse marja)" || berry != "") { //tämä != "(valitse marja)" ei jostain syystä toimi
        if (berry == 'kaikki'){
            getFindings(function(findings) {
                placeMultipleMarker(findings);
                console.log(findings);
            });
        }
        else{
            //tässä muut marjat id:n mukaan
            getBerry(berry, function(selectedBerry){
                console.log("marja on " + JSON.stringify(selectedBerry));
                console.log("marjan id on "+ selectedBerry.id );

                getFindingByBerryId(selectedBerry.id, function(findings) {
                    placeMultipleMarker(findings);
                    console.log(findings);
                });

            });
        }

    }
    else {
        console.log('error');
    }
}

function getFindings(callback) {
    $.get(address + "/findings", function(data, status){
        console.log("Data: " + JSON.stringify(data) + "\nStatus: " + status);
        callback(data);
    });

}


function getFindingByBerryId(id, callback) {
    $.get(address + "/findings/berry/"+id, function(data, status){
        console.log("Data: " + JSON.stringify(data) + "\nStatus: " + status);
        callback(data);
    });

}
