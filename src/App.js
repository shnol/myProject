import React from 'react';
import './App.css';
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="App">
        <Header />
        <Profile />
        <Nav />
        <Footer />
    </div>
  );
}

export default App;

