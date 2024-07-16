import './App.css';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
const App = () => {

    useEffect(() => {
      Aos.init({
        // once: true,
        disable: 'mobile'
      });
    }, []);
  return (
    <div className='App'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
