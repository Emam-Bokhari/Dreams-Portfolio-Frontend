import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Fragment, ReactNode } from "react";

type CommonLayoutProps = {
  children: ReactNode;
};

export default function CommonLayout({ children }: CommonLayoutProps) {
  return (
    <Fragment>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </Fragment>
  );
}
