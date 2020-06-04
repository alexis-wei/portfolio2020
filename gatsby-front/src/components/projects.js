import React from "react"
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid'

class ProjectList extends React.Component {
    constructor() {
      super()
      this.state = {
          pressed: [true, false, false, false],
          current: 0
      }
    }
  

    getButtonState = location => {
        return this.state.pressed[location]
    }
  
    changeButtonState(location){
        const newState = this.state.pressed.slice() //copy the array
        newState[location] = true //execute the manipulations
        newState[this.state.current] = false
        this.setState({
            pressed: newState,
            current: location
        })
    }

    render() {
      return(
        <div>
            <h1>PROJECTS</h1>
            <Button variant="outlined" color="primary" disabled={ this.getButtonState(0)} 
                onClick={() => {this.changeButtonState(0)}} style={{ borderRadius: 25, margin: 4 }}>All</Button>
            <Button variant="outlined" color="primary" disabled={ this.getButtonState(1) } 
                onClick={() => {this.changeButtonState(1)}} style={{ borderRadius: 25, margin: 4 }}>Mechanical</Button>
            <Button variant="outlined" color="primary" disabled={this.getButtonState(2)} 
                onClick={() => {this.changeButtonState(2)}} style={{ borderRadius: 25, margin: 4  }}>Software</Button>
            <Button variant="outlined" color="primary" disabled={this.getButtonState(3)} 
                onClick={() => {this.changeButtonState(3)}} style={{ borderRadius: 25, margin: 4  }}>Design</Button>
        </div>
        
      )
    }
}

export default ProjectList