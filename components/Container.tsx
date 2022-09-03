import { ReactNode } from "react";
import { Footer } from "./Footer";
import { NavBar } from "./Navbar";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <section className="flex flex-col min-h-screen ">
      <NavBar />

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </section>
  );
}
