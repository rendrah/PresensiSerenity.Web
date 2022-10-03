using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<PresensiSerenity.Master.SiswaRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = PresensiSerenity.Master.SiswaRow;

namespace PresensiSerenity.Master
{
    public interface ISiswaSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class SiswaSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ISiswaSaveHandler
    {
        public SiswaSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}