import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { User } from "./user.entity"

@Injectable()
export class UserService {
   constructor(
      @InjectRepository(User)
      private userRepository: Repository<User>,
   ) {}

   async create(user: Partial<User>): Promise<User> {
      const newUser = this.userRepository.create(user)
      return await this.userRepository.save(newUser)
   }

   async findAll(): Promise<User[]> {
      return await this.userRepository.find()
   }

   async findOne(email: string): Promise<User | null> {
      return await this.userRepository.findOne({ where: { email } })
   }

   async findByEmail(email: string): Promise<User | null> {
      return await this.userRepository.findOne({ where: { email } })
   }

   async update(id: number, updateData: Partial<User>): Promise<User | null> {
      await this.userRepository.update(id, updateData)
      return this.findOne(id)
   }

   async delete(id: number): Promise<void> {
      await this.userRepository.delete(id)
   }
}
