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

            foreach (var user in userTravelPlans)
            {
                foreach (var plan in user.travelPlans)
                {
                    try
                    {
                        var tripData = JsonSerializer.Deserialize<JsonElement>(plan.trip);

                        displayData.Add(new TravelPlanDisplay
                        {
                            Index = index++,
                            Username = user.username,
                            Email = user.email,
                            Location = tripData.GetProperty("location").GetString() ?? "N/A",
                            Duration = tripData.GetProperty("duration").GetString() ?? "N/A",
                            Budget = tripData.GetProperty("budget").GetString() ?? "N/A",
                            TravelingWith = plan.userSelection.traveling_with.title,
                            TravelId = plan._id,
                            UserId = plan.userId,
                            access_status = user.access_status,
                        });
                    }
                    catch
                    {
                        displayData.Add(new TravelPlanDisplay
                        {
                            Index = index++,
                            Username = user.username,
                            Email = user.email,
                            Location = "Error parsing location",
                            Duration = "N/A",
                            Budget = "N/A",
                            TravelingWith = plan.userSelection.traveling_with.title,
                            TravelId = "N/A",
                            UserId = plan.userId,
                            access_status = "N/A",
                        });
                    }
                }
            }
            UsersDataGrid.ItemsSource = displayData;
        }

        private async void Change_Access_Button_Click(object sender, RoutedEventArgs e)
        {
            if (UsersDataGrid.SelectedItem is TravelPlanDisplay selectedPlan)
            {
                try
                {
                    string userId = selectedPlan.UserId;

                    string result = await ApiService.ToggleBanStatusAsync(userId);
                    //refresh the datagrid
                    if (UsersDataGrid.ItemsSource is List<TravelPlanDisplay> displayData)
                    {
                        UsersDataGrid.Items.Refresh();
                    }


                    MessageBox.Show(result, "Success", MessageBoxButton.OK, MessageBoxImage.Information);
                }
                catch (Exception ex)
                {
                    MessageBox.Show($"An error occurred: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                }
            }
            else
            {
                MessageBox.Show("Please select a user from the DataGrid.", "Error", MessageBoxButton.OK, MessageBoxImage.Warning);
            }
        }


        private async void DeleteTripPlan_Button_Click(object sender, RoutedEventArgs e)
        {
            if (UsersDataGrid.SelectedItem is TravelPlanDisplay selectedPlan)
            {
                MessageBoxResult result = MessageBox.Show(
                    $"Are you sure you want to delete the travel plan with ID '{selectedPlan.TravelId}'?",
                    "Confirm Deletion",
                    MessageBoxButton.YesNo,
                    MessageBoxImage.Warning);

                if (result == MessageBoxResult.Yes)
                {
                    try
                    {
                        string responseMessage = await ApiService.DeleteTripAsync(selectedPlan.TravelId);

                        if (responseMessage.Contains("successfully"))
                        {
                            MessageBox.Show("Travel plan deleted successfully!", "Success", MessageBoxButton.OK, MessageBoxImage.Information);
                            
                            //refresh the datagrid
                            if (UsersDataGrid.ItemsSource is List<TravelPlanDisplay> displayData)
                            {
                                displayData.Remove(selectedPlan);
                                UsersDataGrid.Items.Refresh();
                            }
                        }
                        else
                        {
                            MessageBox.Show($"Failed to delete travel plan. Error: {responseMessage}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                        }
                    }
                    catch (Exception ex)
                    {
                        MessageBox.Show($"An error occurred: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                    }
                }
            }
            else
            {
                MessageBox.Show("Please select a travel plan to delete.", "No Selection", MessageBoxButton.OK, MessageBoxImage.Warning);
            }
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
        public string UserId { get; set; } = string.Empty;
        public string access_status { get; set; } = string.Empty;

    }
}
