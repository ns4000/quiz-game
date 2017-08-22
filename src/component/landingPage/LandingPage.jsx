import React from 'react'

class LandingPage extends React.Component {
constructor(props){
  super(props);
  this.state={user:''};
}

  render () {
    return(
      <div className="container ">
        <form className="form-control" onSubmit={(e)=>{e.preventDefault();this.props.onStartgame(this.state.user)}}>
          <input className="form-control text-center" type="text"      placeholder="Enter user name or enter as guest" onChange={(e)=>this.setState({user:e.target.value})} required/>
          <input className="form-control btn-success" type="submit"    defaultValue="Start Quiz"/>
          <input className="form-control btn-warning" type="button"    defaultValue="Guest" onClick={(e)=>{e.preventDefault();this.props.onStartgame("Guest")}}/>
        </form>
      </div>
    )

  }
}

export default LandingPage;
