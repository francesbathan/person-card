import React, { Component } from "react";

class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0
    };
  }

  handleClick = () => {
    this.setState({
      clickCount: this.state.clickCount + 1
    });
  };
  render() {
    const { firstName, lastName, age, hairColor } = this.props;
    return (
      <div>
        <h1>
          {lastName}, {firstName}
        </h1>
        <p>Age: {age + this.state.clickCount}</p>
        <p>Hair Color: {hairColor}</p>
        <button onClick={this.handleClick}>Burfday for {firstName}</button>
      </div>
    );
  }
}

export default PersonCard;

// class Button extends PersonCard {
//   render() {
//     const { click, text } = this.props;
//     return <button Onclick={click}>{text}</button>;
//   }
// }

// const App = () => {
//   const clickHandler = () => console.log("Clicked");
//   const buttonText = `Birthday Button for ${this.firstName} ${this.lastName}`;

//   return (
//--insert div tag here--
//       <Button text={buttonText} click={clickHandler} />
//--insert closing div tag here--
//   );
// };
