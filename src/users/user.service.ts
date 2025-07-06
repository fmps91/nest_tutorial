import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { User } from "./dto/user.dto";

@Injectable()
export class UserService {

    constructor(private prisma: PrismaService) {}

    getUsers(){
        return this.prisma.user.findMany();
    }

    saveUser(user: User){
        return this.prisma.user.create({data:user})
    }

    findUser(id:any ){
        return this.prisma.user.findFirst
        (
            {            
                where: {
                    id: id,
                },
            }
        )
        //console.log(id)
         
    }

    /* users:any=[];
    getUsers(){
        return this.users;
    }

    saveUser(user: User){
        console.log(user)
        this.users.push({
            ...user,
            id:this.users.length+1
        });
        return user;
    }

    findUser(id:any ){
        //console.log(id)
        const userFound=this.users.find(user=> user.name==id)

        if (!userFound) {
            return new NotFoundException(`User ${id} not found`)
            
        }
        
        return 
    } */
}