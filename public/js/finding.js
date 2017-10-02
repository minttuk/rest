function addFinding(berry, lat, lng) {
    let submitresponse = $("#submitresponse");
    if ($.isNumeric(lat) && $.isNumeric(lng)) {
      $.ajax({
          type: "POST",
          url: address +"/findings",
          dataType: "json",
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

function showErrormessage(message) {
  $("#submitresponse").css("color", "red");
  $("#submitresponse").html(message);
}

function showSuccessmessage(message) {
  $("#submitresponse").css("color", "green");
  $("#submitresponse").html(message);
}

function clearMessage() {
  $("#submitresponse").html('');
}
