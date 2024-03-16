import Link from "next/link";

export default function LoginPage(){
    return(
        <section className="auth_section book_section">
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-4 offset-md-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="form_container">
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">ایمیل</label>
                                        <input type="email" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">رمز عبور</label>
                                        <input type="password" className="form-control" />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-auth">ورود</button>
                                </form>
                            </div>

                            <h6 className="mt-4">حساب ندارید ؟ 
                                <Link href="/auth/register" style={{color: "#e69c00"}}> ثبت نام کنید </Link>
                            </h6>
                        </div>
                    </div>

                    <hr />

                    <div className="card">
                        <div className="card-body">
                            <div className="form_container">
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">شماره موبایل</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-auth">ورود</button>
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