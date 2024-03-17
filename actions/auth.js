"use server";


import { postFetch } from "@/utils/fetch";
import { handleError } from "@/utils/helper";
import { cookies } from "next/headers";

async function login(stateLogin , formData) {
  const cellphone = formData.get("cellphone");

  if (cellphone === '') {
    return {
      status: "error",
      message: "وارد کردن شماره موبایل الزامی است ",
    };
  }
  const pattern = /^(\+98|0)?9\d{9}$/;
  if(!pattern.test(cellphone)){
    return {
      status: "error",
      message: "فرمت شماره موبایل معتبر نیست ",
    };
  }

   const data = await postFetch("/auth/login", { cellphone });
   if (data.status === "success") {
    cookies().set({
      name: 'Login-token',
      value: data.data.login_token,
      path:'/',
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7 //   7 Day
    })
    console.log(data.data);
     return {
       status: data.status,
       message: "کد تایید با موفقیت برای شما ارسال شد",
    };
   } else {
     return {
    status: data.status,
      message: handleError(data.message),
     };
  }
}

export { login };
