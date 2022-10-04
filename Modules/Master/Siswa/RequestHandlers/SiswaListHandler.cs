using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<PresensiSerenity.Master.SiswaRow>;
using MyRow = PresensiSerenity.Master.SiswaRow;

namespace PresensiSerenity.Master
{
    public interface ISiswaListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

    public class SiswaListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ISiswaListHandler
    {
        // private IUserRetrieveService UserRetriever { get; }
        // private static MyRow.RowFields fld { get { return MyRow.Fields; } }
        public SiswaListHandler(IRequestContext context)
             : base(context)
        {
            // UserRetriever = userRetriever ?? throw new ArgumentNullException(nameof(userRetriever));
        }
    }


    // protected override void ApplyFilters(SqlQuery query)
    // {
    //     base.ApplyFilters(query);

    //     UserDefinition user = User.GetUserDefinition<UserDefinition>(UserRetriever);
    //     query.Where(fld.UserId == user.UserId);
    // }
}