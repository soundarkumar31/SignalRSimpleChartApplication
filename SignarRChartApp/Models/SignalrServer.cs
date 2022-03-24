using Microsoft.AspNet.SignalR.Hubs;
using Microsoft.AspNetCore.SignalR;

namespace SignarRChartApp.Models
{
    [HubName("SignalrServer")]
    public class SignalrServer : Hub
    {
        public string GetDetails(string name)
        {
            return "Hi " + name;
        }
    }
}
