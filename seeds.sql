INSERT INTO user (userName, userPassword, userEmail, verified)
VALUES ("jamescook", "password12345", "cookjamesarthur@gmail.com", false);

INSERT INTO user (userName, userPassword, userEmail, verified)
VALUES ("connerjarrell", "password1234567", "connerjarrell@gmail.com", false);

INSERT INTO userPost (userEmail, postLocation, postDate, postTitle, postBody, postTags)
VALUES ("cookjamesarthur@gmail.com", "Chicago, Illinois, United States", "2020-08-13 09:08:13", "Taco Burrito Express", "Taco Burrito Express on Diversey and Halsted is one of the north side's best kept secrets. Get the horchata!", "chicago,taco,burrito,express,taco-burrito-express,horchata");

INSERT INTO userPost (userEmail, postLocation, postDate, postTitle, postBody, postTags)
VALUES ("connerjarrell@gmail.com", "Brooklyn, New York, United States", "2020-08-13 09:12:27", "LA Burrito", "LA Burrito in Bushwick, Brooklyn is pretty good. The Mexican food in Chicago is just better.", "brooklyn,burrito,la-burrito,bushwick,horchata");