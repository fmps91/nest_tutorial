import { IsString,MinLength } from "class-validator";

export class User{
    
    @IsString()
    @MinLength(10)
    name?:String

    @IsString()
    pass?:String
}