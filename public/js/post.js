$(document).ready(() => {
    // Getting references to our form and input
    const titleInput = $("#post-title");
    const imgInput = $("#img");
    const locationInput = $("#post-location");
    const ratingInput = $("#post-rating");
    const bodyInput = $("#post-body");
    const tagsInput = $("#post-tags");
    const postSubmit = $("#new-post-submit");
  
    // When the signup button is clicked, we validate the email and password are not blank
    postSubmit.on("click", event => {
      event.preventDefault();
      console.log("The title = ", (titleInput.val().trim()));
      console.log("The image = ", (imgInput.val().trim()));
      console.log("The location = ", (locationInput.val().trim()));
      console.log("The rating = "), (ratingInput.data("rating"));
      console.log("The body = ", (bodyInput.val().trim()));
      console.log("The tags = ", (tagsInput.val().trim()));
      const postData = {
        postLocation: locationInput.val().trim(),
        postTitle: titleInput.val().trim(),
        postBody: bodyInput.val().trim(),
        postTags: tagsInput.val().trim(),
        userRating: ratingInput.data("rating"),
        imgFilepath: imgInput.val().trim()
      };
  
      console.log("The userData = ", JSON.stringify(postData));
  
    //   if (!postData.postLocation || !postData.ostTitle || !postData.postBody || !postData.postTags) {
    //     return;
    //   }
      // If we have an email and password, run the signUpUser function
      newPost(postData);
        titleInput.val("");
        imgInput.val("");
        locationInput.val("");
        bodyInput.val("");
        tagsInput.val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function newPost(data) {
        console.log("newPost function data = ", JSON.stringify(data));
      $.post("/api/user-post", {
        postLocation: data.postLocation,
        postTitle: data.postTitle,
        postBody: data.postBody,
        postTags: data.postTags,
        userRating: data.userRating,
        imgFilepath: data.imgFilepath
      })
        .then(() => {
          window.location.replace("/");
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handlePostErr);
    }
  
    function handlePostErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });