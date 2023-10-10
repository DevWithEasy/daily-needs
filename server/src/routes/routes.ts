import { Application, Request, Response, Router } from "express"
import blogRouter from "./blogRoutes"
import commentRouter from "./commentRoutes"
import orderRouter from "./orderRoutes"
import productRouter from "./productRoutes"
import replyRouter from "./replyRoutes"
import userRouter from "./userRoutes"

type handlerType = (req : Request,res : Response) =>void;

const routes : {
    path : string,
    handler : Router | handlerType
}[] = [
    {
        path : '/api/user',
        handler : userRouter
    },
    {
        path : '/api/product',
        handler : productRouter
    },
    {
        path : '/api/blog',
        handler : blogRouter
    },
    {
        path : '/api/order',
        handler : orderRouter
    },
    {
        path : '/api/comment',
        handler : commentRouter
    },
    {
        path : '/api/reply',
        handler : replyRouter
    },
    {
        path : '/',
        handler : (req : Request,res : Response)=>{
            res.json({
                message : 'Server is running'
            })
        }
    },
]

const applyRouter=(app : Application)=>{
    routes.map(route=>{
        if(route.path === '/' ){
            app.get(route.path,route.handler)
        }else{
            app.use(route.path,route.handler)
        }
    })
}

export default applyRouter