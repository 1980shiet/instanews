document.addEventListener("DOMContentLoaded", function() {
  const nytArticlesElem = $("#nyt-articles");

  $("#sections").on("change", function() {
    const selectedVal = $(this).val();

    // addClass to header
    $(".nyt-header").addClass("is-active");

    $.ajax({
      method: "GET",
      url:
        "https://api.nytimes.com/svc/topstories/v2/" +
        selectedVal +
        ".json?api-key=jMZDRIKLvAzaQaCw7PInVIccW1LfaMYp",
      dataType: "json"
    })
      .done(function(data) {
        //console.log("data object", data);
        //console.log(data.last_updated);

        // console.log(data);
        // TODO try working with the data from the NYT API
        const results = data.results;

        const filteredResults = results
          .filter(function(articleItem) {
            return articleItem.multimedia[4] !== undefined;
          })
          .slice(0, 12);

        console.log(filteredResults);

        $(".nyt-articles").html("");
        // console.log(results);

        $.each(filteredResults, function(index, articleObject) {
          nytArticlesElem.append(`
          <article class="news-article" style="background: url(${articleObject.multimedia[4].url}); background-size: cover;">
            <p>${articleObject.abstract}</p>
          </article>
        `);
        });

        // results.forEach(function(article) {
        //   console.log(article);
        //   console.log(article.title);
        //   // based on the code on line 22, try to console.log other object properties
        //   // e.g. try to get the url, title, multimedia?
        //   console.log(article.url[0]);
        // });

        // console.log(results);
        // try working with results to loop and append content to the DOM
      })
      .fail(function(err) {
        //console.log(err);
      });
  });
});
