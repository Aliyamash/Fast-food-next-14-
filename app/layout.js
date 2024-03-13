import Header from "@/components/layout/Header";
import "./globals.css";
import BootstrapClient from "@/components/libraries/Bootstrap";
import Toastify from '@/components/libraries/Toastify'
import Footer from "@/components/layout/Footer";
import NextNprogress from "@/components/libraries/NextNprogress";
export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body>
        <NextNprogress> 

        <Header />
        {children}
        <Footer/>
        <BootstrapClient/>
        <Toastify/>
      
        </NextNprogress>
        </body>
    </html>
  );
}
