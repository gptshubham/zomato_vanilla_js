const restaurantImages = [
  'https://b.zmtcdn.com/data/pictures/4/21201484/7ed9e1c3e8b13aa5005ae31d9e1504fe_featured_v2.jpg?output-format=webp',
  'https://b.zmtcdn.com/data/pictures/8/20930988/2a064933f8bdd261df8050594ab51c8b_featured_v2.jpg?output-format=webp',
  'https://b.zmtcdn.com/data/pictures/7/21514147/29562fbb68e44364d96f49eb5de858cb_featured_v2.jpg?output-format=webp',
  'https://b.zmtcdn.com/data/pictures/9/20080559/bf0acabd97fcd26274399685ff102271_featured_v2.jpg?output-format=webp',
  'https://b.zmtcdn.com/data/pictures/1/19890381/bd064a542ddd96b798c590fcf7321b03_featured_v2.jpg?output-format=webp',
  'https://b.zmtcdn.com/data/pictures/1/21425661/9386c0c0fe84bf91b8dc403669f5fae8_featured_v2.jpg?output-format=webp',
  'https://b.zmtcdn.com/data/pictures/4/20790444/8f8f42f073040a4a247ce86447cf0746_featured_v2.jpg?output-format=webp',
  'https://b.zmtcdn.com/data/pictures/6/20916896/fefe6946d4ab398fb07391083aed7bc4_featured_v2.jpg?output-format=webp',
  'https://b.zmtcdn.com/data/pictures/3/21274383/e83cd851aa2d9901a3e990b1f643b361_featured_v2.jpg?output-format=webp',
  'https://b.zmtcdn.com/data/pictures/7/21581967/908579f86533b4635264f819e9961599_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/8/21087448/9c1699e79de47a3b21d0f11859c6450e_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/0/21538950/69e5703bfb3ba293da514f2d7e1ced2b_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/5/20399275/f0e2836a73503d996ebecbf65cfad301_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/9/20906629/bea6339ef5a358df8b15dacb5c6abede_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/9/20996449/76db63ab6cca59adc9f1fea4f7823b5a_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/1/20973911/9349036bcfa3e7b61cffe0e2d182804f_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/5/21136495/9189886080e6390199708c66ee77671e_o2_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/0/21231870/730b3df20d249f0b5ff54008e20d433a_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/chains/9/58349/9d0f9d14689815385ac91fde39ddd137_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/9/18874059/0d073b795fe081ad09dbac6c85992f32_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/8/19639188/e99f90bae9151e73484669453e118638_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/7/19672427/912a540388fb00afbc2495c01a6a6a03_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/9/52459/0555075aa40d8833e7628cd7968be520_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/9/21007569/0d99980ce889f3dff4d332ceab150d60_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/chains/9/51039/b35c126e7d10cdaaf7c3b27236b62654_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/1/21131431/20cf6d7a2c0b9a99db9ec5f7f7714175_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/7/55907/4e1cbc184f6686919a4597a1f77ba2fb_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/3/52053/db5a8ff5c508f40484a2177bdf6621e6_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/5/51705/4435124b77f1454e32e24f54c101bbda_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/8/20628188/edf9fd4cae26698aec51a5791412126b_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/0/20980240/ef47fe2ed2a5ddcd55be547ba8fcba14_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/9/21298169/66770a429d286e3b683f9e05520f0dbf_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/chains/3/19122613/d52a2cca1a27074a750cc137ae66df9f_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/2/19274142/63b5af6db2b63889ff61054ba7bc2963_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/2/21020882/03c88f5e438c486dd7d90be442c75fe1_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/7/57177/3069990453e4230b4ad40f778c7cdc46_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/2/20996342/6ed423a87cdee3c252432828f48b3b43_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/5/20478855/abc31a06b285fbfc17410539b27e6fa8_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/4/19152894/3eb302ab28a021bfaa2bdeae94c71daa_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/8/19319818/26b6b87aef54219485c5f500338252da_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/4/21435634/7729dfadabc2275a7dd28561bb0bd10e_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/0/20540040/212506e1d8f38dd0d9697ce408faaacf_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/9/18651459/4a30b04cd4ea60dfd841ce376ffcb898_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/1/19032381/0a26c591d643c35f44b48c5cfb393a0a_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/chains/6/19032416/228dcfd79e8a26fc4b4c921caa875f84_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/3/20713503/9ec557e9ae99d4065d0ffba033675693_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/4/20942924/2192cb58e06cecd79d99fabb376ef75d_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/8/55768/d962767510039cc9af518462d899cb30_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/3/21543723/8acf754723b0a88beb50bdc1ce2b7b48_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/7/21318827/2a49bf0ad39f95a4062f606d151ea0e3_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/9/18733169/997007a31e0b3fb6fb1373770f66e7ef_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/2/21218452/fdec133b05dc2eb540cf196ff3514b89_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/4/18661094/fa0ec0e329e74712f5ee4da14e961306_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/9/18843699/faf2f290b7922522f989886af7750fd8_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/2/21353232/d271e8dc56d988b7fd1ea45713d34cab_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/1/20626791/7bafabdfd670d85e5bd4e8e96a2b3972_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/2/20801352/02cccfd62be4bf72e34b6486f912fd0b_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/9/18608099/27655946e850173bd1172406acfb5270_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/0/18613270/3258723f34de5334c2b05d9c996a5451_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/3/21227083/1a6a681385ea7d879d9b13b750adae16_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/5/18782265/ada2cab7e641447396fce5240c4b84da_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/3/18385443/29314bceebeae1a5701e245076de263d_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/0/20669940/63f06decab6708ced4e4476b62e4b2e7_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/chains/9/58239/fe0b30e277f232ff9efcf69e52fb964e_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/8/57138/ff9392b10d570c14308b3ab1eb656b18_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/7/50877/67b31049ff23728c5e2d154d2333abe6_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/9/20955989/4e3747335dec3d3278338ca401c5a4ff_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/chains/9/59139/25fa180c93a4e592ce9563607e84a0c5_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/2/51552/b35fdf1c1b0f13fc668efaea51c67921_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/2/21245002/0ed0897c4b5f221b4039c4caec8fa4c5_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/3/20657123/0c200864d0d99f38399f9ea9452e2a55_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/chains/4/19952254/18184094143b73af64b6d892b3a17b9f_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/3/56353/16bb1333eaa5cce7d933d882e4b07c67_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/8/18811668/5bb4f1dfee4b7eafaae4f8b6398d90c6_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/3/21209833/7dac68533527e55ae620fe12c979c129_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/7/21231307/51d160a16e0bca385f955abf7c148543_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/chains/4/54044/93bcd9ce363d0f6e98de86d26dc3f07a_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/8/18895688/f687c4b0b41e591e0e58ccbd796b4828_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/5/20619325/2508a10a20771ff68069e71b6bb5ea97_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/chains/3/50633/dcc3d218f00ce657fe0350a509aaf871_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/8/18706428/bfedecafe497d8f11d128e524789ce6e_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/8/18819918/9824c7c596ac73e88e7040b02ea04fba_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/6/18853706/bc8474dc1cf313f7469a29546daaac3f_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/2/50462/1b39c4665c00eb96f5bb4542ae0b1fe2_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/chains/7/18631077/7e62ba52c618781c36780173155b412a_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/1/20829551/510f9c7328ab0fda9220ecd5ccdbc880_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/8/19894188/770fe8836387a66deb631c8bfd6f9a73_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/4/20499504/ca0890f2402301fd0870d536d0da4e2e_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/7/52097/eab6f0182ff84881e68210d3f1bd98c9_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/0/20728380/feeff4f5d4f5312fa694d02bfc9d1463_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/5/50975/2269507710b2895cf68419f9830bd126_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/5/20801585/b335fc6ad582148e6b2586f6de57f6f5_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/0/20531530/06311b53105a8de3847d117eb5cb0907_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/5/21108895/cf87e22d1333d0783c222b83a718ec5f_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/chains/7/20968477/bb38fbf942832ad3eedf3a0b94a39148_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/8/19175898/a15da0fed3084fa8387f6035128e8af1_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/6/20957676/b329db11468d9d7f6ec97905aedd5648_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/1/21090391/3dc1900e177e08aa8c9e287c0bef3ea4_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/2/20794452/12e55cf6fbdc0eed59777b99495ca18e_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/6/18967286/e4f54465b6b1323461f6022d1fd0bfed_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/chains/8/56618/063c12aaaf09a1c62b64a198309f6707_featured_v2.jpg',
  'https://b.zmtcdn.com/data/pictures/9/20385689/c8e7a9420e909d2bc8412f02426fae01_featured_v2.jpg',
];

