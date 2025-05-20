import { IsString, MaxLength, MinLength } from "class-validator"

export class SignInDto {
   @IsString()
   username: string

   @IsString()
   @MinLength(3)
   @MaxLength(22)
   password: string
}
