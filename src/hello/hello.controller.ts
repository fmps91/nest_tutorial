import { Controller, Get, HttpCode, Param, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Request,Response } from "express";
import { AuthGuard } from './guards/auth/auth.guard';
import { UserPipe } from './pipes/user/user.pipe';

@Controller({})
export class HelloController {

    @Get("/")
    index(@Req() request:Request,@Res() response:Response){
        console.log(request.url)
        response.status(200).json({
            message:"ok",
            status:200
        })
    }

    @Get("notfound")
    @HttpCode(404)
    notFoundPage(){
        return "404 not found"
    }

    @Get("error")
    @HttpCode(500)
    errorPage(){
        return "Error Route!!"
    }

    @Get("tiket/:num")
    getTiket(@Param('num',ParseIntPipe) num:number){
        console.log(typeof num)
        return num+12
    }

    @Get('greet')
    greet(@Query(UserPipe) query: {name:string, pass:number}){
        console.log(typeof query.name)
        console.log(typeof query.pass)
        return `Hello ${query.name} is pass: ${query.pass}`
    }

    @Get('guard')
    @UseGuards(AuthGuard)
    guard(@Query(UserPipe) query: {name:string, pass:number}){
        console.log(typeof query.name)
        console.log(typeof query.pass)
        return `Hello ${query.name} is pass: ${query.pass}`
    }
}
