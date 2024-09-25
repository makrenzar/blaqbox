
import Home from "./components/Home/Home";
import HomeAbout from "./components/Home/HomeAbout";
// import HomePartners from "./components/Home/HomePartners";
import HomeServices from "./components/Home/HomeServices";
import NavigationBar from "./components/Home/NavigationBar";



function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Home></Home>
      <HomeAbout></HomeAbout>
      <HomeServices></HomeServices>
      {/* <HomePartners></HomePartners> */}
    </>
  );
}

export default App;
