import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Marquee from "../components/Marquee";

export const metadata = {
  title: "TechBarred - Engineering for Tomorrow",
  description: "Engineering AI applications, automation, web platforms, cloud infrastructure, and custom integrations for businesses worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#ebebeb] text-black">
        <Header />
        <main>{children}</main>
        <Marquee />
        <Footer />
      </body>
    </html>
  );
}
