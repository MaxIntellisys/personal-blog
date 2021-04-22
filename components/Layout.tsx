import React, { ReactNode } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
