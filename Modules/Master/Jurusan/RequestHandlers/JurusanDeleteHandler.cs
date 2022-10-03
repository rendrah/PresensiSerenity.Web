using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = PresensiSerenity.Master.JurusanRow;

namespace PresensiSerenity.Master
{
    public interface IJurusanDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class JurusanDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IJurusanDeleteHandler
    {
        public JurusanDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}