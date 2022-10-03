using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<PresensiSerenity.Master.JurusanRow>;
using MyRow = PresensiSerenity.Master.JurusanRow;

namespace PresensiSerenity.Master
{
    public interface IJurusanListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class JurusanListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IJurusanListHandler
    {
        public JurusanListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}