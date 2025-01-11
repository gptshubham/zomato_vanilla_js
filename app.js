const restaurants = [
  {
    image:
      'https://b.zmtcdn.com/data/pictures/6/21534976/54b09bca566c14a8fbc83ff189ba1b0f_featured_v2.jpg',
    name: 'Sushi Lovers',
    rating: '1.0',
    food_type: 'Mexican',
    Price_for_two: 1700,
    location: 'Bommanahalli',
    distance: '4.91',
    offers: 30,
    alcohol: true,
    restaurant_opening_time: 19,
    restaurant_closing_time: 7,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/2/19274142/63b5af6db2b63889ff61054ba7bc2963_featured_v2.jpg',
    name: 'The Sweet Retreat',
    rating: '3.7',
    food_type: 'Vietnamese',
    Price_for_two: 1300,
    location: 'Kathriguppe',
    distance: '3.51',
    offers: 15,
    alcohol: false,
    restaurant_opening_time: 12,
    restaurant_closing_time: 0,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/7/21318827/2a49bf0ad39f95a4062f606d151ea0e3_featured_v2.jpg',
    name: 'Flavor Infusion',
    rating: '4.9',
    food_type: 'Ethiopian',
    Price_for_two: 2300,
    location: 'HSR Sector 6',
    distance: '8.80',
    offers: 10,
    alcohol: true,
    restaurant_opening_time: 15,
    restaurant_closing_time: 3,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/5/50975/2269507710b2895cf68419f9830bd126_featured_v2.jpg',
    name: 'Zest & Zing',
    rating: '4.3',
    food_type: 'Brazilian',
    Price_for_two: 2200,
    location: 'Basavanagudi',
    distance: '5.99',
    offers: 0,
    alcohol: false,
    restaurant_opening_time: 10,
    restaurant_closing_time: 22,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/9/52459/0555075aa40d8833e7628cd7968be520_featured_v2.jpg',
    name: 'Sweet Delights',
    rating: '3.2',
    food_type: 'American',
    Price_for_two: 1400,
    location: 'Nagarbhavi',
    distance: '7.23',
    offers: 20,
    alcohol: false,
    restaurant_opening_time: 14,
    restaurant_closing_time: 2,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/2/21020882/03c88f5e438c486dd7d90be442c75fe1_featured_v2.jpg',
    name: 'Barbecue Junction',
    rating: '1.7',
    food_type: 'Turkish',
    Price_for_two: 2300,
    location: 'Sadashivanagar',
    distance: '8.77',
    offers: 0,
    alcohol: false,
    restaurant_opening_time: 19,
    restaurant_closing_time: 7,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/8/18706428/bfedecafe497d8f11d128e524789ce6e_featured_v2.jpg',
    name: 'Sunset Diner',
    rating: '3.3',
    food_type: 'Ethiopian',
    Price_for_two: 1600,
    location: 'Yeshwanthpur',
    distance: '1.72',
    offers: 20,
    alcohol: false,
    restaurant_opening_time: 15,
    restaurant_closing_time: 3,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/1/21083811/3661733d97c40a3d74c76304daac7c0b_featured_v2.jpg',
    name: 'Burger Bliss',
    rating: '2.3',
    food_type: 'Greek',
    Price_for_two: 1500,
    location: 'Carmelaram',
    distance: '1.07',
    offers: 10,
    alcohol: true,
    restaurant_opening_time: 10,
    restaurant_closing_time: 22,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/3/20657123/0c200864d0d99f38399f9ea9452e2a55_featured_v2.jpg',
    name: 'The Pizza Lounge',
    rating: '2.6',
    food_type: 'Mexican',
    Price_for_two: 900,
    location: 'Hosur',
    distance: '8.93',
    offers: 0,
    alcohol: false,
    restaurant_opening_time: 0,
    restaurant_closing_time: 12,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/chains/3/50413/6745611429c2cec01c1d5b46403c7701_featured_v2.jpg',
    rating: '1.1',
    food_type: 'American',
    Price_for_two: 2400,
    location: 'Hulimangala',
    distance: '10.72',
    offers: 30,
    alcohol: false,
    restaurant_opening_time: 9,
    restaurant_closing_time: 21,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/9/18874059/0d073b795fe081ad09dbac6c85992f32_featured_v2.jpg',
    name: 'Taco Tequila',
    rating: '4.3',
    food_type: 'Thai',
    Price_for_two: 2300,
    location: 'Lingarajapuram',
    distance: '3.60',
    offers: 10,
    alcohol: true,
    restaurant_opening_time: 13,
    restaurant_closing_time: 1,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/5/18782265/ada2cab7e641447396fce5240c4b84da_featured_v2.jpg',
    name: 'Taco Time',
    rating: '4.3',
    food_type: 'Mediterranean',
    Price_for_two: 2200,
    location: 'Yeshwanthpur',
    distance: '5.99',
    offers: 30,
    alcohol: true,
    restaurant_opening_time: 11,
    restaurant_closing_time: 23,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/chains/9/51039/b35c126e7d10cdaaf7c3b27236b62654_featured_v2.jpg',
    name: 'Mango Tree Café',
    rating: '2.0',
    food_type: 'Korean',
    Price_for_two: 1900,
    location: 'Sadashivanagar',
    distance: '8.24',
    offers: 20,
    alcohol: false,
    restaurant_opening_time: 17,
    restaurant_closing_time: 5,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/7/21231307/51d160a16e0bca385f955abf7c148543_featured_v2.jpg',
    name: 'Flavor Fusion',
    rating: '3.5',
    food_type: 'Brazilian',
    Price_for_two: 900,
    location: 'Hegde Nagar',
    distance: '10.55',
    offers: 0,
    alcohol: true,
    restaurant_opening_time: 4,
    restaurant_closing_time: 16,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/8/18422898/38e9fa2320df6b442e7315caa34d0b89_featured_v2.jpg',
    name: 'Midnight Munchies',
    rating: '4.9',
    food_type: 'Mexican',
    Price_for_two: 1600,
    location: 'Konanakunte',
    distance: '8.43',
    offers: 10,
    alcohol: false,
    restaurant_opening_time: 1,
    restaurant_closing_time: 13,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/1/20973911/9349036bcfa3e7b61cffe0e2d182804f_featured_v2.jpg',
    name: 'The Seafood Shack',
    rating: '1.2',
    food_type: 'Italian',
    Price_for_two: 1100,
    location: 'Vasanth Nagar',
    distance: '8.48',
    offers: 0,
    alcohol: false,
    restaurant_opening_time: 20,
    restaurant_closing_time: 8,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/7/55907/4e1cbc184f6686919a4597a1f77ba2fb_featured_v2.jpg',
    name: 'Wok This Way',
    rating: '1.2',
    food_type: 'Spanish',
    Price_for_two: 1900,
    location: 'Chandapura',
    distance: '1.03',
    offers: 10,
    alcohol: false,
    restaurant_opening_time: 9,
    restaurant_closing_time: 21,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/7/18586207/a60e5c7ed9e68d98cca887b612e0abee_featured_v2.jpg',
    name: 'Doughnut Dreams',
    rating: '3.6',
    food_type: 'Thai',
    Price_for_two: 1200,
    location: 'Lingarajapuram',
    distance: '10.17',
    offers: 20,
    alcohol: true,
    restaurant_opening_time: 7,
    restaurant_closing_time: 19,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/1/20973911/9349036bcfa3e7b61cffe0e2d182804f_featured_v2.jpg',
    name: 'The Artisan Cafe',
    rating: '5.3',
    food_type: 'Spanish',
    Price_for_two: 1700,
    location: 'JP Nagar Phase 7',
    distance: '8.77',
    offers: 20,
    alcohol: true,
    restaurant_opening_time: 11,
    restaurant_closing_time: 23,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/5/20619325/2508a10a20771ff68069e71b6bb5ea97_featured_v2.jpg',
    rating: '4.1',
    food_type: 'Brazilian',
    Price_for_two: 900,
    location: 'Kathriguppe',
    distance: '3.96',
    offers: 0,
    alcohol: false,
    restaurant_opening_time: 23,
    restaurant_closing_time: 11,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/2/20794452/12e55cf6fbdc0eed59777b99495ca18e_featured_v2.jpg',
    name: 'The Curry Corner',
    rating: '3.6',
    food_type: 'Italian',
    Price_for_two: 2200,
    location: 'Banaswadi',
    distance: '10.11',
    offers: 10,
    alcohol: false,
    restaurant_opening_time: 11,
    restaurant_closing_time: 23,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/5/20478855/abc31a06b285fbfc17410539b27e6fa8_featured_v2.jpg',
    name: 'The Gourmet Bowl',
    rating: '1.8',
    food_type: 'Lebanese',
    Price_for_two: 1400,
    location: 'Kaikondrahalli',
    distance: '1.76',
    offers: 0,
    alcohol: false,
    restaurant_opening_time: 23,
    restaurant_closing_time: 11,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/8/57138/ff9392b10d570c14308b3ab1eb656b18_featured_v2.jpg',
    name: 'Noodle Nest',
    rating: '1.7',
    food_type: 'Greek',
    Price_for_two: 800,
    location: 'Thanisandra',
    distance: '6.88',
    offers: 5,
    alcohol: true,
    restaurant_opening_time: 11,
    restaurant_closing_time: 23,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/5/20492965/2e308e0d566fef5196075715c960fa74_featured_v2.jpg',
    name: 'Bistro Eleven',
    rating: '3.1',
    food_type: 'Mediterranean',
    Price_for_two: 1400,
    location: 'Banaswadi',
    distance: '2.13',
    offers: 10,
    alcohol: true,
    restaurant_opening_time: 14,
    restaurant_closing_time: 2,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/1/19032381/0a26c591d643c35f44b48c5cfb393a0a_featured_v2.jpg',
    name: 'The Salad Shack',
    rating: '1.7',
    food_type: 'Lebanese',
    Price_for_two: 900,
    location: 'Richmond Town',
    distance: '9.14',
    offers: 25,
    alcohol: false,
    restaurant_opening_time: 21,
    restaurant_closing_time: 9,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/8/18819918/9824c7c596ac73e88e7040b02ea04fba_featured_v2.jpg',
    name: 'Sushi Delight',
    rating: '2.1',
    food_type: 'Greek',
    Price_for_two: 2300,
    location: 'Hosur Road',
    distance: '2.34',
    offers: 25,
    alcohol: false,
    restaurant_opening_time: 23,
    restaurant_closing_time: 11,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/8/20628188/edf9fd4cae26698aec51a5791412126b_featured_v2.jpg',
    rating: '5.3',
    food_type: 'Italian',
    Price_for_two: 2100,
    location: 'HSR Sector 3',
    distance: '5.10',
    offers: 25,
    alcohol: false,
    restaurant_opening_time: 20,
    restaurant_closing_time: 8,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/8/20930988/2a064933f8bdd261df8050594ab51c8b_featured_v2.jpg?output-format=webp',
    name: 'Grill & Chill',
    rating: '1.3',
    food_type: 'Ethiopian',
    Price_for_two: 1400,
    location: 'Yeshwanthpur',
    distance: '10.75',
    offers: 25,
    alcohol: false,
    restaurant_opening_time: 11,
    restaurant_closing_time: 23,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/9/18843699/faf2f290b7922522f989886af7750fd8_featured_v2.jpg',
    name: 'Waffle World',
    rating: '5.4',
    food_type: 'Mediterranean',
    Price_for_two: 2000,
    location: 'Hegde Nagar',
    distance: '9.28',
    offers: 5,
    alcohol: true,
    restaurant_opening_time: 10,
    restaurant_closing_time: 22,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/7/21514147/29562fbb68e44364d96f49eb5de858cb_featured_v2.jpg?output-format=webp',
    rating: '3.9',
    food_type: 'Mediterranean',
    Price_for_two: 1000,
    location: 'Hosur Sarjapur Road Layout (HSR)',
    distance: '8.39',
    offers: 0,
    alcohol: false,
    restaurant_opening_time: 3,
    restaurant_closing_time: 15,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/0/20669940/63f06decab6708ced4e4476b62e4b2e7_featured_v2.jpg',
    name: 'Soup and Sandwich',
    rating: '3.2',
    food_type: 'Thai',
    Price_for_two: 1800,
    location: 'Sadashivanagar',
    distance: '2.12',
    offers: 15,
    alcohol: true,
    restaurant_opening_time: 1,
    restaurant_closing_time: 13,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/9/20906629/bea6339ef5a358df8b15dacb5c6abede_featured_v2.jpg',
    name: 'The Savory Spot',
    rating: '4.7',
    food_type: 'Caribbean',
    Price_for_two: 900,
    location: 'Vasanth Nagar',
    distance: '7.76',
    offers: 25,
    alcohol: false,
    restaurant_opening_time: 23,
    restaurant_closing_time: 11,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/0/20980240/ef47fe2ed2a5ddcd55be547ba8fcba14_featured_v2.jpg',
    name: 'Soup Symphony',
    rating: '3.1',
    food_type: 'German',
    Price_for_two: 1400,
    location: 'Vijayanagar',
    distance: '6.09',
    offers: 25,
    alcohol: true,
    restaurant_opening_time: 4,
    restaurant_closing_time: 16,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/4/18661094/fa0ec0e329e74712f5ee4da14e961306_featured_v2.jpg',
    name: 'Taco Time',
    rating: '1.6',
    food_type: 'Korean',
    Price_for_two: 2400,
    location: 'Lingarajapuram',
    distance: '2.15',
    offers: 30,
    alcohol: false,
    restaurant_opening_time: 22,
    restaurant_closing_time: 10,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/8/18706428/bfedecafe497d8f11d128e524789ce6e_featured_v2.jpg',
    name: 'The Seafood Spot',
    rating: '5.8',
    food_type: 'American',
    Price_for_two: 1000,
    location: 'Lingarajapuram',
    distance: '8.34',
    offers: 10,
    alcohol: false,
    restaurant_opening_time: 7,
    restaurant_closing_time: 19,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/chains/9/51039/b35c126e7d10cdaaf7c3b27236b62654_featured_v2.jpg',
    name: 'Urban Flavors',
    rating: '4.0',
    food_type: 'Japanese',
    Price_for_two: 1600,
    location: 'HSR Sector 4',
    distance: '7.22',
    offers: 0,
    alcohol: false,
    restaurant_opening_time: 2,
    restaurant_closing_time: 14,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/4/20499504/ca0890f2402301fd0870d536d0da4e2e_featured_v2.jpg',
    name: 'The Pita Pit',
    rating: '3.8',
    food_type: 'Japanese',
    Price_for_two: 1300,
    location: 'HSR Sector 5',
    distance: '7.34',
    offers: 25,
    alcohol: false,
    restaurant_opening_time: 1,
    restaurant_closing_time: 13,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/9/21007569/0d99980ce889f3dff4d332ceab150d60_featured_v2.jpg',
    name: 'Pancake House',
    rating: '2.1',
    food_type: 'Caribbean',
    Price_for_two: 900,
    location: 'KR Puram',
    distance: '4.16',
    offers: 30,
    alcohol: false,
    restaurant_opening_time: 3,
    restaurant_closing_time: 15,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/0/20531530/06311b53105a8de3847d117eb5cb0907_featured_v2.jpg',
    name: 'Waffle World',
    rating: '2.7',
    food_type: 'Caribbean',
    Price_for_two: 900,
    location: 'Agara',
    distance: '7.92',
    offers: 15,
    alcohol: false,
    restaurant_opening_time: 11,
    restaurant_closing_time: 23,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/8/19894188/770fe8836387a66deb631c8bfd6f9a73_featured_v2.jpg',
    name: 'Taco Time',
    rating: '5.9',
    food_type: 'Mexican',
    Price_for_two: 1700,
    location: 'Magadi Road',
    distance: '9.70',
    offers: 20,
    alcohol: false,
    restaurant_opening_time: 13,
    restaurant_closing_time: 1,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/2/20996342/6ed423a87cdee3c252432828f48b3b43_featured_v2.jpg',
    name: 'Grill Time',
    rating: '3.5',
    food_type: 'Spanish',
    Price_for_two: 1100,
    location: 'Basaveshwaranagar',
    distance: '7.26',
    offers: 30,
    alcohol: false,
    restaurant_opening_time: 16,
    restaurant_closing_time: 4,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/9/20385689/c8e7a9420e909d2bc8412f02426fae01_featured_v2.jpg',
    name: 'The Crispy Corner',
    rating: '4.4',
    food_type: 'French',
    Price_for_two: 1900,
    location: 'Electronic City',
    distance: '10.47',
    offers: 15,
    alcohol: true,
    restaurant_opening_time: 0,
    restaurant_closing_time: 12,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/4/20790444/8f8f42f073040a4a247ce86447cf0746_featured_v2.jpg?output-format=webp',
    name: 'Sweet Delights',
    rating: '1.9',
    food_type: 'Turkish',
    Price_for_two: 1600,
    location: 'Chikpet',
    distance: '4.77',
    offers: 20,
    alcohol: false,
    restaurant_opening_time: 5,
    restaurant_closing_time: 17,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/8/21087448/9c1699e79de47a3b21d0f11859c6450e_featured_v2.jpg',
    name: 'Royal Feast',
    rating: '3.1',
    food_type: 'Italian',
    Price_for_two: 2200,
    location: 'Lingarajapuram',
    distance: '4.58',
    offers: 30,
    alcohol: true,
    restaurant_opening_time: 4,
    restaurant_closing_time: 16,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/8/19319818/26b6b87aef54219485c5f500338252da_featured_v2.jpg',
    name: 'The Big Bite',
    rating: '4.6',
    food_type: 'Caribbean',
    Price_for_two: 2100,
    location: 'Lingarajapuram',
    distance: '4.95',
    offers: 5,
    alcohol: false,
    restaurant_opening_time: 2,
    restaurant_closing_time: 14,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/5/21108895/cf87e22d1333d0783c222b83a718ec5f_featured_v2.jpg',
    name: 'Tandoor Nights',
    rating: '1.1',
    food_type: 'Mediterranean',
    Price_for_two: 1900,
    location: 'Rajajinagar',
    distance: '4.93',
    offers: 15,
    alcohol: true,
    restaurant_opening_time: 12,
    restaurant_closing_time: 0,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/2/21218452/fdec133b05dc2eb540cf196ff3514b89_featured_v2.jpg',
    name: 'Pasta Dreams',
    rating: '2.8',
    food_type: 'Japanese',
    Price_for_two: 1300,
    location: 'Chikkalasandra',
    distance: '6.66',
    offers: 25,
    alcohol: false,
    restaurant_opening_time: 0,
    restaurant_closing_time: 12,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/8/55768/d962767510039cc9af518462d899cb30_featured_v2.jpg',
    name: 'The Rustic Café',
    rating: '4.3',
    food_type: 'Indian',
    Price_for_two: 1900,
    location: 'Sadashivanagar',
    distance: '3.89',
    offers: 10,
    alcohol: true,
    restaurant_opening_time: 13,
    restaurant_closing_time: 1,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/7/50877/67b31049ff23728c5e2d154d2333abe6_featured_v2.jpg',
    name: 'Pasta Lovers',
    rating: '5.0',
    food_type: 'Spanish',
    Price_for_two: 2000,
    location: 'Arekere',
    distance: '6.28',
    offers: 25,
    alcohol: false,
    restaurant_opening_time: 16,
    restaurant_closing_time: 4,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/5/20801585/b335fc6ad582148e6b2586f6de57f6f5_featured_v2.jpg',
    name: 'Pasta Fever',
    rating: '1.8',
    food_type: 'Spanish',
    Price_for_two: 1200,
    location: 'Banashankari',
    distance: '4.90',
    offers: 30,
    alcohol: true,
    restaurant_opening_time: 8,
    restaurant_closing_time: 20,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/8/19175898/a15da0fed3084fa8387f6035128e8af1_featured_v2.jpg',
    name: 'The Steak Haven',
    rating: '2.5',
    food_type: 'Mediterranean',
    Price_for_two: 1000,
    location: 'Richmond Town',
    distance: '3.93',
    offers: 10,
    alcohol: false,
    restaurant_opening_time: 19,
    restaurant_closing_time: 7,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/chains/3/50633/dcc3d218f00ce657fe0350a509aaf871_featured_v2.jpg',
    name: 'Sushi Temptations',
    rating: '5.2',
    food_type: 'Ethiopian',
    Price_for_two: 1300,
    location: 'Gandhinagar',
    distance: '6.45',
    offers: 25,
    alcohol: false,
    restaurant_opening_time: 2,
    restaurant_closing_time: 14,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/0/21538950/69e5703bfb3ba293da514f2d7e1ced2b_featured_v2.jpg',
    name: 'Farmhouse Eats',
    rating: '5.4',
    food_type: 'Vietnamese',
    Price_for_two: 1900,
    location: 'Malleshwaram',
    distance: '4.42',
    offers: 25,
    alcohol: false,
    restaurant_opening_time: 0,
    restaurant_closing_time: 12,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/0/20669940/63f06decab6708ced4e4476b62e4b2e7_featured_v2.jpg',
    name: 'The Rustic Spoon',
    rating: '2.5',
    food_type: 'Vietnamese',
    Price_for_two: 2500,
    location: 'HSR Sector 1',
    distance: '2.69',
    offers: 20,
    alcohol: true,
    restaurant_opening_time: 15,
    restaurant_closing_time: 3,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/3/18385443/29314bceebeae1a5701e245076de263d_featured_v2.jpg',
    rating: '1.9',
    food_type: 'Greek',
    Price_for_two: 1500,
    location: 'Dodda Banaswadi',
    distance: '1.01',
    offers: 10,
    alcohol: false,
    restaurant_opening_time: 5,
    restaurant_closing_time: 17,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/9/21298169/66770a429d286e3b683f9e05520f0dbf_featured_v2.jpg',
    name: 'The Food Hub',
    rating: '2.8',
    food_type: 'Spanish',
    Price_for_two: 2500,
    location: 'Langford Town',
    distance: '4.85',
    offers: 30,
    alcohol: false,
    restaurant_opening_time: 5,
    restaurant_closing_time: 17,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/7/55907/4e1cbc184f6686919a4597a1f77ba2fb_featured_v2.jpg',
    name: 'Hot Plate Kitchen',
    rating: '1.8',
    food_type: 'Turkish',
    Price_for_two: 900,
    location: 'Seshadripuram',
    distance: '10.93',
    offers: 25,
    alcohol: false,
    restaurant_opening_time: 22,
    restaurant_closing_time: 10,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/9/20996449/76db63ab6cca59adc9f1fea4f7823b5a_featured_v2.jpg',
    name: 'The Crispy Corner',
    rating: '5.5',
    food_type: 'Mediterranean',
    Price_for_two: 2100,
    location: 'Chandapura',
    distance: '1.85',
    offers: 25,
    alcohol: true,
    restaurant_opening_time: 19,
    restaurant_closing_time: 7,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/2/21353232/d271e8dc56d988b7fd1ea45713d34cab_featured_v2.jpg',
    name: 'Burger Bliss',
    rating: '4.7',
    food_type: 'German',
    Price_for_two: 1400,
    location: 'Yeshwanthpur',
    distance: '1.85',
    offers: 0,
    alcohol: false,
    restaurant_opening_time: 13,
    restaurant_closing_time: 1,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/6/18967286/e4f54465b6b1323461f6022d1fd0bfed_featured_v2.jpg',
    name: 'The Artisan Cafe',
    rating: '2.5',
    food_type: 'Greek',
    Price_for_two: 2300,
    location: 'Kalyan Nagar',
    distance: '5.83',
    offers: 10,
    alcohol: false,
    restaurant_opening_time: 0,
    restaurant_closing_time: 12,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/9/21007569/0d99980ce889f3dff4d332ceab150d60_featured_v2.jpg',
    rating: '5.7',
    food_type: 'Turkish',
    Price_for_two: 800,
    location: 'Nagarbhavi',
    distance: '5.26',
    offers: 0,
    alcohol: false,
    restaurant_opening_time: 0,
    restaurant_closing_time: 12,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/4/20790444/8f8f42f073040a4a247ce86447cf0746_featured_v2.jpg?output-format=webp',
    rating: '1.3',
    food_type: 'Greek',
    Price_for_two: 2100,
    location: 'Electronic City',
    distance: '2.99',
    offers: 20,
    alcohol: false,
    restaurant_opening_time: 1,
    restaurant_closing_time: 13,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/5/51705/4435124b77f1454e32e24f54c101bbda_featured_v2.jpg',
    name: 'Gourmet Street Eats',
    rating: '2.1',
    food_type: 'German',
    Price_for_two: 1500,
    location: 'Kudlu Gate',
    distance: '7.77',
    offers: 20,
    alcohol: true,
    restaurant_opening_time: 11,
    restaurant_closing_time: 23,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/9/18608099/27655946e850173bd1172406acfb5270_featured_v2.jpg',
    name: 'Noodle Nest',
    rating: '3.7',
    food_type: 'Chinese',
    Price_for_two: 1700,
    location: 'Richmond Town',
    distance: '4.38',
    offers: 10,
    alcohol: false,
    restaurant_opening_time: 20,
    restaurant_closing_time: 8,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/4/20790444/8f8f42f073040a4a247ce86447cf0746_featured_v2.jpg?output-format=webp',
    name: 'The Breakfast Club',
    rating: '3.5',
    food_type: 'Indian',
    Price_for_two: 2400,
    location: 'Frazer Town',
    distance: '6.35',
    offers: 10,
    alcohol: true,
    restaurant_opening_time: 22,
    restaurant_closing_time: 10,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/6/20957676/b329db11468d9d7f6ec97905aedd5648_featured_v2.jpg',
    name: 'Casual Cravings',
    rating: '1.2',
    food_type: 'Indian',
    Price_for_two: 1400,
    location: 'JP Nagar',
    distance: '1.73',
    offers: 0,
    alcohol: false,
    restaurant_opening_time: 18,
    restaurant_closing_time: 6,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/chains/7/18631077/7e62ba52c618781c36780173155b412a_featured_v2.jpg',
    name: 'Savory Secrets',
    rating: '1.5',
    food_type: 'Korean',
    Price_for_two: 1300,
    location: 'Begur',
    distance: '4.64',
    offers: 5,
    alcohol: true,
    restaurant_opening_time: 11,
    restaurant_closing_time: 23,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/9/18874059/0d073b795fe081ad09dbac6c85992f32_featured_v2.jpg',
    name: 'Gastronomy Galore',
    rating: '4.4',
    food_type: 'Indian',
    Price_for_two: 1400,
    location: 'Kumaraswamy Layout',
    distance: '1.71',
    offers: 10,
    alcohol: false,
    restaurant_opening_time: 15,
    restaurant_closing_time: 3,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/6/18853706/bc8474dc1cf313f7469a29546daaac3f_featured_v2.jpg',
    name: 'BBQ Bonanza',
    rating: '1.9',
    food_type: 'Thai',
    Price_for_two: 2200,
    location: 'HSR Sector 8',
    distance: '8.57',
    offers: 5,
    alcohol: true,
    restaurant_opening_time: 13,
    restaurant_closing_time: 1,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/9/18843699/faf2f290b7922522f989886af7750fd8_featured_v2.jpg',
    name: 'The Pizza Lounge',
    rating: '2.5',
    food_type: 'Vietnamese',
    Price_for_two: 1000,
    location: 'Chikpet',
    distance: '9.82',
    offers: 5,
    alcohol: false,
    restaurant_opening_time: 7,
    restaurant_closing_time: 19,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/9/20955989/4e3747335dec3d3278338ca401c5a4ff_featured_v2.jpg',
    name: 'Pasta Bliss',
    rating: '5.1',
    food_type: 'Moroccan',
    Price_for_two: 1600,
    location: 'Konanakunte',
    distance: '7.09',
    offers: 5,
    alcohol: false,
    restaurant_opening_time: 0,
    restaurant_closing_time: 12,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/8/18819918/9824c7c596ac73e88e7040b02ea04fba_featured_v2.jpg',
    name: 'Bistro Bella',
    rating: '5.5',
    food_type: 'Indian',
    Price_for_two: 2400,
    location: 'Magadi Road',
    distance: '9.50',
    offers: 5,
    alcohol: false,
    restaurant_opening_time: 8,
    restaurant_closing_time: 20,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/8/19639188/e99f90bae9151e73484669453e118638_featured_v2.jpg',
    name: 'The Breakfast Basket',
    rating: '1.4',
    food_type: 'Chinese',
    Price_for_two: 1200,
    location: 'Nagawara',
    distance: '4.08',
    offers: 0,
    alcohol: true,
    restaurant_opening_time: 5,
    restaurant_closing_time: 17,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/3/52053/db5a8ff5c508f40484a2177bdf6621e6_featured_v2.jpg',
    name: 'Urban BBQ',
    rating: '3.2',
    food_type: 'German',
    Price_for_two: 1500,
    location: 'Banaswadi',
    distance: '5.90',
    offers: 20,
    alcohol: false,
    restaurant_opening_time: 15,
    restaurant_closing_time: 3,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/4/18661094/fa0ec0e329e74712f5ee4da14e961306_featured_v2.jpg',
    name: 'Taco Temple',
    rating: '2.8',
    food_type: 'Greek',
    Price_for_two: 2000,
    location: 'Haralur Road',
    distance: '1.56',
    offers: 10,
    alcohol: false,
    restaurant_opening_time: 2,
    restaurant_closing_time: 14,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/1/21090391/3dc1900e177e08aa8c9e287c0bef3ea4_featured_v2.jpg',
    name: 'Seaside Treats',
    rating: '5.3',
    food_type: 'Moroccan',
    Price_for_two: 800,
    location: 'Bidadi',
    distance: '4.56',
    offers: 0,
    alcohol: false,
    restaurant_opening_time: 10,
    restaurant_closing_time: 22,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/0/20728380/feeff4f5d4f5312fa694d02bfc9d1463_featured_v2.jpg',
    rating: '2.0',
    food_type: 'Spanish',
    Price_for_two: 1400,
    location: 'Chikkalasandra',
    distance: '9.16',
    offers: 30,
    alcohol: false,
    restaurant_opening_time: 9,
    restaurant_closing_time: 21,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/8/19319818/26b6b87aef54219485c5f500338252da_featured_v2.jpg',
    name: "Smokin' Hot",
    rating: '1.2',
    food_type: 'Korean',
    Price_for_two: 2200,
    location: 'Frazer Town',
    distance: '2.48',
    offers: 20,
    alcohol: false,
    restaurant_opening_time: 8,
    restaurant_closing_time: 20,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/4/20942924/2192cb58e06cecd79d99fabb376ef75d_featured_v2.jpg',
    name: 'The Soup Station',
    rating: '3.2',
    food_type: 'Chinese',
    Price_for_two: 2000,
    location: 'Dodda Banaswadi',
    distance: '4.30',
    offers: 30,
    alcohol: false,
    restaurant_opening_time: 5,
    restaurant_closing_time: 17,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/9/18843699/faf2f290b7922522f989886af7750fd8_featured_v2.jpg',
    name: 'Tandoor Nights',
    rating: '5.7',
    food_type: 'Indian',
    Price_for_two: 1900,
    location: 'Hosur Sarjapur Road Layout (HSR)',
    distance: '9.59',
    offers: 20,
    alcohol: false,
    restaurant_opening_time: 6,
    restaurant_closing_time: 18,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/chains/7/18631077/7e62ba52c618781c36780173155b412a_featured_v2.jpg',
    name: 'The BBQ Spot',
    rating: '1.8',
    food_type: 'Chinese',
    Price_for_two: 1100,
    location: 'Chikpet',
    distance: '4.24',
    offers: 5,
    alcohol: false,
    restaurant_opening_time: 7,
    restaurant_closing_time: 19,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/1/20626791/7bafabdfd670d85e5bd4e8e96a2b3972_featured_v2.jpg',
    rating: '2.6',
    food_type: 'Brazilian',
    Price_for_two: 1900,
    location: 'Kothanur',
    distance: '4.07',
    offers: 15,
    alcohol: true,
    restaurant_opening_time: 23,
    restaurant_closing_time: 11,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/1/20973911/9349036bcfa3e7b61cffe0e2d182804f_featured_v2.jpg',
    rating: '5.3',
    food_type: 'Italian',
    Price_for_two: 1500,
    location: 'JP Nagar Phase 8',
    distance: '1.10',
    offers: 30,
    alcohol: true,
    restaurant_opening_time: 15,
    restaurant_closing_time: 3,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/2/51552/b35fdf1c1b0f13fc668efaea51c67921_featured_v2.jpg',
    name: 'Urban Bites',
    rating: '4.5',
    food_type: 'French',
    Price_for_two: 1900,
    location: 'Old Airport Road',
    distance: '5.76',
    offers: 20,
    alcohol: false,
    restaurant_opening_time: 8,
    restaurant_closing_time: 20,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/0/20980240/ef47fe2ed2a5ddcd55be547ba8fcba14_featured_v2.jpg',
    name: 'Dessert Haven',
    rating: '2.0',
    food_type: 'Moroccan',
    Price_for_two: 1000,
    location: 'Vidyaranyapura',
    distance: '1.15',
    offers: 10,
    alcohol: true,
    restaurant_opening_time: 8,
    restaurant_closing_time: 20,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/8/18706428/bfedecafe497d8f11d128e524789ce6e_featured_v2.jpg',
    name: 'Burger Bliss',
    rating: '4.6',
    food_type: 'Greek',
    Price_for_two: 1000,
    location: 'Cooke Town',
    distance: '9.99',
    offers: 10,
    alcohol: false,
    restaurant_opening_time: 15,
    restaurant_closing_time: 3,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/4/19152894/3eb302ab28a021bfaa2bdeae94c71daa_featured_v2.jpg',
    name: 'Choco Fantasy',
    rating: '3.1',
    food_type: 'Greek',
    Price_for_two: 2400,
    location: 'Banashankari',
    distance: '2.94',
    offers: 15,
    alcohol: false,
    restaurant_opening_time: 6,
    restaurant_closing_time: 18,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/3/18385443/29314bceebeae1a5701e245076de263d_featured_v2.jpg',
    name: 'The Hungry Hippo',
    rating: '3.0',
    food_type: 'Vietnamese',
    Price_for_two: 2400,
    location: 'HSR Sector 7',
    distance: '5.48',
    offers: 20,
    alcohol: false,
    restaurant_opening_time: 21,
    restaurant_closing_time: 9,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/chains/4/54044/93bcd9ce363d0f6e98de86d26dc3f07a_featured_v2.jpg',
    name: 'Sushi Temptations',
    rating: '2.6',
    food_type: 'Mexican',
    Price_for_two: 1700,
    location: 'Basavanagudi',
    distance: '7.09',
    offers: 15,
    alcohol: false,
    restaurant_opening_time: 3,
    restaurant_closing_time: 15,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/3/56353/16bb1333eaa5cce7d933d882e4b07c67_featured_v2.jpg',
    name: 'Noodle Nook',
    rating: '2.7',
    food_type: 'Italian',
    Price_for_two: 2000,
    location: 'Arekere',
    distance: '9.48',
    offers: 25,
    alcohol: false,
    restaurant_opening_time: 19,
    restaurant_closing_time: 7,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/chains/6/19032416/228dcfd79e8a26fc4b4c921caa875f84_featured_v2.jpg',
    name: 'Sweet Delights',
    rating: '2.6',
    food_type: 'Greek',
    Price_for_two: 1200,
    location: 'Sarjapura',
    distance: '5.74',
    offers: 0,
    alcohol: true,
    restaurant_opening_time: 20,
    restaurant_closing_time: 8,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/9/20080559/bf0acabd97fcd26274399685ff102271_featured_v2.jpg?output-format=webp',
    name: 'Bistro Bella',
    rating: '5.4',
    food_type: 'Lebanese',
    Price_for_two: 1300,
    location: 'Anekal',
    distance: '6.90',
    offers: 25,
    alcohol: false,
    restaurant_opening_time: 10,
    restaurant_closing_time: 22,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/0/20540040/212506e1d8f38dd0d9697ce408faaacf_featured_v2.jpg',
    name: 'Taco Town',
    rating: '5.6',
    food_type: 'Indian',
    Price_for_two: 2200,
    location: 'HSR Layout',
    distance: '5.06',
    offers: 15,
    alcohol: false,
    restaurant_opening_time: 7,
    restaurant_closing_time: 19,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/1/20973911/9349036bcfa3e7b61cffe0e2d182804f_featured_v2.jpg',
    name: 'Savory & Sweet',
    rating: '2.8',
    food_type: 'Chinese',
    Price_for_two: 1700,
    location: 'MG Road',
    distance: '5.25',
    offers: 10,
    alcohol: false,
    restaurant_opening_time: 7,
    restaurant_closing_time: 19,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/chains/9/58349/9d0f9d14689815385ac91fde39ddd137_featured_v2.jpg',
    name: 'The Sizzling Grill',
    rating: '3.6',
    food_type: 'Japanese',
    Price_for_two: 1800,
    location: 'HSR Sector 3',
    distance: '4.48',
    offers: 10,
    alcohol: false,
    restaurant_opening_time: 2,
    restaurant_closing_time: 14,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/9/21298169/66770a429d286e3b683f9e05520f0dbf_featured_v2.jpg',
    rating: '5.5',
    food_type: 'Japanese',
    Price_for_two: 1300,
    location: 'Begur',
    distance: '7.87',
    offers: 20,
    alcohol: false,
    restaurant_opening_time: 17,
    restaurant_closing_time: 5,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/1/19032381/0a26c591d643c35f44b48c5cfb393a0a_featured_v2.jpg',
    name: 'The Foodies Corner',
    rating: '4.9',
    food_type: 'Spanish',
    Price_for_two: 2000,
    location: 'Shivajinagar',
    distance: '3.59',
    offers: 25,
    alcohol: false,
    restaurant_opening_time: 13,
    restaurant_closing_time: 1,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/2/21020882/03c88f5e438c486dd7d90be442c75fe1_featured_v2.jpg',
    name: 'The Cinnamon Spot',
    rating: '3.9',
    food_type: 'Korean',
    Price_for_two: 1100,
    location: 'Rajajinagar',
    distance: '2.55',
    offers: 15,
    alcohol: false,
    restaurant_opening_time: 2,
    restaurant_closing_time: 14,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/7/55907/4e1cbc184f6686919a4597a1f77ba2fb_featured_v2.jpg',
    name: 'Fusion Kitchen',
    rating: '3.5',
    food_type: 'Moroccan',
    Price_for_two: 1900,
    location: 'Hosur Road',
    distance: '4.65',
    offers: 30,
    alcohol: false,
    restaurant_opening_time: 0,
    restaurant_closing_time: 12,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/8/18706428/bfedecafe497d8f11d128e524789ce6e_featured_v2.jpg',
    name: 'The Choco Lounge',
    rating: '1.3',
    food_type: 'Caribbean',
    Price_for_two: 2300,
    location: 'Bellandur',
    distance: '5.88',
    offers: 15,
    alcohol: true,
    restaurant_opening_time: 22,
    restaurant_closing_time: 10,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/2/19274142/63b5af6db2b63889ff61054ba7bc2963_featured_v2.jpg',
    rating: '3.7',
    food_type: 'Japanese',
    Price_for_two: 2300,
    location: 'Langford Town',
    distance: '8.48',
    offers: 10,
    alcohol: true,
    restaurant_opening_time: 12,
    restaurant_closing_time: 0,
  },
  {
    image:
      'https://b.zmtcdn.com/data/pictures/0/21231870/730b3df20d249f0b5ff54008e20d433a_featured_v2.jpg',
    name: 'Sweet Indulgence',
    rating: '2.3',
    food_type: 'American',
    Price_for_two: 900,
    location: 'Lavelle Road',
    distance: '1.05',
    offers: 20,
    alcohol: true,
    restaurant_opening_time: 6,
    restaurant_closing_time: 18,
  },
];

// Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const sideNav = document.querySelector('.side-nav');
  const overlay = document.querySelector('.nav-overlay');
  const closeMenu = document.querySelector('.close-menu');

  function openMenu() {
    sideNav.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
  }

  function closeMenuHandler() {
    sideNav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
  }

  menuToggle.addEventListener('click', openMenu);
  closeMenu.addEventListener('click', closeMenuHandler);
  overlay.addEventListener('click', closeMenuHandler);

  // Close menu on escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sideNav.classList.contains('active')) {
      closeMenuHandler();
    }
  });

  // Handle window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 830 && sideNav.classList.contains('active')) {
      closeMenuHandler();
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider-container');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const slides = document.querySelectorAll('.slider-container .Box');

  let currentIndex = 0;
  let isTransitioning = false;

  function getSlidesToShow() {
    if (window.innerWidth <= 580) return 1;
    if (window.innerWidth <= 900) return 2;
    if (window.innerWidth <= 1200) return 3;
    return 4;
  }

  function getSlideWidth() {
    const box = slider.querySelector('.Box');
    if (!box) return 0;
    const styles = window.getComputedStyle(box);
    const marginRight = parseFloat(styles.marginRight) || 24; // Default gap
    return box.offsetWidth + marginRight;
  }

  function updateSliderPosition(animate = true) {
    if (!slider || slides.length === 0) return;

    const slidesToShow = getSlidesToShow();
    const slideWidth = getSlideWidth();

    // Ensure currentIndex doesn't exceed maximum possible value
    const maxIndex = Math.max(0, slides.length - slidesToShow);
    currentIndex = Math.min(currentIndex, maxIndex);
    currentIndex = Math.max(0, currentIndex);

    // Add/remove transition based on animate parameter
    slider.style.transition = animate ? 'transform 0.3s ease-in-out' : 'none';
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    // Update button states
    prevBtn.style.opacity = currentIndex === 0 ? '0' : '1';
    prevBtn.style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
    nextBtn.style.opacity = currentIndex >= maxIndex ? '0' : '1';
    nextBtn.style.visibility = currentIndex >= maxIndex ? 'hidden' : 'visible';
  }

  function handleSlideChange(direction) {
    if (isTransitioning) return;

    const slidesToShow = getSlidesToShow();
    const maxIndex = slides.length - slidesToShow;

    if (direction === 'prev' && currentIndex > 0) {
      isTransitioning = true;
      currentIndex--;
      updateSliderPosition();
    } else if (direction === 'next' && currentIndex < maxIndex) {
      isTransitioning = true;
      currentIndex++;
      updateSliderPosition();
    }
  }

  // Event Listeners
  prevBtn.addEventListener('click', () => handleSlideChange('prev'));
  nextBtn.addEventListener('click', () => handleSlideChange('next'));

  // Reset isTransitioning after transition ends
  slider.addEventListener('transitionend', () => {
    isTransitioning = false;
  });

  // Touch Events
  let touchStartX = 0;
  let touchEndX = 0;
  let isDragging = false;
  let startTranslate = 0;

  slider.addEventListener(
    'touchstart',
    (e) => {
      if (isTransitioning) return;
      isDragging = true;
      touchStartX = e.touches[0].clientX;
      startTranslate = -currentIndex * getSlideWidth();
      slider.style.transition = 'none';
    },
    { passive: true }
  );

  slider.addEventListener(
    'touchmove',
    (e) => {
      if (!isDragging) return;
      touchEndX = e.touches[0].clientX;
      const diff = touchEndX - touchStartX;
      const newTranslate = startTranslate + diff;

      // Limiting dragging beyond boundaries
      const maxTranslate = 0;
      const minTranslate =
        -(slides.length - getSlidesToShow()) * getSlideWidth();

      if (newTranslate <= maxTranslate && newTranslate >= minTranslate) {
        slider.style.transform = `translateX(${newTranslate}px)`;
      }
    },
    { passive: true }
  );

  slider.addEventListener('touchend', () => {
    if (!isDragging) return;
    isDragging = false;
    const touchDiff = touchStartX - touchEndX;

    slider.style.transition = 'transform 0.3s ease-in-out';

    if (Math.abs(touchDiff) > 50) {
      // Threshold for slide change
      if (touchDiff > 0) {
        handleSlideChange('next');
      } else {
        handleSlideChange('prev');
      }
    } else {
      // Return to current position if swipe wasn't strong enough
      updateSliderPosition();
    }
  });

  // resize handling
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const slidesToShow = getSlidesToShow();
      const maxIndex = slides.length - slidesToShow;

      // Adjust currentIndex if it exceeds new maxIndex
      if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
      }
      // Don't animate on resize
      updateSliderPosition(false);
    }, 250);
  });

  // Initial setup
  if (slides.length > 0) {
    updateSliderPosition(false);
  }
});

