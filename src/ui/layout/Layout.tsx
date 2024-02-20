import Navbar from "../../component/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
        <Outlet />
      </header>

      <main className="flex-grow"> </main>

      <footer className="bg-black text-white p-5">
        <div className="container mx-auto text-center">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default Layout;
