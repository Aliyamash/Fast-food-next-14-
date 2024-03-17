import LoginForm from "@/components/auth/LoginFrom";



export default function LoginPage(){

 



    return(
        <section className="auth_section book_section">
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-4 offset-md-4">
                   <LoginForm />
                    <div className="card">
                        <div className="card-body">
                            <div className="form_container">
                                <form >
                                    <div className="mb-3">
                                        <label className="form-label">کد تایید</label>
                                        <input name="cellphone" type="text" className="form-control" />
                                    </div>
                                    {/* <SubmitButton title="ورود" style="btn btn-primary btn-auth" /> */}
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