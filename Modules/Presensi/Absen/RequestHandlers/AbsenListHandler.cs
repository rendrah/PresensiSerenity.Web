<<<<<<< HEAD
﻿using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<PresensiSerenity.Presensi.AbsenRow>;
using MyRow = PresensiSerenity.Presensi.AbsenRow;

namespace PresensiSerenity.Presensi
{
    public interface IAbsenListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class AbsenListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IAbsenListHandler
    {
        public AbsenListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
=======
﻿using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<PresensiSerenity.Presensi.AbsenRow>;
using MyRow = PresensiSerenity.Presensi.AbsenRow;

namespace PresensiSerenity.Presensi
{
    public interface IAbsenListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class AbsenListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IAbsenListHandler
    {
        public AbsenListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
>>>>>>> b219e455dd7dbb1ad2d6acbfed18512b83d3272b
}