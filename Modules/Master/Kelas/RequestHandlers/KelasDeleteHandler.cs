using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = PresensiSerenity.Master.KelasRow;

namespace PresensiSerenity.Master
{
    public interface IKelasDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class KelasDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IKelasDeleteHandler
    {
        public KelasDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}