// Card Generation

const cardContainer = document.querySelector('#card-container');

function getRestaurant(restaurants) {
  restaurants.forEach((restaurant) => {
    // creating a card
    const card = document.createElement('div');
    card.className = 'card';

    // creating an image container
    const cardImageContainer = document.createElement('div');
    cardImageContainer.className = 'card_image_container';

    // creating an img element
    const cardImage = document.createElement('img');
    cardImage.src = `${restaurant.image}`;
    cardImage.className = 'image';

    // discount flex over the image
    const cardDiscount = document.createElement('div');
    cardDiscount.className = 'discount';
    if (restaurant.offers) {
      cardDiscount.innerHTML = `
    &#160;&#160;
    <img
    src="https://b.zmtcdn.com/data/o2_assets/c0e0fe766225fb9cdb3245a9915571201716296953.png"
    alt="percentage within circle"
    class="percentage"
    />
    <span>&#160;&#160;Flat ${restaurant.offers}% OFF</span>
    `;
    }

    cardImageContainer.append(cardImage, cardDiscount);

    // card details
    const cardDetails = document.createElement('div');
    cardDetails.className = 'card_details';

    // restaurant name and rating
    const nameAndRating = document.createElement('div');
    nameAndRating.className = 'restaurant';
    const restaurantName = document.createElement('span');
    restaurantName.className = 'restaurant_name';
    restaurantName.innerHTML = restaurant.name;
    const restaurantRating = document.createElement('span');
    restaurantRating.className = 'rating';
    restaurantRating.innerHTML = `${restaurant.rating}&#9733;`;
    nameAndRating.append(restaurantName, restaurantRating);

    // type of food offered and price
    const foodTypeAndPrice = document.createElement('div');
    foodTypeAndPrice.className = 'food';
    const foodType = document.createElement('span');
    foodType.innerHTML = restaurant.food_type;
    const price = document.createElement('span');
    price.innerHTML = `&#8377;${restaurant.Price_for_two}`;
    foodTypeAndPrice.append(foodType, price);

    // restaurant location and distance
    const locationAndDistance = document.createElement('div');
    locationAndDistance.className = 'location';
    const location = document.createElement('span');
    location.innerHTML = restaurant.location;
    const distance = document.createElement('span');
    distance.className = 'distance';
    distance.innerHTML = `${restaurant.distance}km`;
    locationAndDistance.append(location, distance);

    cardDetails.append(nameAndRating, foodTypeAndPrice, locationAndDistance);

    card.append(cardImageContainer, cardDetails);

    cardContainer.append(card);
  });
}

getRestaurant(restaurants);
