import React, { Component } from "react";

// 2 button - increment and reset -redux

//function -rearrange the buttons

class App extends Component {
  constructor() {
    super();
    this.state = {
      order: false
    };
  }

  incHander = () => {
    console.log("inc", this.props);
    this.props.increment();
  };
  resetHandler = () => {
    console.log("inc", this.props);
    this.props.reset();
  };
  resetorder = () => {
    console.log("order", this.props);
    this.props.changeorder();
  };
  render() {
    console.log("app", this.props);

    return (
      <>
        <h1>{this.props.data}</h1>
        {this.props.order ? (
          <>
            <button type="button" onClick={this.incHander}>
              increment
            </button>
            <button type="button" onClick={this.resetHandler}>
              reset
            </button>
          </>
        ) : (
          <>
            <button type="button" onClick={this.resetHandler}>
              reset
            </button>
            <button type="button" onClick={this.incHander}>
              increment
            </button>
          </>
        )}

        <button type="button" onClick={this.resetorder}>
          Change order
        </button>
      </>
    );
  }
}
export default App;
