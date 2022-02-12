import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  counter = () => {
    let char = this.props.maxChars;
    char -= this.state.message.length;
    return char
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message } onChange={event => this.handleChange(event) } />
        <p>{ this.counter() }</p>
      </div>
    );
  }
}

export default TwitterMessage;
