document.addEventListener("DOMContentLoaded", function() {
  $("button").on("click", function() {
    $.ajax({
      method: "GET",
      url:
        "https://api.nytimes.com/svc/topstories/v2/science.json?api-key=jMZDRIKLvAzaQaCw7PInVIccW1LfaMYp",
      dataType: "json"
    }).done(function(data) {
      console.log(data);
    });
  });
});
