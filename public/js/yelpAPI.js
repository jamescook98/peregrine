$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
    let searchText = $('#searchText').val();
    if (searchText == "") {
      searchText = 'New York, NY';
    }
    getYelpInfo(searchText);
    e.preventDefault();
  });

  $('#searchMore').on('submit', (event) => {
    let searchTodo = $('#searchTodo').val();
    let searchLocation = $('#searchText').val();
    if (searchTodo ==""){
      searchTodo = 'sightseeing';
    }
    if (searchLocation == "") {
      searchLocation = 'New York, NY';
    }
    console.log("search Todo --- " + searchTodo + " at location " + searchLocation);
    getYelpTodo(searchTodo, searchLocation);
    event.preventDefault();
  });

});

function getYelpInfo(searchText) {
  console.log(searchText);
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
              <div class="col-md-8">
              <div class="well text-center">
                <a href=${restaurant.url} target="_blank"><h7>${restaurant.name} </h7></a>
                <img src="${restaurant.image_url}">  
                <h8>${restaurant.location.display_address}</h8>
                <h8>Ratings= ${restaurant.rating} || Number of reviews= ${restaurant.review_count}</h8>
                <h8>${restaurant.price}</h8>
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


function getYelpTodo(searchTodo, searchLocation) {
  console.log(searchText);
  var settings = {
    "url": `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${searchTodo}&location=${searchLocation}`,
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
    let activity = response.businesses;
    let output = '';
    $.each(activity, (index, activity) => {
      output += `
              <div class="col-md-8">
              <div class="well text-center">
                <img src="${activity.image_url}">
                <a href=${activity.url} target="_blank"><h7>${activity.name} </h7></a>
                <h8>${activity.location.display_address}</h8>
                <h8>Ratings= ${activity.rating} || Number of reviews= ${activity.review_count}</h8>
                <a onclick="restaurantSelected('${activity.id}')" class="btn btn-primary" href="#">Activity details</a>
              </div>
            </div>
              `;
    });
    $('#yelp').html(output);
  }).catch((err) => {
    console.log(err);
  });
}

function restaurantSelected(id) {
  sessionStorage.setItem('restaurantId', id);
  console.log(id);
  window.location = 'restaurant.html';
  return false;
}

function getRestaurant() {
  console.log('getRestaurant info!!!!');
  let restaurantId = sessionStorage.getItem('restaurantId');

  var settings = {
    "url": `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${restaurantId}/reviews`,
    "method": "GET",
    "timeout": 0,
    // "limit": 5,
    "headers": {
      "Authorization": "Bearer BdJJtqLJAbXg46LvAvsUxVIFGDcTm1OLpdNFVi3c47LfyPltqjhffRyvyUCd0IPXhZuG3N2KOrn0faY1QG0lK412AkBNE9zFsAhYc1MgntcV7V0_veyQD9Aytqo0X3Yx",
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    let review = response.reviews;
    let output = '';
    $.each(review, (index, reviews) => {
      console.log('response for review.url' + reviews.url);
      output += `
            <div class="row">
              <div class="col-md-3">
              <img src="${reviews.user.image_url}" class="img-thumbnail">
              </div>
              <div class="col-md-8">
                <a href=${reviews.user.profile_url} target="_blank"> User Yelp Profile</a>
                <ul class="list-group">
                <li class="list-group-item"><strong>User Name:</strong> ${reviews.user.name}</li>
                  <li class="list-group-item"><strong>time_created:</strong> ${reviews.time_created}</li>
                  <li class="list-group-item"><strong>Ratings:</strong> ${reviews.rating}</li>
                </ul>
              </div>
            </div>
            <div class="row">
              <div class="well">
                <h5>Reviews: </h5>
                ${reviews.text}
                <hr>
                <a href=${reviews.url} target="_blank" class="btn btn-primary">View On Yelp</a>
                <a href="index.html" class="btn btn-default">Go Back To Search</a>
              </div>
            </div>
          `;
    });
    $('#restaurant').html(output);
  })
    .catch((err) => {
      console.log(err);
    });
}
