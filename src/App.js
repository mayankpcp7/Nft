import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nftlooks from "./components/Nftlooks";
import Explore from "./components/Explore";
import Comments from "./components/Comments";
import Community from "./components/Community";
import Latest from "./components/Latest";
import Upcomming from "./components/Upcomming";
import NftCategory from "./components/NftCategory";
import NftTab from "./components/NftTab";
import NftMarket from "./components/NftMarket";
import BackToTop from "./components/BackToTop";
import Preloader from "./components/Preloader";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
function App() {
   useEffect(() => {
     Aos.init({ once: true, disable: "mobile" });
     Aos.refresh();
   }, []);
  return (
    <>
      
      <div className="overflow-hidden">
        <Preloader/>
        <Header />
        <Nftlooks />
        <Explore />
        <NftMarket />
        <NftTab />
        <Upcomming />
        <Latest />
        <Community />
        <Comments />
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}

export default App;
