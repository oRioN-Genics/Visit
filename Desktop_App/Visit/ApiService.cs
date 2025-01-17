using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

public static class ApiService
{
    private static readonly HttpClient client = new HttpClient();

    static ApiService()
    {
        // Set the base address of your backend server
        client.BaseAddress = new Uri("http://localhost:5000");
        client.DefaultRequestHeaders.Add("Accept", "application/json");
    }


    public static async Task<string> SignInAsync(string username, string password)
    {
        var requestData = new
        {
            username,
            password
        };

        string json = JsonConvert.SerializeObject(requestData);
        HttpContent content = new StringContent(json, Encoding.UTF8, "application/json");

        HttpResponseMessage response = await client.PostAsync("/signin", content);
        string result = await response.Content.ReadAsStringAsync();

        if (response.IsSuccessStatusCode)
        {
            var responseData = JsonConvert.DeserializeObject<dynamic>(result);
            string token = responseData.token;
            client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);
            //return $"SignIn successful! Token: {token}";
            return token;
        }
        else
        {
            return $"Error: {result}";
        }
    }


    public static async Task<string> ViewTripAsync(string tripID)
    {
        HttpResponseMessage response = await client.GetAsync($"/view_trip/{tripID}");
        string result = await response.Content.ReadAsStringAsync();

        if (response.IsSuccessStatusCode)
        {
            return $"Trip Details: {result}";
        }
        else
        {
            return $"Error: {result}";
        }
    }

    public static async Task<string> GetUsersWithTravelPlansAsync()
    {
        try
        {
            HttpResponseMessage response = await client.GetAsync("/api/users-with-travel-plans");
            string result = await response.Content.ReadAsStringAsync();

            if (response.IsSuccessStatusCode)
            {
                return result; 
            }
            else
            {
                return $"Error: {result}";
            }
        }
        catch (Exception ex)
        {
            return $"Exception: {ex.Message}";
        }
    }


    public static async Task<string> DeleteTripAsync(string tripID)
    {
        try
        {
            HttpResponseMessage response = await client.DeleteAsync($"/api/travelPlans/{tripID}");
            string result = await response.Content.ReadAsStringAsync();

            if (response.IsSuccessStatusCode)
            {
                return "Travel plan deleted successfully!";
            }
            else
            {
                return $"Error: {result}";
            }
        }
        catch (Exception ex)
        {
            return $"Exception: {ex.Message}";
        }
    }

    public static async Task<string> ToggleBanStatusAsync(string userId)
    {
        try
        {
            HttpResponseMessage response = await client.PostAsync($"/api/users/{userId}/toggle-ban", null);

            string result = await response.Content.ReadAsStringAsync();

            if (response.IsSuccessStatusCode)
            {
                return $"User access status updated successfully.";
            }
            else
            {
                return $"Error: {result}";
            }
        }
        catch (Exception ex)
        {
            return $"Exception: {ex.Message}";
        }
    }

}
