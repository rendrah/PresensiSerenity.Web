using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<PresensiSerenity.Master.GuruRow>;
using MyRow = PresensiSerenity.Master.GuruRow;

namespace PresensiSerenity.Master
{
    public interface IGuruRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class GuruRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IGuruRetrieveHandler
    {
        public GuruRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}