// Adds a new finding with post
function addFinding(berry, lat, lng) {
    let submitresponse = $("#submitresponse");
    if ($.isNumeric(lat) && $.isNumeric(lng)) {
      $.ajax({
          type: "POST",
          url: address +"/findings",
          dataType: "json",
          accept: "application/json",
          contentType: "application/json; charset=utf-8",
          data: JSON.stringify({name: parseInput(berry), lat: lat, long: lng}),
          success: function () {
            showSuccessmessage("Marjalöytö lisätty. Kiitos!");
          },
          error: function (response) {
            console.log(response.responseText);
            showErrormessage("Jotakin meni pieneen. Yritä myöhemmin uudelleen. :(");
          }
      })
    }
    else {
      showErrormessage("Varmista, että syötteesi ovat oikein");
    }
}

// Shows a red error message if something went wrong
function showErrormessage(message) {
  $("#submitresponse").css("color", "red");
  $("#submitresponse").html(message);
}

// Shows a green error message if post was successful
function showSuccessmessage(message) {
  $("#submitresponse").css("color", "green");
  $("#submitresponse").html(message);
}

// Clears old message
function clearMessage() {
  $("#submitresponse").html('');
}
