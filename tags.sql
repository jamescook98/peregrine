CREATE TABLE tags (
  id int NOT NULL AUTO_INCREMENT,
  tag varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO tags (tag) VALUES ('coffee'), ('tea'), ('green-tea'), ('ginger-tea'), ('ginger-beer'), ('taco'), ('burrito'),
('horchata'), ('irving'), ('texas'), ('saltgrass'), ('chicago'), ('diner'), ('eggs'), ('beijing'), ('china'), ('houhai'),
('jingshan'), ('park'), ('steak'), ('fish'), ('duck'), ('peking'), ('peking-duck'), ('rice'), ('roast'), ('restaurant'),
('bar'), ('coffeehouse'), ('biergarten'), ('beer'), ('wine'), ('sake'), ('burger'), ('hot-dog'), ('frankfurter'), ('curry'),
('soup'), ('egg-drop-soup'), ('hot-and-sour'), ('stew'), ('gumbo'), ('jambalaya'), ('turkey'), ('turkish'), ('new-york-city'),
('brooklyn'), ('bronx'), ('queens'), ('long-island'), ('jersey'), ('jersey-city'), ('paris'), ('brussels'), ('dusseldorf'),
('leipzig'), ('koln'), ('amsterdam'), ('hibachi'), ('bbq'), ('barbecue'), ('grill'), ('stir-fry'), ('noodles'), ('bok-choy'),
('pad-thai'), ('thai'), ('pad-see-ew'), ('pad-khi-mao'), ('lo-mein'), ('chow-mein'), ('shrimp'), ('seafood'), ('shellfish'),
('sushi'), ('shrimp-rolls'), ('egg-rolls'), ('wings'), ('chicken'), ('sandwiches'), ('finger-sandwiches'), ('wrap'), ('panini'),
('reuben'), ('biryani'), ('tikka-masala'), ('tikka'), ('masala'), ('chicken-tikka-masala'), ('samosa'), ('naan'), ('roti'),
('butter-chicken'), ('jalebi'), ('tiramisu'), ('cheesecake'), ('cannoli'), ('ramen'), ('unagi'), ('tonkatsu'), ('okonomiyaki'),
('udon'), ('tofu'), ('soba'), ('yakitori'), ('sashimi'), ('tempura'), ('seitan'), ('vegan'), ('vegetarian'), ('veggies'),
('fried-rice'), ('chicken-fried-rice'), ('shrimp-fried-rice'), ('pork'), ('pork-fried-rice'), ('basil'), ('pita'), ('gyro'), 
('lamb'), ('greek'), ('tzatziki'), ('falafel'), ('hummus'), ('street-food'), ('street-cuisine'), ('food-truck'), ('halal'),
('kebab'), ('souvlaki'), ('greek-salad'), ('moussaka'), ('baklava'), ('spanakopita'), ('simit'), ('lokma'), ('pesto'),
('caprese'), ('caprese-salad'), ('pizza'), ('pasta'), ('spaghetti'), ('penne'), ('ravioli'), ('tortellini'), ('risotto'), 
('mushroom'), ('bruschetta'), ('margherita'), ('margarita'), ('manhattan'), ('cocktail'), ('gin-and-tonic'), ('mojito'),
('zoo'), ('museum'), ('golf'), ('mini-golf'), ('minigolf'), ('park'), ('square'), ('juice'), ('juice-bar'), ('temple'),
('monastery'), ('cemetary'), ('church'), ('cathedral'), ('japanese'), ('chinese'), ('china'), ('korea'), ('korean'), ('hotpot'),
('pan-asian'), ('korean-bbq'), ('korean-barbecue'), ('martini'), ('daiquiri'), ('mai-tai'), ('chop-suey'), ('dim-sum'),  
('dumplings'), ('sichuan-pork'), ('hot-pot'), ('szechuan'), ('kung-pao'), ('kung-pao-chicken'), ('wonton'), ('spring-roll'),
('shawarma'), ('ice-cream'), ('ice'), ('cream'), ('frozen-yogurt'), ('frozen'), ('yogurt'), ('dessert'), ('cake'), ('pie'),  
('chocolate'), ('hot-chocolate'), ('cocoa'), ('hot-cocoa'), ('turkish-coffee'), ('fajita'), ('fajitas'), ('chili'), ('enchilada'), 
('enchiladas'), ('poke'), ('pho'), ('banh-mi');