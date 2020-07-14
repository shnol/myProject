import React from 'react';
import './App.css';
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <div className="body">
                <Route path="/dialogs" component={Dialogs}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
            <Nav/>
            <Footer/>
        </div>
    );
}

export default App;

