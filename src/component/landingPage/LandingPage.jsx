import React from 'react'

class LandingPage extends React.Component {
constructor(props){
  super(props);
}

  render () {
    return(
      <div className="container ">
        <form className="form-control">
          <input className="form-control text-center"             type="text"      placeholder="Enter user name or enter as guest"/>
          <input className="form-control btn-success" type="submit"    defaultValue="Start Quiz"/>
          <input className="form-control btn-warning" type="submit"    defaultValue="Guest"/>
        </form>
      </div>
    )

  }
}

export default LandingPage;
