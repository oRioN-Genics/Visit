export const SelectTravelsList = [
    {
        id:1,
        title:'Just Me',
        desc:"A sole travels in exploration",
        icon:'✈︎',
        people:'1'
    },
    {
        id:2,
        title:'Couple',
        desc:"A romantic getaway for two",
        icon:'💕',
        people:'2 People'
    },
    {
        id:3,
        title:'Family',
        desc:"A memorable trip for the whole family",
        icon:'🏡',
        people:'3 to 5 People'
    },
    {
        id:4,
        title:'Friends',
        desc:"A fun-filled adventure with friends",
        icon:'🥂',
        people:'5 to 10 People'
    }
]

export const SelectBudgetStyles = [
    {
        id:1,
        title:'Cheap',
        desc:"Travel on a budget",
        icon:'💵'
    },
    {
        id:2,
        title:'Mid-Range',
        desc:"Travel in comfort",
        icon:'💰'
    },
    {
        id:3,
        title:'Luxury',
        desc:"Travel in style",
        icon:'🌟'
    }
]

export const AI_PROMPT = `Generate a detailed travel plan for location: {place}, for {duration} days for a {traveling_with} ({numOfPeople}) with a {budget} budget. 

1. Hotel List:
   - Hotel Name
   - Address
   - Price (per night)
   - Image URL
   - Geo Coordinates (latitude, longitude)
   - Rating
   - Description

2. Itinerary:
   - Place Name
   - Details (brief description of the place)
   - Image URL
   - Geo Coordinates (latitude, longitude)
   - Ticket Pricing (if applicable)
   - Time to Travel (between locations)
   - Best Time to Visit (month, season, or time of day)

Provide the output in **JSON format**.`;
