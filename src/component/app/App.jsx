import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import LandingPage from '../landingPage/LandingPage.jsx';
import ScorePage from '../scorePage/ScorePage.jsx';
import QuizPage from '../quizPage/QuizPage.jsx';



class App extends Component {

constructor(props){
  super(props);
    this.state = {
      user:'null',
      page:'LandingPage',
      score:0,
      leader_board:[{user:'',value:0}]
      }
    }

   onStartgame(){



  }
  componentDidMount(){

    axios.getJASON('https://opentdb.com/api.php?amount=10&type=boolean')
      .done(function(resoponse){
        console.log(resoponse);
      });
  }
  render() {
    return (
      <div className='App'>
        <ScorePage/>
      </div>
    );
  }
}

export default App;
