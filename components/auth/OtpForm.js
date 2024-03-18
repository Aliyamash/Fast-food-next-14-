"use client";

import { useFormState } from "react-dom";
import SubmitButton from "@/components/SubmitButton";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { chekOtp } from "@/actions/auth";
import AuthContext from "@/context/AuthContext";
import { redirect } from "next/navigation";


export default function OtpForm() {
   const {LoginContext} = useContext(AuthContext)
  const [stateOtp, formActionLogin] = useFormState(chekOtp, {});
  useEffect(() => {
    toast(stateOtp?.message, { type: `${stateOtp?.status}` });
    if(stateOtp?.status === 'success'){
      LoginContext(stateOtp.user)
    }
  }, [stateOtp]);
  return (
    <div className="card-body">
      <div className="form_container">
        <form action={formActionLogin}>
          <div className="mb-3">
            <label className="form-label">کد تایید</label>
            <input name="otp" type="text" className="form-control" />
          </div>
          <SubmitButton title="ورود" style="btn btn-primary btn-auth" />
        </form>
      </div>
    </div>
  );
}
