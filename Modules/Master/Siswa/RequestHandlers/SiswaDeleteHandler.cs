using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = PresensiSerenity.Master.SiswaRow;

namespace PresensiSerenity.Master
{
    public interface ISiswaDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class SiswaDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ISiswaDeleteHandler
    {
        public SiswaDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}