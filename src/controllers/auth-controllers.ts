import { Request, Response, NextFunction } from "express";
import { UserDto, createUser } from "../services/auth-services/auth";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export function getLogin(req: Request, res: Response, next: NextFunction) {
  res.render("auth/login", {
    title: "Login",
    isLogin: true,
  });
}
export function getRegister(req: Request, res: Response, next: NextFunction) {
  res.render("auth/register", {
    title: "Register",
    isRegister: true,
  });
}
export function postLogin(req: Request, res: Response, next: NextFunction) {
  console.log(req.body);
  res.redirect("/");
}
// export async function postReegister( req: Request,res: Response,next: NextFunction) {
//   prisma.user.create({
//     data:{
//        name : req.body.name,
//        email : req.body.email,
//        password : req.body.password
//     }
// })
// .then(newUser  =>{
//   res.redirect('/login')
//   console.log(newUser);
  
// })
// }

export async function postRegister(req: Request, res: Response, next: NextFunction) {
  try {
        const body = req.body as UserDto
        await createUser(body)

        res.redirect('/login')
  } catch (error) {
        next(error)
  }
} 