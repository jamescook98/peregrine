$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");
  const userInput = $("input#name-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    console.log("The email = ", (emailInput.val().trim()));
    console.log("The password = ", (passwordInput.val().trim()));
    console.log("The userName = ", (userInput.val().trim()));
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      userName: userInput.val().trim()
    };

    console.log("The userData = ", JSON.stringify(userData));

    if (!userData.email || !userData.password || !userData.userName) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password, userData.userName);
    emailInput.val("");
    passwordInput.val("");
    userInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, userName) {

    $.post("/api/signup", {
      email: email,
      password: password,
      userName: userName
    })
      .then(() => {
        window.location.replace("/members");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
