import {Request, Response, NextFunction } from "express";

export function getIndex (req:Request , res:Response , next: NextFunction){
  res.render('index',{
   title: "Shop uz"
  })
}
export function getMyProduct (req:Request , res:Response , next: NextFunction){
  res.render('products/products',{
   title: "Product",
   productOn:true
  })
}
export function getAddProduct (req:Request , res:Response , next: NextFunction){
  res.render('products/add',{
   title: "Add product",
   addOn :true
  })
}
export function getLogin (req:Request , res:Response , next: NextFunction){
  res.render('auth/login',{
   title: "Login",
   isLogin:true
  })
}
export function getRegister (req:Request , res:Response , next: NextFunction){
  res.render('auth/register',{
   title: "Register",
   isRegister:true
  })
}