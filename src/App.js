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
function App() {
  return (
    <>
      <Header />
      <Nftlooks />
      <Explore />
      <Upcomming/>
      <Latest/>
      <Community />
      {/* <Comments /> */}
      <Footer />
    </>
  );
}

export default App;
