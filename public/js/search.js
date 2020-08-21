$(document).ready(() => {
    // Getting references to our form and input
    const searchInput = $("#home-search");
    const searchButton = $("#peregrineDB-search");
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
            const cardDiv = $("<div>").attr({class: "card", id: [item.id]}).appendTo("#peregrine-results");
            const cardImg = $("<div>").attr("class", "image").appendTo(cardDiv);
            $("<img>").attr("src", item.imgFilepath).appendTo(cardImg);
            const ratingDiv = $("<div>").attr("class", "extra").text("Rating").appendTo(cardDiv);
            $("<div>").attr({class: "ui star rating", rating: [item.userRating]}).appendTo(ratingDiv);
            const popup = $("<div>").attr("class", "ui popup").appendTo(cardDiv);
            $("<div>").attr("class", "header").text("User Rating").appendTo(popup);
            $("<div>").attr({class: "ui star rating", "data-rating": [item.userRating]}).appendTo(ratingDiv);
            const titleDiv = $("<div>").attr("class","content").appendTo(cardDiv);
            $("<a>").attr("class", "header").text(item.postTitle).appendTo(titleDiv);
          };
        })
        .catch(handleSearchErr);
    }
    function handleSearchErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });