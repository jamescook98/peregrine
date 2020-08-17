INSERT INTO user (userName, userPassword, userEmail)
VALUES ("jamescook", "password12345", "cookjamesarthur@gmail.com");

INSERT INTO user (userName, userPassword, userEmail)
VALUES ("connerjarrell", "password1234567", "connerjarrell@gmail.com");

INSERT INTO userPost (userEmail, postLocation, postDate, postTitle, postBody, postTags)
VALUES ("cookjamesarthur@gmail.com", "Chicago, Illinois, United States", "2020-08-13 09:08:13", "Taco Burrito Express", "Taco Burrito Express on Diversey and Halsted is one of the north side's best kept secrets. Get the horchata!", "chicago,taco,burrito,express,taco-burrito-express,horchata",5,"./public/images/1TacoBurritoExpress.jpg");

INSERT INTO userPost (userEmail, postLocation, postDate, postTitle, postBody, postTags)
VALUES ("connerjarrell@gmail.com", "Brooklyn, New York, United States", "2020-08-13 09:12:27", "LA Burrito", "LA Burrito in Bushwick, Brooklyn is pretty good. The Mexican food in Chicago is just better.", "brooklyn,burrito,la-burrito,bushwick,horchata",4,"./public/images/2LABurrito.jpg");





INSERT INTO user (userName, userPassword, userEmail)
VALUES ("margaretseiche", "margaret28", "margaretseiche@hotmail.com"),
        ("nicolegraiff", "nicole10", "nicole.graiff@gmail.com"),
        ("mikelee", "25mike", "mikewclee@gmail.com"),
        ("dominikaperkowsa", "dominika43", "dominikaperkowska@gmail.com"),

        ("maryjones", "jones46", "jones@gmail.com"),
        ("tomsmith", "toms17", "toms@gmail.com"),
        ("janemoore", "moore27", "janemoore@gmail.com"),
        ("katenunan", "kate30", "knunan@gmail.com"),
        ("richardmellon", "mellowmellon", "mellow@gmail.com"),
        ("ulrikahasse", "ulli39", "ullihasse@gmail.com"),
        ("tedrichter", "ted32", "richter@gmail.com"),
        ("marnieharrison", "marnie35", "mharrison@gmail.com"),
        ("nelsonyates", "nyates57", "nelsony@gmail.com"),
        ("jacobmiller", "miller892", "jmiller@gmail.com")
;

