import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Container from "../components/Container/Container";

const Main = () => {
  return (
    <div className="font-Montserrat bg-gradient-to-tl from-[#322b4b] via-[#232033] to-[#191333] text-white">
      <Container>
        <Navbar />
        <div className="pt-20 min-h-[calc(100vh-68px)]">
          <Outlet />
        </div>
        <Footer />
      </Container>
    </div>
  );
};

export default Main;
