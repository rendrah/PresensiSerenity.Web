using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<PresensiSerenity.Master.JurusanRow>;
using MyRow = PresensiSerenity.Master.JurusanRow;

namespace PresensiSerenity.Master
{
    public interface IJurusanRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class JurusanRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IJurusanRetrieveHandler
    {
        public JurusanRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}