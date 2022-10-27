import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import Dropdown from './components/dropdown';
import Interpreter from './components/Interpreter';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {DisplaySection,DisplayContent} from './components/Topic';
import {DisplayByTopic,DisplayByContent} from './components/ByTopic'
import { AttemptQuestion } from './components/Content';

function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path = '/' />
          <Route path = 'topic/:topicId' element = {<DisplayByTopic />}/>
          <Route path = 'section/:sectionId' element = {<DisplayContent />}/>
          <Route path = 'content' element = {<DisplayByContent />}/>
          <Route path = 'content/:contentId' element = {<AttemptQuestion />}/>
        </Routes>
      </Router>
    </>
  );
}



export default App;
