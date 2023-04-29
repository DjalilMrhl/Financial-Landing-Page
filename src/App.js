import React, { useState } from 'react'
import './App.scss';
import About from './components/about/about';
import Discover from './components/discover/discover';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import Menu from './components/menu/menu';
import Services from './components/services/services';
import SignUp from './components/sign-up/sign-up';

function App() {

  const [menu, setMenu] = useState(false)
  function showMenu() {
      setMenu(true)
  }
  function hideMenu() {
      setMenu(false)
  }

  return (
    <div className="App">
      <Header showMenu={showMenu}/>
      <Menu menu={menu} hideMenu={hideMenu}/>
      <Hero/>
      <About/>
      <Discover/>
      <Services/>
      <SignUp/>
      <Footer/>
    </div>
  );
}

export default App;
