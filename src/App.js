import React from 'react';
import Home from './components/Home';
import "./style/project.css";

import About from './components/About';
import Projects from './components/Project';
// import Header from './components/Header';
import Footer from './components/Footer';
// import Content from './components/Content';


const App = () => {
    return (
        <div className="container">
            <Home />
            <About />
            <Projects />
            <a href="https://www.kennyyip.com" target="_blank"><p className="my-copyright">Anshum Dwivedi &copy; 2024</p></a>
            <Footer />
        </div>
    );
};

export default App;