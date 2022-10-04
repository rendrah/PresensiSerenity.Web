using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<PresensiSerenity.Presensi.AbsenRow>;
using MyRow = PresensiSerenity.Presensi.AbsenRow;

namespace PresensiSerenity.Presensi
{
    public interface IAbsenRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class AbsenRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IAbsenRetrieveHandler
    {
        public AbsenRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}