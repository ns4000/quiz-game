import React from 'react';
import RaisedButton  from 'material-ui/RaisedButton';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
//import FlatButton from 'material-ui/FlatButton';
import Slider from 'material-ui/Slider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class LandingPage extends React.Component {
constructor(props){
  super(props);
  this.state={user:'',
    value:null
  };

}


handleChange = (event, index, value) => this.setState({value});


  render () {
    let toggleconfig=null;
    const style ={
      'backgroundColor':'#FFA726',
      'textAlign':'center',
    }

      toggleconfig=(
       <form className="form-control" onSubmit={(e)=>{e.preventDefault();this.props.onStartgame(this.state.user)}}>
        <input className="form-control text-center" type="text"      placeholder="Enter user name or enter as guest" onChange={(e)=>this.setState({user:e.target.value})} required/>
        <input className="form-control btn-success" type="submit"    defaultValue="Start Quiz"/>

        <RaisedButton label="Guest" backgroundColor='#FFA726' fullWidth={true} onClick={(e)=>{e.preventDefault();this.props.onStartgame("Guest")}} />
            <Card style={style}  className='style-override' >
              <CardHeader
                title="Options"
                actAsExpander={true}
                showExpandableButton={true}
              />
              <CardText expandable={true}>
                <CardActions>
                  <RaisedButton  label="Easy"  primary={true}/>
                  <RaisedButton  label="Medium" secondary={true}/>
                  <RaisedButton  label="Hard" />
                </CardActions>
                <div>
                  <SelectField   floatingLabelText="Catagories"
                     value={this.state.value}
                      onChange={this.handleChange} >
                    <MenuItem value={1} primaryText="Film" />
                    <MenuItem value={2} primaryText="Music" />
                    <MenuItem value={3} primaryText="Television" />
                    <MenuItem value={4} primaryText="Sport" />
                    <MenuItem value={5} primaryText="Art" />
                  </SelectField>
                </div>

                <div>
                 <Slider defaultValue={0.5} />
               </div>

              </CardText>
            </Card>
      </form>)


    return(
      <div className="container ">
        {toggleconfig}
      </div>
    );

  }
}
export default LandingPage;