INSERT INTO userPost (userEmail, postLocation, postDate, postTitle, postBody, postTags, userRating, imgFilepath)
VALUES ("margaretseiche@hotmail.com", "Chicago, Illinois, United States", "2020-08-13 09:13:03", "Dos Toros", "New entry in the Chicago food scene.  Good quality, reasonable price, great flavors.  I'll be back!", "chicago,dos,toros,taqueria,dos-toros-taqueria,restaurant",4,"./public/images/3DosToros.jpg"),
       ("margaretseiche@hotmail.com", "Irving, Texas, United States", "2020-08-13 09:14:18", "Saltgrass Steak House", "Saltgrass is a great place for everyone; you would feel comfortable with young kids or on a date.  Stop by before 6pm to get the early bird discount.", "irving,texas,saltgrass,steak,house,saltgrass-steak-house,restaurant",5,"./public/images/4Saltgrass.jpg"),
       ("margaretseiche@hotmail.com", "Chicago, Illinois, United States", "2020-08-13 09:15:38", "Ed Debevic's", "Prepare for a unique dining experience.  Seriously, prepare.  In good-natured fun, your waiter will wear vintage clothes, insult you, and not thank you for your order (the sass part of its appeal), but he will bring you delicious diner food.","chicago,ed,debevic,ed-debevic,restaurant",4,"./public/images/5EdDebevics.jpg"),
       ("margaretseiche@hotmail.com", "Beijing, Beijing, China", "2020-08-13 09:16:42", "Liqun Roast Duck Restaurant", "This little hidden gem is famous to insiders, though overlooked by most tourists.  The perfection of the duck will astound you, bringing you back to this special spot again and again.  Be prepared to enjoy the duck feet with the spicy mustard --- really, you will want more.","beijing,china,liqun,roast,duck,restaurant,liqun-roast-duck-restaurant,restaurant",5,"./public/images/6Liqun.JPG"),
       ("margaretseiche@hotmail.com", "Jiuzhaigou, Sichuan, China", "2020-08-13 09:17:13", "Jiuzhaigou National Park", "Take the bus up to the start of the Yangtze River and take your time exploring as you walk down the mountain.  The bus ticket allows you to hop on-and-off as you wish.","sichuan,china,jiuzhaigou,national,park,jiuzhaigou-national-park",5,"./public/images/7Jiuzhaigou.jpg"),
       ("margaretseiche@hotmail.com", "Kunming, Yunnan, China", "2020-08-13 09:18:31", "Stone Forest", "The Stone Forest is well worth the bus journey out from downtown (or you can spend a little more to take the high-speed train for a 20 minute ride).  You will see one of the natural wonders of the world.", "kunming,yunnan,china,stone,stone,stone-forest",5,"./public/images/8StoneForest.jpg"),
       ("margaretseiche@hotmail.com", "Lisle, Illinois, United States", "2020-08-13 09:19:59", "Morton Arboretum", "If you are looking to enjoy a day outdoors while seeing some beautiful parts of nature, head to the arboretum.  The maze is a hit with kids and the park overall is nice as a break from a busy vacation.", 3,"./public/images/9MortonArboretum.jpg"),
       ("margaretseiche@hotmail.com", "Chicago, Illinois, United States", "2020-08-13 09:20:43", "Leona's Pizzeria & Restaurant", "Leona's is a great local Italian restaurant.  Pizza? Pasta? Salad? Entree?  Take your pick and you won't be disappointed.", "leona's,pizzeria,restaurant,leona's-pizzeria-restaurant",4,"./public/images/10Leona.jpg"),
       ("margaretseiche@hotmail.com", "Beijing, Beijing, China","2020-08-13 09:21:21", "Muse", "Muse has great food, fast service, and a nice atmosphere, whether you want to park with your laptop for awhile or just stop in for a quick bite.  The Vietnamese sandwiches, special coffee, papaya salad, summer rolls, and pho are all favorites.","beijing,china,muse,restaurant",4,"./public/images/11Muse.jpg"),
       ("margaretseiche@hotmail.com", "Beijing, Beijing, China","2020-08-13 09:22:55", "Street Vendors", "Enjoying street food is one of the best ways to really experience life in Beijing.  Pick a corner and you are sure to find some type of delicacy --- jianbing rolled pancakes, roasted sweet potatoes, candied crapapples, spiralled pineapple, lamb skewers.  It's hard to go on because I am hungry now.","beijing,china,street,vendors,food,street-vendors",5,"./public/images/12streetfood.jpg"),
       ("margaretseiche@hotmail.com", "Beijing, Beijing, China","2020-08-13 09:23:41", "Ice Skating at Houhai", "Houhai is one of several city lakes that freeze every winter, delighting everyone who wants to try some time on the ice.  Get there early if you want a bicycle, though settling for chair skating is still fun.  Afterwards, follow your nose for roasted chestnuts and stinky tofu.", "beijing,china,ice,skating,houhai,ice-skating-at-houhai",4,"./public/images/13iceskating.jpg"),
       ("margaretseiche@hotmail.com", "Beijing, Beijing, China","2020-08-13 09:24:46", "Jingshan Park", "An unassuming park north of the Forbidden City has a stunning view of the city.  There will be other tourists there, but not nearly the number that you would expect given the fantastic vantage point.","beijing,china,jingshan,park,jingshan-park",4,"./public/images/14jingshanpark.jpg"),
       ("margaretseiche@hotmail.com", "Beigou Village, Beijing, China", "2020-08-13 09:25:27", "The Brickyard at Mutianyu Great Wall", "This is a great spot for lunch after a hike on the 'Wild Wall' (trust me --- it's worth it to hire a guide to find the right trail to the Great Wall).  The Brickyard was converted from an abandoned factory, after many local families sought work closer to downtown, and is now run as a restaurant and hotel.  If you want to stay for a bit, there are rooms or homes available for rent.", "beigou,beijing,china,brickyard,mutianyu,great,wall,brickyard-mutianyu-great-wall,restaurant,hotel",4,"./public/images/15Brickyard.jpg"),
       ("margaretseiche@hotmail.com", "Beijing, Beijing, China", "2020-08-13 09:26:52", "Roundabout Charity Store", "If you are looking for cool souvenirs on a budget, head to the suburbs and Roundabout.  This charity store was started in 2008 to better distribute goods donations to charities.  They act as a clearinghouse so that charities can 'shop' for clothes, cribs, and high chairs as new children arrive in their care.  It sells new and gently used items that do not suit the needs of its beneficiaries, providing cash funding for medical treatments, heating fuel, and educational support.  You will be moved by seeing the difference that Roundabout has made.", "beijing,china,roundabout,charity,store,roundabout-charity-store",5,"./public/images/16roundabout.jpg"),
       ("margaretseiche@hotmail.com", "Beijing, Beijing, China", "2020-08-13 09:27:33", "Cooking Class", "Cooking is such a part of Chinese culture.  Spend a day to learn some new dishes and enjoy a special day with new friends.  'The Hutong' and 'Black Sesame Kitchen' both offer fun classes.", "beijing,china,cooking,class,hutong,black,sesame,kitchen,the-hutong,black-sesame-kitchen,cooking-class",4,"./public/images/17cooking.jpg"),
       ("dominikaperkowska@gmail.com", "East Hampton, New York, United States", "2020-08-13 09:28:47", "Highway Restaurant and Bar", "The Highway Restaurant is the epitome of what every great neighborhood restaurant aspires to be, the kind of place where guests feel at home and can have a delicious, well-crafted meal, whatever the occasion, any day of the week. Open year round, The Highway offers a menu of seasonally inspired New American cuisine that gives nods to urban and global influences.", "east-hampton,new-york,highway,restaurant,bar,highway-restaurant-bar",5,"./public/images/18HighwayRestaurant.jpg"),