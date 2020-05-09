import React, { Component } from "react";
import PropTypes from "prop-types";
import Example from "./Example";
import FormMessage from "./FormMessage";
import '../styles.css';
 

class HelloMessage extends Component {
  

    state = {
      messages: [{ text: "Привет", author: "bot" }, { text: "Как дела?", author: "bot" }], 
      textarea: '',
    };



    addMessage = () => {
      this.setState(({ messages }) => ({
        messages: [...messages, { text: "Нормально", author: "User" }],
      }));
    };

    componentDidUpdate() {
      const { messages } = this.state;
      if (messages[messages.length - 1].author !== "bot") {
        setTimeout(() => {
          this.setState(({ messages }) => ({
            messages: [...messages, { text: "я робот, я очень занят", author: "bot" }],
          }));
        }, 1000);
      }
    }

    addNewMessage = (data) => {
      this.setState(({messages}) => ({messages: [...messages, data]}))
    };

  render() {
    const { messages } = this.state;
    return (
      <div className="layout">
      <div className="message-field">
        <h2>Привет, {this.props.name}</h2>
              {messages.map(({text, author}, index) => (
              <div key={index} className="message" 
              style={ { alignSelf: author === 'bot' ?
                   'flex-start' : 'flex-end' } }>
                     <div>{ text }</div>
           <div className="message-sender">{ author }</div>

                     </div>
            ))}         
      </div>
        <button onClick={this.addMessage}>Отправить сообщение</button>     
        <FormMessage addNewMessage={this.addNewMessage} />
        
      </div>
    );
  }
}

export default HelloMessage;
