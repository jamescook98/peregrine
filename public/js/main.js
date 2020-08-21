$(document).ready(() => {
    $('#searchIndex').on('submit', (event) => {
      let searchMain = $('#searchMain').val();
      // window.location.replace("reviews.html");
      // console.log(searchMain);
      sessionStorage.setItem('searchText', searchMain);
      let temp = sessionStorage.getItem('searchText');
      console.log(temp);
      window.location = ('reviews.html')
      event.preventDefault();
    });
});

function getReviewInfo() {
    // console.log('feed in from index.html ' + searchText);
    let searchText = sessionStorage.getItem('searchText');

    //api to get user's review posts
    $.get("api/posts", (data)=>{
      if (data) {
        console.log(data);

      }
    });

    //Yelp api call to get restaurant info...
    var settings = {
      "url": `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=food&location=${searchText}`,
      "method": "GET",
      "sort_by": "review_count",
      "timeout": 0,
      "headers": {
        "Authorization": "Bearer BdJJtqLJAbXg46LvAvsUxVIFGDcTm1OLpdNFVi3c47LfyPltqjhffRyvyUCd0IPXhZuG3N2KOrn0faY1QG0lK412AkBNE9zFsAhYc1MgntcV7V0_veyQD9Aytqo0X3Yx",
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    };
  
    $.ajax(settings).done(function (response) {
      console.log(response);
      let restaurants = response.businesses;
      let output = '';
      $.each(restaurants, (index, restaurant) => {
        output += `
                <div class="col-md-3">
                <div class="well text-center">
                  <img src="${restaurant.image_url}">
                  <a href=${restaurant.url} target="_blank"><h4>${restaurant.name} </h4></a>
                  <h4>${restaurant.location.display_address}</h4>
                  <h4>Ratings= ${restaurant.rating} || Number of reviews= ${restaurant.review_count}</h4>
                  <h7>${restaurant.price}</h7>
                  <a onclick="restaurantSelected('${restaurant.id}')" class="btn btn-primary" href="#">Restaurant details</a>
                </div>
              </div>
                `;
      });
      $('#yelp').html(output);
    }).catch((err) => {
      console.log(err);
    });
  }