import React from 'react';
import './QuizPage.css';

class QuizPage extends React.Component {
  constructor(props){
    super(props);
  }
  render () {
    return(

        <div className="card text-center container">
          <div className="card-header">Question 1</div>
          <div className="card-block">
            <p className="card-text">the question reside here??? </p>
          </div>
        <div className="card-footer text-muted">
          <button type="button" className="btn btn-primary btn-lg" id="rightbtn">Right <i className="fa fa-check" aria-hidden="true"/></button>
          <button type="button" className="btn btn-danger btn-lg">Wrong <i className="fa fa-times" aria-hidden="true"></i></button>
        </div>
      </div>


    )
  }
};

export default QuizPage;
