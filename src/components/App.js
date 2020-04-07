import React from 'react';
import Header from './header/header';
import Weather from "./container/weather";
import Footer from "./footer/footer";


const App = () => {
  return(
    <div className="app">
      <div className="container">
        <Header />
        <Weather />
      </div>
      <Footer />
    </div>
  )
}

export default App;
