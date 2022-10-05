using Microsoft.AspNetCore.Mvc;
using Serenity.Data;
using Serenity.Services;
using System.Data;
using MyRepository = PresensiSerenity.Administration.Repositories.UserRepository;
using MyRow = PresensiSerenity.Administration.Entities.UserRow;

namespace PresensiSerenity.Administration.Endpoints
{
    [Route("Services/Administration/User/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class UserController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request, [FromServices] ISqlConnections sqlConnections)
        {
            return new MyRepository(Context, sqlConnections).Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request,[FromServices] ISqlConnections sqlConnections)
        {
            return new MyRepository(Context, sqlConnections).Update(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request, [FromServices] ISqlConnections sqlConnections)
        {
            return new MyRepository(Context, sqlConnections).Delete(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public UndeleteResponse Undelete(IUnitOfWork uow, UndeleteRequest request, [FromServices] ISqlConnections sqlConnections)
        {
            return new MyRepository(Context,sqlConnections).Undelete(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request,[FromServices] ISqlConnections sqlConnections)
        {
            return new MyRepository(Context,sqlConnections).Retrieve(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request,[FromServices] ISqlConnections sqlConnections)
        {
            return new MyRepository(Context,sqlConnections).List(connection, request);
        }
       
        // public UserRepository(IRequestContext context, ISqlConnections sqlConn)
        //     : base(context)
        // {
        //     SqlConn = sqlConn;
        // }
        
        // [HttpPost, AuthorizeCreate(typeof(MyRow))]
        // public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request, [FromServices] ISqlConnections sqlConnections)
        // {
        //     return new MyRepository(Context, sqlConnections).Create(uow, request);
        // }
    }
}
