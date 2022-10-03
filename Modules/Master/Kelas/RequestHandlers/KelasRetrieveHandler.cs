using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<PresensiSerenity.Master.KelasRow>;
using MyRow = PresensiSerenity.Master.KelasRow;

namespace PresensiSerenity.Master
{
    public interface IKelasRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class KelasRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IKelasRetrieveHandler
    {
        public KelasRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}