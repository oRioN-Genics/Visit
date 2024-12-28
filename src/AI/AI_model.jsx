const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = import.meta.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
    systemInstruction: "Generate Travel Plan for Location: Las Vegas, for 3 Days for a Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image URL, geo coordinates, rating, descriptions, and suggest itinerary with placeName, Place Details, Place Image URL, Geo Coordinates, ticket Pricing, Time to travel each of the location for 3 days with each day plan with best time to visit in JSON format.\n",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

export const chatSession = model.startChat({
    generationConfig,
    history: [
    {
        role: "user",
        parts: [
        {text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for a Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image URL, geo coordinates, rating, descriptions, and suggest itinerary with placeName, Place Details, Place Image URL, Geo Coordinates, ticket Pricing, Time to travel each of the location for 3 days with each day plan with best time to visit in JSON format."},
        ],
    },
    {
        role: "model",
        parts: [
        {text: "```json\n{\n  \"tripDetails\": {\n    \"location\": \"Las Vegas\",\n    \"duration\": \"3 Days\",\n    \"travelers\": \"Couple\",\n    \"budget\": \"Cheap\"\n  },\n  \"hotelOptions\": [\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"hotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"$40-$80 per night\",\n       \"hotelImageURL\": \"https://media-cdn.tripadvisor.com/media/photo-s/1b/0f/6b/8e/circus-circus-hotel-casino.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1286,\n        \"longitude\": -115.1671\n      },\n      \"rating\": 3.5,\n      \"description\": \"A classic Vegas hotel with a circus theme, offering affordable rooms, a casino, and free circus acts. It's a bit dated but good for budget travelers.\"\n    },\n    {\n      \"hotelName\": \"Excalibur Hotel & Casino\",\n      \"hotelAddress\": \"3850 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"$50-$90 per night\",\n      \"hotelImageURL\": \"https://media-cdn.tripadvisor.com/media/photo-s/1c/9e/6a/46/excalibur-hotel-casino.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.0983,\n        \"longitude\": -115.1741\n      },\n      \"rating\": 3.8,\n      \"description\": \"A medieval-themed hotel with affordable rooms, a casino, multiple pools, and dining options. Good for a fun and budget-friendly stay.\"\n    },\n      {\n      \"hotelName\": \"OYO Hotel & Casino Las Vegas\",\n      \"hotelAddress\": \"115 E Tropicana Ave, Las Vegas, NV 89109\",\n      \"price\": \"$35-$75 per night\",\n       \"hotelImageURL\":\"https://media-cdn.tripadvisor.com/media/photo-s/16/8f/80/3b/oyo-hotel-casino-las-vegas.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.0981,\n        \"longitude\": -115.1646\n      },\n      \"rating\": 3.2,\n      \"description\": \"A budget-friendly option located near the Strip, offering basic amenities and a casino. It's a good choice for travelers looking to save on accommodation.\"\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": {\n      \"bestTimeToVisit\": \"Morning/Afternoon\",\n      \"plan\": [\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"A pedestrian mall with a massive video screen canopy, offering free light shows and live music. Great for experiencing Old Vegas.\",\n           \"placeImageURL\": \"https://media-cdn.tripadvisor.com/media/photo-s/1b/2b/61/64/fremont-street-experience.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1700,\n            \"longitude\": -115.1410\n          },\n          \"ticketPricing\": \"Free\",\n            \"timeToTravel\": \"30 minutes from the Strip (by car or bus)\"\n\n        },\n        {\n          \"placeName\": \"Downtown Container Park\",\n          \"placeDetails\": \"An open-air shopping center made from shipping containers, featuring unique boutiques, art installations, and a playground. Fun for a casual stroll.\",\n          \"placeImageURL\": \"https://media-cdn.tripadvisor.com/media/photo-s/17/1f/58/35/container-park-at-downtown.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1696,\n            \"longitude\": -115.1397\n          },\n          \"ticketPricing\": \"Free\",\n           \"timeToTravel\": \"5 minutes walk from Fremont Street\"\n        },\n        {\n          \"placeName\": \"Bellagio Conservatory & Botanical Gardens\",\n           \"placeDetails\":\"Located within the Bellagio hotel, features elaborate floral displays that change with the seasons. Offers stunning visuals and free admission\",\n          \"placeImageURL\": \"https://media-cdn.tripadvisor.com/media/photo-s/1c/5f/5f/10/bellagio-conservatory-botanical.jpg\",\n          \"geoCoordinates\": {\n              \"latitude\":36.1128,\n              \"longitude\":-115.1738\n          },\n          \"ticketPricing\": \"Free\",\n          \"timeToTravel\": \"25 minutes from Downtown by Bus or car\"\n        }\n      ]\n    },\n    \"day2\": {\n      \"bestTimeToVisit\": \"Afternoon/Evening\",\n        \"plan\": [\n        {\n          \"placeName\": \"The LINQ Promenade\",\n          \"placeDetails\": \"An outdoor shopping and dining area with the High Roller observation wheel. Enjoy people-watching and street performers without spending a lot.\",\n          \"placeImageURL\": \"https://media-cdn.tripadvisor.com/media/photo-s/11/96/9f/90/the-linq-promenade.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1169,\n            \"longitude\": -115.1701\n          },\n          \"ticketPricing\": \"Free to walk around (High Roller tickets are extra)\",\n           \"timeToTravel\": \"10 Minutes by Bus or car from the Bellagio Conservatory\"\n         },\n        {\n          \"placeName\": \"The Strip (Walk)\",\n          \"placeDetails\": \"Walk the famous Las Vegas Strip, taking in the sights, sounds, and free attractions like the Bellagio fountains and volcano show at the Mirage.\",\n          \"placeImageURL\": \"https://media-cdn.tripadvisor.com/media/photo-s/1c/64/56/09/the-las-vegas-strip.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1080,\n            \"longitude\": -115.1734\n          },\n          \"ticketPricing\": \"Free\",\n          \"timeToTravel\": \"From LINQ Promenade, just walk south\"\n\n        },\n        {\n          \"placeName\": \"Mirage Volcano Show\",\n            \"placeDetails\": \" A free nightly show of fire and water erupting in front of the Mirage hotel. A classic Las Vegas spectacle.\",\n          \"placeImageURL\": \"https://media-cdn.tripadvisor.com/media/photo-s/1c/e0/7b/5f/the-mirage-volcano.jpg\",\n          \"geoCoordinates\": {\n              \"latitude\": 36.1209,\n              \"longitude\": -115.1732\n          },\n            \"ticketPricing\": \"Free\",\n           \"timeToTravel\": \"Walk north from The LINQ along the Strip\"\n         }\n      ]\n    },\n    \"day3\": {\n       \"bestTimeToVisit\": \"Morning/Afternoon\",\n      \"plan\": [\n        {\n          \"placeName\": \"Welcome to Fabulous Las Vegas Sign\",\n          \"placeDetails\": \"A classic photo opportunity at the iconic 'Welcome to Las Vegas' sign.\",\n          \"placeImageURL\": \"https://media-cdn.tripadvisor.com/media/photo-s/1c/3b/79/c8/welcome-to-fabulous-las.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.0828,\n            \"longitude\": -115.1712\n          },\n          \"ticketPricing\": \"Free\",\n           \"timeToTravel\": \"15 Minutes by Car or Bus from The Strip\"\n        },\n         {\n          \"placeName\": \"Red Rock Canyon National Conservation Area\",\n          \"placeDetails\": \"A scenic desert landscape just outside Las Vegas. Hike or enjoy a drive through the area. (Small fee to enter)\",\n          \"placeImageURL\": \"https://media-cdn.tripadvisor.com/media/photo-s/1a/4a/9a/67/red-rock-canyon-national.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1372,\n            \"longitude\": -115.4138\n          },\n            \"ticketPricing\":\"$15 per vehicle\",\n          \"timeToTravel\": \"30 minutes drive from Las Vegas Sign\"\n\n        }\n          ,\n       {\n          \"placeName\": \"Ethel M Chocolate Factory\",\n            \"placeDetails\": \"See the chocolate-making process and enjoy free samples. The botanical cactus garden is also a nice walk.\",\n          \"placeImageURL\":\"https://media-cdn.tripadvisor.com/media/photo-s/0b/97/f5/c2/ethel-m-chocolate-factory.jpg\",\n          \"geoCoordinates\": {\n              \"latitude\":36.0883,\n              \"longitude\":-115.0898\n            },\n           \"ticketPricing\": \"Free\",\n            \"timeToTravel\": \"25 minutes by car from Red Rock Canyon \"\n        }\n      ]\n    }\n  }\n}\n```"},
        ],
    },
    ],
});