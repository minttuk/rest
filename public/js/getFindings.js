/**
 * Created by minttu on 28-Sep-17.
 */


function find() {
    $("#errormessage").html("");
    var berry = $('#berryselect').val();
    if (berry != "(valitse marja)") {
        if (berry == 'kaikki'){
            getFindings(function(findings) {
                placeMultipleMarker(findings);
                console.log(findings);
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
        $("#errormessage").html("Valitse ensin marja!");
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
