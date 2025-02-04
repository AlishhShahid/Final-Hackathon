"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideHeaderFooter = pathname === '/login';

  return (
    <>
      {!hideHeaderFooter && <Navbar />}
      <main>{children}</main>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}


