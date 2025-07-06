import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { User } from "./dto/user.dto";
import { UserService } from "./user.service";

@Controller("/users")
export class UserController{


    constructor(
        private userService:UserService
    ){
    }

    @Get("/getAll")
    getAllUsers(){
        return this.userService.getUsers();
        
    }

    //como es un query
    @Get("/user2")
    getUser2(@Query() query:any){
        console.log("query: ",query)
        //console.log("query: ",query.limit)
        return this.userService.getUsers();
    }

    //como es un query
    @Get("/user1")
    getUser1(@Query() query:any){
        console.log("query: ",query)
        //console.log("query: ",query.limit)
        return this.userService.getUsers();
    }

    //como es un params
    @Get("/user/:id")
    getUser(@Param('id') id:any){
        console.log("param: ",id)
        return this.userService.findUser(id)
    }

    @Post("/user")
    saveUser(@Body() user:any){
        console.log("user: ",user)
        let userSave=new User();
        userSave.email=""+user.email
        userSave.name=""+user.name
        userSave.password=""+user.password
        return this.userService.saveUser(userSave);
    }

    @Put("/user")
    updateUser(){
        return this.userService.getUsers();
    }

    @Delete("/user")
    deleteUser(){
        return this.userService.getUsers();
    }

}