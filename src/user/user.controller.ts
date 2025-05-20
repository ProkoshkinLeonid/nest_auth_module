import { Request } from "express"
import { Controller, Get, Req, UseGuards } from "@nestjs/common"
import { AuthGuard } from "../auth/auth.guard"
import { JwtService } from "@nestjs/jwt"
import { UserService } from "./user.service"
import { TokenDto } from "../auth/dto/token.dto"

@Controller("users")
export class UsersController {
   constructor(
      private jwtService: JwtService,
      private userService: UserService,
   ) {}

   @UseGuards(AuthGuard)
   @Get("profile")
   getProfile(@Req() req: Request) {
      const token = req.cookies["access_token"] as string
      const payload: TokenDto = this.jwtService.verify(token)

      return this.userService.findOneById(payload.id)
   }
}
