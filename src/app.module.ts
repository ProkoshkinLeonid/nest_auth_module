import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { ConfigModule } from "@nestjs/config"
import { AuthModule } from "./auth/auth.module"
import { UserModule } from "./user/user.module"
import { TypeOrmModule } from "@nestjs/typeorm"
import { User } from "./user/user.entity"

@Module({
   imports: [
      // TypeOrmModule.forRoot({
      //    type: "postgres", // или 'mysql'
      //    host: "localhost",
      //    port: 5432,
      //    username: "postgres",
      //    password: "your_password",
      //    database: "nest_db",
      //    entities: [User], // Подключаем сущности
      //    synchronize: true, // Автосоздание таблиц (только для разработки!)
      // }),
      ConfigModule.forRoot({
         envFilePath: [".env.development", ".env.production"],
      }),
      AuthModule,
      UserModule,
   ],
   controllers: [AppController],
   providers: [AppService],
})
export class AppModule {}