const restaurantNames = [
  'The Gourmet Spot',
  'Spice Symphony',
  "Ocean's Bounty",
  'The Cozy Plate',
  'Flavor Junction',
  'Pasta Paradise',
  'The Steak Haven',
  'Sushi Kingdom',
  'Taco Fiesta',
  'Burger Bliss',
  'The Curry Corner',
  'Grill & Chill',
  'Pancake House',
  'Pizza Perfection',
  'The Salad Bowl',
  'Street Bites',
  'Bistro Bella',
  'Harvest Table',
  'Fusion Flavors',
  'Seaside Diner',
  'The Elegant Table',
  'The Rustic Fork',
  'Smoky Delights',
  'The Veggie Place',
  'Coffee & Crumbs',
  'The Italian Oven',
  'Doughnut Dreams',
  'Lemon & Thyme',
  'The Urban Spoon',
  'Choco Bliss',
  'The Seafood Shack',
  'Royal Feast',
  'The Dessert Bar',
  'Vegan Valley',
  'Golden Wok',
  'Barbecue Junction',
  'Sweet Escape',
  'The Savory Skillet',
  'Noodle Nirvana',
  'Hot Pot Heaven',
  'The Local Pantry',
  'Tapas Treats',
  'The Breakfast Nook',
  'Grill Masters',
  "Chef's Choice",
  'The Sushi Bar',
  'Pasta Lovers',
  'The Burger Joint',
  'The Hungry Hippo',
  'Farm to Table',
  'Pizza Pros',
  'Sweet Tooth Cafe',
  'The Big Bite',
  'Spice and Dice',
  'Cupcake Heaven',
  'The Sandwich Stop',
  'The Dining Room',
  'Flavor Feast',
  'Urban Bites',
  'Hot Plate Express',
  'Casual Cravings',
  'The Tasty Spot',
  'The Artisan Table',
  'The Melting Pot',
  "Baker's Bliss",
  'Grill Kings',
  'Dessert Haven',
  'The Tea House',
  'The Daily Grind',
  'Sizzling Stone',
  'Spicy Affair',
  "The Chef's Table",
  'Bistro Bliss',
  'The Happy Plate',
  'Tandoori Time',
  'The Salad Bar',
  'Soup and Sandwich',
  'Urban Eats',
  'The Comfort Kitchen',
  'The Hungry Owl',
  'Pasta & More',
  'The Savory Spot',
  'The Spice Route',
  'Baked Bliss',
  'The Fresh Catch',
  'Taco Time',
  'Sushi Lovers',
  'Gourmet Bites',
  'Cupcake Corner',
  'Pancake Pantry',
  'The Curry Leaf',
  'The Food Hub',
  'Grill & Bar',
  'The Choco Lounge',
  'The Seafood Spot',
  'Vegan Eats',
  'The Rustic Spoon',
  'The Breakfast Club',
  'The BBQ Spot',
  'Wok This Way',
  'Café Delight',
  'The Bakery Bliss',
  'The Artisan Cafe',
  'Flavor Fusion',
  'The Sweet Treat',
  'Urban BBQ',
  'The Coffee Cup',
  'The Food Court',
  'Taco Town',
  'The Sushi Stop',
  'The Deli Spot',
  'Pasta Perfecto',
  'Spicy Delights',
  'The Dining Spot',
  'The Grill House',
  'Café Cravings',
  'The Curry Kitchen',
  'The Burger Palace',
  'Savory Sweets',
  'Gourmet Grub',
  'The Salad Shack',
  'Sweet Indulgence',
  'The Pizza Lounge',
  'Burger Bar',
  'Vegan Bistro',
  'Fusion Feast',
  'The Dessert Spot',
  'Cupcake Craze',
  'The Rustic Table',
  'Seafood Sensations',
  'The Urban Grill',
  'Taco Tequila',
  'Sushi Spot',
  'Grill & Chill',
  'The Curry Bowl',
  'The Tasty Treat',
  'Urban Café',
  'The Comfort Deli',
  'The Hungry Chef',
  'Pasta Bliss',
  'The Sizzling Grill',
  'The Tea Spot',
  'The Soup Station',
  'BBQ Bliss',
  'The Artisan Grille',
  'Sunset Diner',
  'Morning Muffins',
  'Golden Bowl',
  'Bistro Eleven',
  'Savory Street',
  'The Elegant Dish',
  'The Taco Trail',
  "Smokin' Hot",
  'Mango Tree Café',
  'The Spice Bazaar',
  'The Fresh Fork',
  'Pancake Parade',
  'Rustic Charm Café',
  'The Pita Pit',
  'Bistro Deluxe',
  'Gastronomy Galore',
  'The Urban Garden',
  'Taco Temple',
  'Waffle World',
  'The Grilled Cheese Stop',
  'BBQ Bonanza',
  'Midnight Munchies',
  'Pizza Passion',
  'The Snack Shack',
  'Pasta Pot',
  'Sushi Sensation',
  'Street Eats',
  'The Roast House',
  'The Daily Plate',
  'The Crispy Corner',
  'Soulful Spoons',
  'Curry Delight',
  'The Rustic Barn',
  'Pasta Nirvana',
  'The Gourmet Kitchen',
  'Seaside Treats',
  'Flavors Unplugged',
  'Savory Secrets',
  'The Flavor Spot',
  'Fusion & Spice',
  'Freshly Brewed',
  'Golden Grill',
  'Sweet Spices',
  'Zest & Zing',
  'Hot and Savory',
  'Sushi Stars',
  'Vegan Treasures',
  'The Foodies Corner',
  'Taco Bliss',
  'Sunset Grille',
  'Savory Fork',
  'The Dessert Delights',
  'Flavor Town',
  'The Bread Basket',
  'Grill Time',
  'Tandoor Nights',
  'The Cinnamon Spot',
  'The Urban Tiffin',
  'The Waffle Spot',
  'Gourmet Moments',
  'The Veggie Delight',
  'Fusion Tapas',
  'Cupcake Confections',
  'Souped Up Café',
  'Pizza & More',
  'The Breakfast Basket',
  'BBQ and Beyond',
  'The Rustic Café',
  'Coffee Bliss',
  'Street Food Fiesta',
  'Farmhouse Eats',
  'Taco Dreams',
  'Sweet Moments',
  'The Sizzle Spot',
  'Spice Junction',
  'Noodle Nest',
  'The Gourmet Bowl',
  'Flavor Cravings',
  'Savory & Sweet',
  'Gastronomy Delight',
  'The Dessert Room',
  'Urban Deli',
  'Fusion Kitchen',
  'Seafood Sensation',
  'Choco Fantasy',
  'Flavor Infusion',
  'Sweet Spot Café',
  'Pasta Fever',
  'The Bread Bar',
  'Golden Tastes',
  'Cupcake Haven',
  'Grill & Grind',
  'The Rustic Platter',
  'Soup Symphony',
  'Urban Flavors',
  'Sushi Temptations',
  'Farm Fresh Eats',
  'Golden Pancakes',
  'Taco Bliss Café',
  'Savory Gourmet',
  'Pasta Dreams',
  'The Sweet Retreat',
  'Hot Plate Kitchen',
  'BBQ Paradise',
  'Curry Kitchen',
  'Noodle Nook',
  'Gourmet Street Eats',
  'Sweet Delights',
  'Flavor Fiesta',
  'The Comfort Café',
  'Tandoor House',
  'The Artisan Eatery',
  'Sushi Delight',
  'Fusion Fare',
  'The Sizzle Spot',
];

