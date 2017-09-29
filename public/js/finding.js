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
            submitresponse.html("Marjalöytö lisätty. Kiitos!");
          },
          error: function (response) {
            console.log(response.responseText);
            submitresponse.html("Jotakin meni pieneen. Yritä myöhemmin uudelleen. :(");
          }
      })
    }
    else {
      submitresponse.html("Varmista, että syötteesi ovat oikein");
    }
}
