using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<PresensiSerenity.Master.KelasRow>;
using MyRow = PresensiSerenity.Master.KelasRow;

namespace PresensiSerenity.Master
{
    public interface IKelasListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class KelasListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IKelasListHandler
    {
        public KelasListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}