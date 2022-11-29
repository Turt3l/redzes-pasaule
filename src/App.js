import LandingPage from "./LandingPage/LandingPage";
import FindUS from "./find us/findus";
import Footer from "./footer/footer";
import Header from "./Header/Header";
import Bui from "./BUI/Bui";
import About from "./about/About";
function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage/>
      <About/>
      <FindUS/>
      <Bui/>
      <Footer/>
    </div>

  );
}

export default App;
