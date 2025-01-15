using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net.Http;
using System.Text;
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
    /// <summary>
    /// Interaction logic for SignIn_Window.xaml
    /// </summary>
    public partial class SignIn_Window : Window
    {
        public SignIn_Window()
        {
            InitializeComponent();
        }

        private async void SignInButton_Click(object sender, RoutedEventArgs e)
        {
            const string adminUsername = "admin";
            const string adminPassword = "admin";

            string username = UsernameTextBox.Text.Trim();
            string password = PasswordBox.Password.Trim();

            if (username == adminUsername && password == adminPassword)
            {
                MessageBox.Show("Login successful!", 
                                "Success", 
                                MessageBoxButton.OK, 
                                MessageBoxImage.Information);

                SignInButton.IsEnabled = false;
                try
                {
                    string result = await ApiService.GetUsersWithTravelPlansAsync();

                    if (!string.IsNullOrWhiteSpace(result) && !result.StartsWith("Error"))
                    {
                        var userTravelPlans = Newtonsoft.Json.JsonConvert.DeserializeObject<List<UserTravelPlan>>(result);

                        ShowDetails_Window detailsWindow = new ShowDetails_Window(userTravelPlans);
                        detailsWindow.ShowDialog();
                    }
                    else
                    {
                        MessageBox.Show("Failed to fetch users and travel plans. Please check the server connection.",
                                        "Error",
                                        MessageBoxButton.OK,
                                        MessageBoxImage.Error);
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show($"An unexpected error occurred: {ex.Message}",
                                    "Error",
                                    MessageBoxButton.OK,
                                    MessageBoxImage.Error);
                }
                finally
                {
                    SignInButton.IsEnabled = true;

                    this.Close();
                }
            }
            else
            {
                MessageBox.Show("Invalid username or password.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

    }
}
