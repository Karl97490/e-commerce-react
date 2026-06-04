import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Navbar />

      <main>
        <Sidebar />
        <Outlet />
      </main>

      <Footer />
    </>
  );
};
