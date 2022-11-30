import LandingPage from "./LandingPage/LandingPage";
import FindUS from "./find us/findus";
import Footer from "./footer/footer";
import Header from "./Header/Header";
import Bui from "./BUI/Bui";
import About from "./about/About";
import AboutUs from "./aboutus/aboutus";
function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage/>
      <AboutUs/>
      <About/>
      <Bui/>
      <FindUS/>
      <Footer/>
    </div>

  );
}

export default App;
