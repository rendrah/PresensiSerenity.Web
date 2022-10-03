using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<PresensiSerenity.Master.KelasRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = PresensiSerenity.Master.KelasRow;

namespace PresensiSerenity.Master
{
    public interface IKelasSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class KelasSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IKelasSaveHandler
    {
        public KelasSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}