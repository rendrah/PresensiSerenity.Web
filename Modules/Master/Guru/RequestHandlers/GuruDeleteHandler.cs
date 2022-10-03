using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = PresensiSerenity.Master.GuruRow;

namespace PresensiSerenity.Master
{
    public interface IGuruDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class GuruDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IGuruDeleteHandler
    {
        public GuruDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}