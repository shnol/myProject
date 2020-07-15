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

const App = (props) => {
    return (
        <div className="App">
            <Header/>
            <div className="body">
                <Route path="/dialogs" render={ () => <Dialogs postsdata={props.state.postsdata} usersname={props.state.usersname}/>}/>
                <Route path="/profile" render={ () => <Profile posts={props.state.posts}/>}/>
                <Route path="/news" render={ () => <News />}/>
                <Route path="/music" render={ () => <Music />}/>
                <Route path="/settings" render={ () => <Settings />}/>
            </div>
            <Nav/>
            <Footer/>
        </div>
    );
}

export default App;

