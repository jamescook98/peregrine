$(document).ready(() => {
    // Getting references to our form and input
    const searchInput = $("#home-search");
    const searchButton = $("#peregrineDB-search");

    function handleSearchErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
      };

    // When the search button is clicked, we collect the search term and send it to the searchPost function
    searchButton.on("click", event => {
      event.preventDefault();
      console.log("The home search button has been clicked.");
      console.log("The search value = ", (searchInput.val().trim()));
      const terms = (searchInput.val().trim());
      searchPost(terms);
        searchInput.val("");
    });
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function searchPost(terms) {
        console.log("The searchPost function has been entered.");
        console.log("searchPost function data = ", terms);
        const queryUrl = "/api/search/" + terms;
        console.log("The queryURL = ", queryUrl);
      $.get(queryUrl)
        .then((response) => {
          console.log("The response is ", response);
          $("#peregrine-results").empty();
          for(let i = 0; i < response.length; i++){
              let item = response[i];
            const cardDiv = $("<div>").attr({class: "card", id : item.id}).appendTo("#peregrine-results");
            const cardImg = $("<div>").attr("class", "image").appendTo(cardDiv);
            $("<img>").attr("src", item.imgFilepath).appendTo(cardImg);
            const ratingDiv = $("<div>").attr("class", "extra").text("Rating").appendTo(cardDiv);
            $("<div>").attr({class: "ui star rating", "data-rating": [item.userRating]}).appendTo(ratingDiv);
            const titleDiv = $("<div>").attr("class","content").appendTo(cardDiv);
            const postTitle = $("<a>").attr("class", "header").text(item.postTitle).appendTo(titleDiv);
                cardDiv.click(function(){
                    console.log("$(this).attr('id') = ", $(this).attr("id"));
                    const searchId = $(this).attr("id");
                    searchOne(searchId);
                });
            $(document).ready(function () { $(".rating").rating(); });
          };
        })
        .catch(handleSearchErr);
    };

    function searchOne(data) {
        console.log("The searchPost function has been entered.");
        console.log("searchPost function data = ", data);
        const queryUrl = "/api/posts/" + data;
        console.log("The one post queryURL = ", queryUrl);

      $.get(queryUrl)
        .then((res) => {
          console.log("The response is ", res);
          $("#main").empty();
          $("#peregrine-results").empty();

            const cardDiv = $("<div>").attr({class: "ui two column centered grid", id : res.id}).appendTo("#main");
            const celledList = $("<div>").attr("class", "ui very relaxed celled list").appendTo(cardDiv);
            const item = $("<div>").attr("class", "item").appendTo(celledList);
            $("<img>").attr("src", res.imgFilepath).appendTo(item);
            const content = $("<div>").attr("class", "content").appendTo(item);
            const title = $("<div>").attr("class", "header").text(res.postTitle).appendTo(content);
            $("<div>").attr({class: "ui heart rating", "data-rating": res.userRating}).appendTo(title);
            $("<div>").attr("class", "item").text(res.postBody).appendTo(celledList);
            const yelpButton = $("<button>").attr({class: "ui button", id: "yelp"}).appendTo(celledList);
            $("<a>").attr("href", "./reviews.html").text("Search Yelp").appendTo(yelpButton);

        })
        .catch(handleSearchErr);
    }

  });

