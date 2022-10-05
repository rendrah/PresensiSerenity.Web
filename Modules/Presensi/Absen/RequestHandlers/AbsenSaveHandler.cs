using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<PresensiSerenity.Presensi.AbsenRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = PresensiSerenity.Presensi.AbsenRow;

namespace PresensiSerenity.Presensi
{
    public interface IAbsenSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class AbsenSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IAbsenSaveHandler
    {
        public AbsenSaveHandler(IRequestContext context)
             : base(context)
        {
        }

        protected override void BeforeSave() 
        {
            base.BeforeSave();

            if (IsCreate)
            {
                Row.UserId = Int32.Parse(Context.User.GetIdentifier());
            }
        }
    }
}