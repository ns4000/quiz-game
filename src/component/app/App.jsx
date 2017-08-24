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
      leaderBoard:(localStorage.getItem("leaderBoard")!=null? JSON.parse(localStorage.getItem('leaderBoard')):[]),
      questionArr:[]
      }

      this.onStartgame=this.onStartgame.bind(this);
      this.quizFinished=this.quizFinished.bind(this);
      this.tryAgain=this.tryAgain.bind(this);
      this.newGame=this.newGame.bind(this);
    }

  onStartgame(user) {
    fetch('https://opentdb.com/api.php?amount=10&type=boolean&encode=url3986')
    .then((response)=>response.json())
    .then((json)=>{
    let questionArr=  json.results.map((e)=>{
        e.question= unescape(e.question);
        return e;
      });
      this.setState({user:user,page:"QuizPage",questionArr:questionArr});
    })
  }

  quizFinished(e){
    this.setState({score:e,page:"ScorePage"})

  }
  tryAgain(){
    this.setState({page:"QuizPage",score:0})
  }
  newGame(){
    this.setState({page:"LandingPage",score:0,user:""})
  }

  render() {
    let page = null;
    if(this.state.page==="LandingPage"){
      page = <LandingPage onStartgame={this.onStartgame}/> ;
    }else if (this.state.page==="QuizPage") {
      page = <QuizPage quizFinished={this.quizFinished}
        questionArr={this.state.questionArr} />

    }else if(this.state.page==="ScorePage"){
      page = <ScorePage
        user={this.state.user}
        score={this.state.score}
        leaderBoard={this.state.leaderBoard}
        tryAgain={this.tryAgain}
        newGame={this.newGame}/>

    }
    return (
      <div className='App'>
        {page}
      </div>
    );
  }
}

export default App;
