"use server";

import { postFetch } from "@/utils/fetch";
import { handleError } from "@/utils/helper";
import { cookies } from "next/headers";

async function login(stateLogin, formData) {
  const cellphone = formData.get("cellphone");

  if (cellphone === "") {
    return {
      status: "error",
      message: "وارد کردن شماره موبایل الزامی است ",
    };
  }
  const pattern = /^(\+98|0)?9\d{9}$/;
  if (!pattern.test(cellphone)) {
    return {
      status: "error",
      message: "فرمت شماره موبایل معتبر نیست ",
    };
  }

  const data = await postFetch("/auth/login", { cellphone });
  if (data.status === "success") {
    cookies().set({
      name: "Login_token",
      value: data.data.login_token,
      path: "/",
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7, //   7 Day
    });
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

async function chekOtp(stateOtp, formData) {
  const otp = formData.get("otp");

  if (otp === "") {
    return {
      status: "error",
      message: "کد تایید الزامی است",
    };
  }
  const pattern = /^[0-9]{6}$/;
  if (!pattern.test(otp)) {
    return {
      status: "error",
      message: "کد تایید معتبر نیست",
    };
  }

  const loginToken = cookies().get("Login_token");
  if (!loginToken) {
    return {
      status: "error",
      message: "توکن ورودی شما معتبر نیست دوباره امتحان کنید",
    };
  }

  const data = await postFetch("/auth/check-otp", {
    otp,
    login_token: loginToken.value,
  });
  if (data.status === "success") {
    cookies().delete("Login_token");
    cookies().set({
      name: "token",
      value: data.data.token,
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7, //   7 Day
    });
    return {
      status: data.status,
      message: "شما با موفقیت وارد شدید",
      user: data.data.user,
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}

async function me() {
  const token = cookies().get('token')
  if (!token) {
    return {
      error  : "not Authorized"
    };
  }
  const data = await postFetch("/auth/me", {} , { 'Authorization' : `Bearer ${token.value}`});
  if (data.status === "success") {
    return {
      user: data.data
    };
  } else {
    return {
    error : 'مشکل در دریافت اطلاعات'
    };
  }
}

export { login, chekOtp , me };
