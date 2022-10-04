using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = PresensiSerenity.Presensi.AbsenRow;

namespace PresensiSerenity.Presensi
{
    public interface IAbsenDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class AbsenDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IAbsenDeleteHandler
    {
        public AbsenDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}