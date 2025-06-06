import { Injectable, UnauthorizedException } from "@nestjs/common"
import { UserService } from "../user/user.service"
import { JwtService } from "@nestjs/jwt"
import { TokenDto } from "./dto/token.dto"

@Injectable()
export class AuthService {
   constructor(
      private usersService: UserService,
      private jwtService: JwtService,
   ) {}

   async signIn(
      username: string,
      pass: string,
   ): Promise<{ access_token: string }> {
      const user = await this.usersService.findOne(username)
      if (user?.password !== pass) {
         throw new UnauthorizedException()
      }
      const payload: TokenDto = {
         email: user.email,
         username: user.name,
         id: user.id,
      }
      return {
         access_token: await this.jwtService.signAsync(payload),
      }
   }
}
