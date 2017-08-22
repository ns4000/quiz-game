import React from 'react';
import './QuizPage.css';


const  results= [
      {
        "category": "History",
        "type": "boolean",
        "difficulty": "easy",
        "question": "The Tiananmen Square protests of 1989 were held in Hong Kong.",
        "correct_answer": "False",
        "incorrect_answers": ["True"]
      }, {
        "category": "Geography",
        "type": "boolean",
        "difficulty": "easy",
        "question": "Vatican City is a country.",
        "correct_answer": "True",
        "incorrect_answers": ["False"]
      }, {
        "category": "Science: Mathematics",
        "type": "boolean",
        "difficulty": "easy",
        "question": "A universal set, or a set that contains all sets, exists.",
        "correct_answer": "False",
        "incorrect_answers": ["True"]
      }, {
        "category": "Science: Mathematics",
        "type": "boolean",
        "difficulty": "easy",
        "question": "The &#039;Squaring the Circle&#039; problem is solvable.",
        "correct_answer": "False",
        "incorrect_answers": ["True"]
      }, {
        "category": "Sports",
        "type": "boolean",
        "difficulty": "easy",
        "question": "Peyton Manning retired after winning Super Bowl XLIX.",
        "correct_answer": "False",
        "incorrect_answers": ["True"]
      }, {
        "category": "Entertainment: Video Games",
        "type": "boolean",
        "difficulty": "easy",
        "question": "In Kingdom Hearts the Paopu fruit is said to intertwine the destinies for two people forever.",
        "correct_answer": "True",
        "incorrect_answers": ["False"]
      }, {
        "category": "History",
        "type": "boolean",
        "difficulty": "easy",
        "question": "Former United States Presidents John Adams and Thomas Jefferson died within hours of each other.",
        "correct_answer": "True",
        "incorrect_answers": ["False"]
      }, {
        "category": "Science: Gadgets",
        "type": "boolean",
        "difficulty": "easy",
        "question": "Microphones can be used not only to pick up sound, but also to project sound similar to a speaker.",
        "correct_answer": "True",
        "incorrect_answers": ["False"]
      }, {
        "category": "History",
        "type": "boolean",
        "difficulty": "easy",
        "question": "Adolf Hitler was tried at the Nuremberg trials.",
        "correct_answer": "False",
        "incorrect_answers": ["True"]
      }, {
        "category": "Entertainment: Video Games",
        "type": "boolean",
        "difficulty": "easy",
        "question": "Valve&#039;s &quot;Portal&quot; and &quot;Half-Life&quot; franchises exist within the same in-game universe.",
        "correct_answer": "True",
        "incorrect_answers": ["False"]
      }
    ];

class QuizPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      question:1,
      score:0,
    }
    this.handleValidate= this.handleValidate.bind(this);
    this.prog= this.prog.bind(this);
  }
handleValidate(answer){
  if(this.state.question<10){
  console.log(answer);
  if(answer && results[this.state.question].correct_answer==="True"){
    this.setState({score:this.state.score+1})
  }else if(!answer && results[this.state.question].correct_answer==="False"){
    this.setState({score:this.state.score+1})
  }
  this.setState({question:this.state.question+1})
}else{
  this.props.quizFinished(this.state.score)
}
}

 prog() {
  if(this.state.question - 1 === 0) {return null}
  else {
  return  (this.state.question - 1) * 10 + "%"
  }
}

  render () {
    const divStyle={width:(this.state.question-1)*10+"%"};
    const divStyleScore={width:(this.state.score)*10+"%"};
    return(

        <div className="card text-center container">
          <div className="card-header">Question <span>{this.state.question}</span></div>
          <div className="card-block">
            <p className="card-text">{results[this.state.question-1].question}  </p>
          </div>
          <div className="progress ">
            <div className="progress-bar progress-bar-striped bg-info" role="progressbar" aria-valuenow={this.state.question*10} aria-valuemin="0" aria-valuemax="100" style={divStyle}>
              <span>{this.prog()}</span>
            </div>
          </div>
          <div className="card-footer text-muted">
            <button type="button" className="btn btn-primary btn-lg" id="rightbtn" onClick={(e)=>this.handleValidate(true)}>Right <i className="fa fa-check" aria-hidden="true"/></button>
            <button type="button" className="btn btn-danger btn-lg" onClick={(e)=>this.handleValidate(false)}>Wrong                <i className="fa fa-times" aria-hidden="true"/></button>
          </div>
      </div>


    )
  }
};

export default QuizPage;
