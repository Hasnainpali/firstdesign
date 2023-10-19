import Banner from './components/Banner';
import Category from './components/Category';
import FeatureSectionbreakfast from './components/FeatureSectionbreakfast';
import FeatureSectionfruits from './components/FeatureSectionfruits';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Hero from './components/Hero';
import ApiFetch from './components/ApiFetch';


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Category/>
      <FeatureSectionfruits/>
      <FeatureSectionbreakfast/>
      <ApiFetch/>
      <Banner/>
      <Footer/>
    </>  
  );
}

export default App;
