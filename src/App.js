import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IdeaCard from './components/IdeaCard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="">My Ideas</p>
        <IdeaCard idea='Statt Shades' desc='subscription service for sunglasses' ideaImage='https://kellyeyecenter.com/wp-content/uploads/2018/08/sunglasses.jpg'/>
        <IdeaCard idea='2' desc='idea two'/>
        <IdeaCard/>
        <IdeaCard/> 
      </div>
    );
  }
}

export default App;
