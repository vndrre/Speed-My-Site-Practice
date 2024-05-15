import './App.css';
import About from './components/About';
import Clients from './components/Clients';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Nav from './components/Nav';
import Testimonials from './components/Testimonials';
import Works from './components/Works';

function App() {
  return (
    <div>
      <Nav/>
      <Landing/>
      <About/>
      <Clients/>
      <Works/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
