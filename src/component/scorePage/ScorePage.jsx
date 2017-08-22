import React from 'react';
import './ScorePage.css';

class ScorePage extends React.Component {
  constructor(props){
    super(props);
  }


  render () {
    return(
      <div >

        <div className="row container">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-block">
                <h3 className="card-title">Your Score:</h3>
                <p className="card-text text-danger" id="scoreText">10/10</p>
              </div>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="card">
              <div className="card-block">
                <h3 className="card-title">Leader board</h3>
                <table className="table table-striped">
                  <thead>
                    <tr >
                      <th >#</th>
                      <th className="text-center">Name:</th>
                      <th className="text-center">Score:</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                    </tr>
                  </tbody>
                </table>

              </div>
            </div>
          </div>
        </div>
        <br/>
          <div className="row container">
            <div className="col-md-6">
              <button type="button" className="btn btn-primary btn-block" id="rightbtn">Try Again  <i className="fa fa-retweet" aria-hidden="true"/></button>
            </div>
            <div className="col-md-6">
              <button type="button" className="btn btn-success btn-block " id="rightbtn">New Game  <i className="fa fa-play" aria-hidden="true"/></button>
            </div>
          </div>
          <br/>
      </div>
    )
  }
};

export default ScorePage;
