using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<PresensiSerenity.Presensi.AbsenRow>;
using MyRow = PresensiSerenity.Presensi.AbsenRow;

namespace PresensiSerenity.Presensi
{
    public interface IAbsenListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class AbsenListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IAbsenListHandler
    {
        private IUserRetrieveService UserRetriever { get; }
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }
        public AbsenListHandler(IRequestContext context, IUserRetrieveService userRetriever)
             : base(context)
        {
            UserRetriever = userRetriever ?? throw new ArgumentNullException(nameof(userRetriever));
        }
        protected override void ApplyFilters(SqlQuery query)
        {
            base.ApplyFilters(query);
            if (Permissions.HasPermission("Siswa"))
            {
                UserDefinition user = User.GetUserDefinition<UserDefinition>(UserRetriever);
                query.Where(fld.UserId == user.UserId);    
            }
        }
    }
}