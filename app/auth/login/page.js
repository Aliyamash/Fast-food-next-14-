import LoginForm from "@/components/auth/LoginFrom";
import OtpForm from "@/components/auth/OtpForm";

export default function LoginPage() {
  return (
    <section className="auth_section book_section">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4 offset-md-4">
            <div className="card">
                
              <LoginForm />

              <OtpForm />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
