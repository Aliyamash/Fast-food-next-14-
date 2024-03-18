import Header from "@/components/layout/Header";
import "./globals.css";
import BootstrapClient from "@/components/libraries/Bootstrap";
import Toastify from "@/components/libraries/Toastify";
import Footer from "@/components/layout/Footer";
import NextNprogress from "@/components/libraries/NextNprogress";
import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body>
       <AuthProvider>

          <NextNprogress>
            <Header />
            {children}

            <Footer />
            <BootstrapClient />
            <Toastify />
          </NextNprogress>
</AuthProvider>
        
      </body>
    </html>
  );
}
