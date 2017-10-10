function getBerries(callback) {
    $.get(address +"/berries", function(data, status){
      //console.log("Data: " + JSON.stringify(data) + "\nStatus: " + status);
      callback(data);
  });

}

/*function getBerry(id) {
  return null;
}*/

function getBerry(berry, callback) {
    $.get(address + "/berries/"+berry, function(data, status){
        //console.log("Data: " + JSON.stringify(data) + "\nStatus: " + status);
        callback(data);
    });

}
