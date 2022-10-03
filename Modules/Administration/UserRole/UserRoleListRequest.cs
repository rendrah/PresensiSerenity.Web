using Serenity.Services;

namespace PresensiSerenity.Administration
{
    public class UserRoleListRequest : ServiceRequest
    {
        public int? UserID { get; set; }
    }
}