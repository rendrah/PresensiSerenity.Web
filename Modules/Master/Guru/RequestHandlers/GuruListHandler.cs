using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<PresensiSerenity.Master.GuruRow>;
using MyRow = PresensiSerenity.Master.GuruRow;

namespace PresensiSerenity.Master
{
    public interface IGuruListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class GuruListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IGuruListHandler
    {
        public GuruListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}