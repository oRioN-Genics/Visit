using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Visit
{
    public class UserTravelPlan
    {
        public string username { get; set; } = string.Empty;
        public string email { get; set; } = string.Empty;
        public List<TravelPlan> travelPlans { get; set; } = new List<TravelPlan>();
        public string access_status { get; set; } = string.Empty;
    }

    public class TravelPlan
    {
        public string _id { get; set; } = string.Empty;
        public string userId { get; set; } = string.Empty;
        public string trip { get; set; } = string.Empty;
        public UserSelection userSelection { get; set; } = new UserSelection();
    }

    public class UserSelection
    {
        public Place place { get; set; } = new Place();
        public string duration { get; set; } = string.Empty;
        public string budget { get; set; } = string.Empty;
        public TravelingWith traveling_with { get; set; } = new TravelingWith();
    }

    public class Place
    {
        public string label { get; set; } = string.Empty;
    }

    public class TravelingWith
    {
        public string title { get; set; } = string.Empty;
        public string people { get; set; } = string.Empty;
    }
}