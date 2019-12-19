import React, { Component } from "react";

class Wine extends Component{
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="Wine">
        <div>
        <img src={this.props.image} />
        </div>
        <div>
          <h4>{this.props.name}</h4>
          <h6>{this.props.type}</h6>
          <h6>{this.props.score}</h6>
        </div>
      </div>
    );

  }
}

export default Wine;
