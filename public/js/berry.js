// Gets all berries
function getBerries(callback) {
    $.get(address +"/berries", function(data, status){
      //console.log("Data: " + JSON.stringify(data) + "\nStatus: " + status);
      callback(data);
  });

}

// Gets berry by its name
function getBerry(berry, callback) {
    $.get(address + "/berries/"+berry, function(data, status){
        //console.log("Data: " + JSON.stringify(data) + "\nStatus: " + status);
        callback(data);
    });

}
