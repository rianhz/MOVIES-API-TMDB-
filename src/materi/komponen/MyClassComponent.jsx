import React from 'react';

class MyClassComponent extends React.Component {
  state = {
    value: 0,
  };
  plusClick = () => {
    this.setState({ value: this.state.value + 1 });
  };

  minusClick = () => {
    this.state.value <= 0 ? this.setState({ value: this.state.value }) : this.setState({ value: this.state.value - 1 });
  };
  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <h1>Haii {this.props.nama}</h1>
        <div>
          <button onClick={this.minusClick}>-</button>
          <span> {this.state.value}</span>
          <button onClick={this.plusClick}>+</button>
        </div>
      </div>
    );
  }
}

export default MyClassComponent;
