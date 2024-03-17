"use client"


import { useFormState } from "react-dom";
import SubmitButton from "@/components/SubmitButton";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { login } from "@/actions/auth";


export default function LoginPage(){

    const [stateLogin, formActionLogin] = useFormState(login, {});
useEffect(() => {
  toast(stateLogin?.message , {type: `${stateLogin?.status}`})
},[stateLogin])



    return(
        <section className="auth_section book_section">
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-4 offset-md-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="form_container">
                                <form action={formActionLogin} >
                                    <div className="mb-3">
                                        <label className="form-label">شماره موبایل</label>
                                        <input name="cellphone" type="text" className="form-control" />
                                    </div>
                                    <SubmitButton title="ورود" style="btn btn-primary btn-auth" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}