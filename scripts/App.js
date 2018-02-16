import React, { Component } from 'react';

export default class App extends Component {
  state = { 
    activities : [],
    activity : ""
  }

  componentDidMount() {  
    var url = './scripts/activities/activities.json';
  
    fetch(url)
    .then(response => response.json())
    .then(responseJson => {
      this.setState({ activities: responseJson});
      //console.log(this.state.activities);  
    });  
  }

  getRandomactivity = () => {
    var getAllactivities = this.state.activities;
    this.setState({ 
      activity : getAllactivities[Math.floor(Math.random()*getAllactivities.length)]
    });
  }

  render() {
    if(this.state === null) return null;  

    return (
      <div className="wrapper">
        <div className="content">
          <button onClick={this.getRandomactivity} >Vad fan ska jag hitta på?</button>
          {/* {this.state.activities.map(activity => (
            <div key={activity.activity}>{activity.activity}</div>
          ))} */}

          <p>{this.state.activity.activity}</p>
        </div>
      </div>

    );
  }
}


