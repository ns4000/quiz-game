import React from 'react';
import RaisedButton  from 'material-ui/RaisedButton';


class LandingPage extends React.Component {
constructor(props){
  super(props);
  this.state={user:'',
    configtoggled:false
  };
}

  render () {
    let toggleconfig=null;
    if(this.state.configtoggled===false){
      toggleconfig=(
       <form className="form-control" onSubmit={(e)=>{e.preventDefault();this.props.onStartgame(this.state.user)}}>
        <input className="form-control text-center" type="text"      placeholder="Enter user name or enter as guest" onChange={(e)=>this.setState({user:e.target.value})} required/>
        <input className="form-control btn-success" type="submit"    defaultValue="Start Quiz"/>

        <RaisedButton label="Start Quiz" backgroundColor='#66BB6A'  fullWidth={true} onClick={(e)=>{e.preventDefault();this.props.onStartgame(this.state.user)}}  />
        <RaisedButton label="Guest" backgroundColor='#FFA726' fullWidth={true} onClick={(e)=>{e.preventDefault();this.props.onStartgame("Guest")}} />
      </form>)
    }else if(this.state.configtoggled===true){
      toggleconfig=( <form className="form-control" onSubmit={(e)=>{e.preventDefault();this.props.onStartgame(this.state.user)}}>
        <input className="form-control text-center" type="text"      placeholder="Enter user name or enter as guest" onChange={(e)=>this.setState({user:e.target.value})} required/>
        <input className="form-control btn-success" type="submit"    defaultValue="Start Quiz"/>
        <input className="form-control btn-warning" type="button"    defaultValue="Guest" onClick={(e)=>{e.preventDefault();this.props.onStartgame("Guest")}}/>
      </form>)
    }
    return(
      <div className="container ">
        {toggleconfig}
      </div>
    )

  }
}

export default LandingPage;
