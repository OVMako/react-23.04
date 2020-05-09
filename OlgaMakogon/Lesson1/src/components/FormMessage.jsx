import React, { Component } from "react";

class FormMessage extends Component {
  state = {
    messages: [],
  };

  onChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { addNewMessage } = this.props;
    const { text, author } = this.state;
    addNewMessage({author, text})
  };

  handleKeyUp = (event, message) => {
    if (event.keyCode === 13) { // Enter
        this.setState({ messages: [ ...this.state.messages, {text: message, author: 'user'} ] });
    }
 };

  render() {
    const { text, author } = this.state;
    

    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          onChange={this.onChange} 
          onKeyUp={ (event) => this.handleKeyUp(event, 'Нормально') } 
          value={text} />
        <button type="submit">Add message</button>
      </form>
    );
  }
}

export default FormMessage;