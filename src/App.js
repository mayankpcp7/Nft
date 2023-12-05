import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import Header from "./components/Header";
import Nftlooks from "./components/Nftlooks";
import Explore from "./components/Explore";
function App() {
  return (
    <>
      <Header />
      <Nftlooks />
      <Explore />
    </>
  );
}

export default App;
