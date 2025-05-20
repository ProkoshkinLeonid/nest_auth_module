import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {
   @PrimaryGeneratedColumn()
   id: number

   @Column({ type: "varchar", length: 100 })
   name: string

   @Column({ unique: true })
   email: string

   @Column({ select: false })
   password: string

   @Column({ default: false })
   isActive: boolean

   @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
   createdAt: Date
}
