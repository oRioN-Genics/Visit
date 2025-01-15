using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace Visit
{
    public partial class ShowDetails_Window : Window
    {
        public ShowDetails_Window(List<UserTravelPlan> userTravelPlans)
        {
            InitializeComponent();
            SetData(userTravelPlans);
        }

        private void SetData(List<UserTravelPlan> userTravelPlans)
        {
            if (userTravelPlans == null) return;

            var displayData = new List<TravelPlanDisplay>();
            int index = 1;

            // Group travel plans by user
            foreach (var user in userTravelPlans)
            {
                // Iterate through each user's travel plans
                foreach (var plan in user.travelPlans)
                {
                    try
                    {
                        var tripData = JsonSerializer.Deserialize<JsonElement>(plan.trip);

                        // Add a new entry for each travel plan, including user data
                        displayData.Add(new TravelPlanDisplay
                        {
                            Index = index++,
                            Username = user.username,
                            Email = user.email,
                            Location = tripData.GetProperty("location").GetString() ?? "N/A",
                            Duration = tripData.GetProperty("duration").GetString() ?? "N/A",
                            Budget = tripData.GetProperty("budget").GetString() ?? "N/A",
                            TravelingWith = plan.userSelection.traveling_with.title,
                            TravelId = plan._id
                        });
                    }
                    catch
                    {
                        // Handle any parsing issues
                        displayData.Add(new TravelPlanDisplay
                        {
                            Index = index++,
                            Username = user.username,
                            Email = user.email,
                            Location = "Error parsing location",
                            Duration = "N/A",
                            Budget = "N/A",
                            TravelingWith = plan.userSelection.traveling_with.title,
                            TravelId = "N/A"
                        });
                    }
                }
            }

            // Set the DataGrid's ItemsSource to display the grouped data
            UsersDataGrid.ItemsSource = displayData;
        }

    }

    public class TravelPlanDisplay
    {
        public int Index { get; set; }
        public string Username { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Location { get; set; } = string.Empty;
        public string Duration { get; set; } = string.Empty;
        public string Budget { get; set; } = string.Empty;
        public string TravelingWith { get; set; } = string.Empty;
        public string TravelId { get; set; } = string.Empty;
    }
}
