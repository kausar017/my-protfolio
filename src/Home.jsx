import { React } from 'react';
import Navbar from './page/Navbar/Navbar';
import Bannar from './page/Bannar/Bannar';
import AboutMe from './page/AboutMe/AboutMe';
import Skills from './page/Skills/Skills';

const Home = () => {

  return (
    <div className="content">
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Bannar */}
      <div>
        <Bannar></Bannar>
      </div>
      {/* About me */}
      <AboutMe></AboutMe>
      {/* skill */}
      <Skills></Skills>
    </div>
  );
};

export default Home;
