const koa = require('koa');
const json = require('koa-json'); //for json format
//for router
const KoaRouter = require('koa-router');
const port = 3000;
const app = new koa();
const router = new KoaRouter();

//Simple middleware example 
//ctx is for req and res in express js
//koa has a middleware koa-json
// koa have don't have inbuilt router  
app.use(json());
//app.use(async ctx => ctx.body = {Text: "Welcome to koa"}); 

router.get('/home', ctx => ctx.body = {Text: "Hello world"});

//read data only
//temp data stored in array
var data = [
    {
    id:1, name:"Sonu Yadav",
    },
    {
        id:2, name: "Kamal Singh"
    }
];

router.get('/', read);

//call ctx
async function read(ctx) {
    ctx.body = data
}

//router
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log('listening on port', port);
})