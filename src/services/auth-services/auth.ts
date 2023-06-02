import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export type UserDto = {
   name: string
   email: string
   password: string
}
export function createUser (data : UserDto){
   return prisma.user.create({
      data:{
         name : data.name,
         email : data.email,
         password : data.password
      }
   })
}