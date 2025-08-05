import { Outlet } from "react-router";
import Navbar from "./../section/Navbar.jsx";
import Footer from "./../section/Footer.jsx";

function LayoutMain() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default LayoutMain;
