import About from './components/About/About.jsx';
import NavigationBar from './components/Header/Navbar/Navbar.jsx';
import Service from './components/OurServices/Service.jsx';
import Counter from './components/Counter/Counter.jsx';
import RecentAct from './components/RecentActivity/RecentAct.jsx';

import './App.css'
import Footer from './components/Footer/Footer.jsx';
import Hero from './components/Header/Hero/Hero.jsx';


function App() {
  return (
    <div className='app'>
      <NavigationBar />
      <Hero />
      <About />
      <Service />
      <Counter />
      <RecentAct />
      <Footer />
    </div>
  );
}

export default App;
