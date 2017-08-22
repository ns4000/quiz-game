import React, { Component } from 'react';
import './App.css';

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

      this.onStartgame=this.onStartgame.bind(this);
      this.onHandleChange=this.handleChange.bind(this);
    }

  onStartgame(e) {
    this.setState({user:e,page:"QuizPage"});

    console.log(this.state.user);

  }

  handleChange(e){


  }


  componentDidMount(){

    // .getJASON('https://opentdb.com/api.php?amount=10&type=boolean')
    //   .done(function(resoponse){
    //     console.log(resoponse);
    //   });
  }

  render() {
    let page = null;
    if(this.state.page==="LandingPage"){
      page = <LandingPage onStartgame={this.onStartgame}/> ;
    }else if (this.state.page==="QuizPage") {
      page = <QuizPage />

    }else if(this.state.page==="ScorePage"){
      page = <ScorePage />

    }
    return (
      <div className='App'>
        {page}
      </div>
    );
  }
}

export default App;