const foodTypes = [
  'Italian',
  'Chinese',
  'Indian',
  'Mexican',
  'Thai',
  'Japanese',
  'Mediterranean',
  'American',
  'French',
  'Spanish',
  'Korean',
  'Vietnamese',
  'Greek',
  'Turkish',
  'Lebanese',
  'Caribbean',
  'German',
  'Brazilian',
  'Ethiopian',
  'Moroccan',
];

const foodPrices = [
  800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000,
  2100, 2200, 2300, 2400, 2500,
];

const restaurantLocationsBengaluru = [
  'MG Road',
  'Koramangala',
  'Indiranagar',
  'Whitefield',
  'Jayanagar',
  'HSR Layout',
  'Marathahalli',
  'JP Nagar',
  'Banashankari',
  'Malleshwaram',
  'Electronic City',
  'Basavanagudi',
  'Rajajinagar',
  'Hebbal',
  'Bellandur',
  'Sarjapur Road',
  'Domlur',
  'Frazer Town',
  'RT Nagar',
  'Yelahanka',
  'Kalyan Nagar',
  'Bannerghatta Road',
  'Banaswadi',
  'Ulsoor',
  'Vasanth Nagar',
  'Hennur',
  'Old Airport Road',
  'KR Puram',
  'BTM Layout',
  'Nagawara',
  'Richmond Town',
  'Lavelle Road',
  'Langford Town',
  'Cooke Town',
  'Kammanahalli',
  'Shivajinagar',
  'Sadashivanagar',
  'Hosur Road',
  'Anekal',
  'Kanakapura Road',
  'Chikpet',
  'KR Market',
  'Gandhinagar',
  'Basaveshwaranagar',
  'Seshadripuram',
  'Peenya',
  'Magadi Road',
  'Nagarbhavi',
  'Yeshwanthpur',
  'Sanjay Nagar',
  'Vidyaranyapura',
  'Chandapura',
  'Hulimavu',
  'Kengeri',
  'Chikkalasandra',
  'Kathriguppe',
  'Arekere',
  'Hosur Sarjapur Road Layout (HSR)',
  'Haralur Road',
  'Kadubeesanahalli',
  'Devanahalli',
  'Jakkur',
  'Bidadi',
  'Banerghatta Main Road',
  'Thanisandra',
  'Vijayanagar',
  'Wilson Garden',
  'Attibele',
  'Sarjapura',
  'Hosur',
  'Kumaraswamy Layout',
  'Munnekollal',
  'Horamavu',
  'Bagalur',
  'Begur',
  'Hegde Nagar',
  'Gottigere',
  'Doddanekkundi',
  'Varthur',
  'Singasandra',
  'Bommanahalli',
  'Dodda Banaswadi',
  'Lingarajapuram',
  'Kudlu Gate',
  'Carmelaram',
  'Hulimangala',
  'Kaikondrahalli',
  'Kothanur',
  'Konanakunte',
  'Choodasandra',
  'Agara',
  'JP Nagar Phase 7',
  'JP Nagar Phase 5',
  'JP Nagar Phase 8',
  'HSR Sector 1',
  'HSR Sector 2',
  'HSR Sector 3',
  'HSR Sector 4',
  'HSR Sector 5',
  'HSR Sector 6',
  'HSR Sector 7',
  'HSR Sector 8',
  'HSR Sector 9',
  'HSR Sector 10',
];

const offers = [0, 5, 10, 15, 20, 25, 30];

const restaurants = [];

for (let i = 0; i < 102; i++) {
  const obj = {};
  obj['image'] = restaurantImages[Math.floor(Math.random() * 102)];
  obj['name'] = restaurantNames[Math.floor(Math.random() * 300)];
  obj['rating'] = (Math.random() * 5 + 1).toFixed(1);
  obj['food_type'] = foodTypes[Math.floor(Math.random() * 20)];
  obj['Price_for_two'] = foodPrices[Math.floor(Math.random() * 18)];
  obj['location'] =
    restaurantLocationsBengaluru[Math.floor(Math.random() * 102)];
  obj['distance'] = (Math.random() * 10 + 1).toFixed(2);
  obj['offers'] = offers[Math.floor(Math.random() * 7)];
  obj['alcohol'] = Math.random() > 0.7;
  obj['restaurant_opening_time'] = Math.floor(Math.random() * 24);
  obj['restaurant_closing_time'] = (obj['restaurant_opening_time'] + 12) % 24;

  restaurants.push(obj);
}
