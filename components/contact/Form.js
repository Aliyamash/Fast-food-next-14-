"use client";

import { create } from "@/actions/contact";
import { useFormState } from "react-dom";
import SubmitButton from "../SubmitButton";
import { useEffect } from "react";
import { toast } from "react-toastify";



export default function Form() {
  const [state, formAction] = useFormState(create, {});
  useEffect(() => {
    toast(state?.message , {type: `${state?.status}`})

    // if(state?.status === 'error'){
    //     toast.error(state.message)
    // } else {
    //   toast.success(state.message)
    // }
  },[state])
  return (
    <form action={formAction}>
      <div>
        <input
          type="name"
          name="name"
          className="form-control"
          placeholder="نام و نام خانوادگی"
        />
      </div>
      <div>
        <input type="email" name="email" className="form-control" placeholder="ایمیل" />
      </div>
      <div>
        <input
          type="subject"
          name="subject"
          className="form-control"
          placeholder="موضوع پیام"
        />
      </div>
      <div>
        <textarea
          type="text"
          name="text"
          rows="10"
          style={{ height: "100px" }}
          className="form-control"
          placeholder="متن پیام"
        ></textarea>
      </div>
      <div className="btn_box">
        <SubmitButton title="ارسال پیام" />
      </div>
    </form>
  );
}
