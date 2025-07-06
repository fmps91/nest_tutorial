import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { LoggerMiddleware } from "./logger/logger.middleware";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    controllers:[
        UserController
    ],
    providers:[
        UserService,
        PrismaService
    ]
})
export class UsersModule implements NestModule {
    configure(consumer: MiddlewareConsumer){
        consumer.apply(LoggerMiddleware).forRoutes(
            {path:"/users/user2",method:RequestMethod.GET}
        )
        //.apply(AuthMiddleware).forRoutes("users")
    }
}