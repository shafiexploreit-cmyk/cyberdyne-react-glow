import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import WhatsAppFAB from "./WhatsAppFAB";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
    <ScrollToTop />
    <WhatsAppFAB />
  </div>
);

export default Layout;
