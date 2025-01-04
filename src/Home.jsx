import { React } from 'react';
import Navbar from './page/Navbar/Navbar';
import Bannar from './page/Bannar/Bannar';
import AboutMe from './page/AboutMe/AboutMe';
import Skills from './page/Skills/Skills';
import Education from './page/Education/Education';
import MyProjects from './page/MyProjects/MyProjects';
import Contact from './page/Contact/Contact';
import Footer from './page/Footer/Footer';
import { FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Home = () => {

  return (
    <div>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Bannar */}
      <div id='home'>
        <Bannar></Bannar>
      </div>
      {/* About me */}
      <div id='about'>
        <AboutMe></AboutMe>
      </div>
      {/* skill */}
      <div id='skills'>
        <Skills></Skills>
      </div>
      {/* education */}
      <div >
        <Education></Education>
      </div>
      {/* My project */}
      <div id='projects'>

        <MyProjects></MyProjects>
      </div>
      {/* contact me */}
      <div className='' id='contact'>
        <Contact></Contact>
      </div>
      <Link className='' to="home" smooth={true} duration={500}>
        <a className='text-white btn btn-outline absolute right-0 hover:bg-white/30'><FaArrowUp></FaArrowUp> </a>
      </Link>
      {/* Footer */}
      <Footer></Footer>

    </div>
  );
};

export default Home;
