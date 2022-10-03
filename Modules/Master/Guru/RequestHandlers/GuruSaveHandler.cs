using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<PresensiSerenity.Master.GuruRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = PresensiSerenity.Master.GuruRow;

namespace PresensiSerenity.Master
{
    public interface IGuruSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class GuruSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IGuruSaveHandler
    {
        public GuruSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}