import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import './style.scss';

const SendMessageForm = () => {
  const [newMessage, SetNewMessage] = useState('');

  const sendMessage = (event) => {
    event.preventDefault();
    window.Chat.sendMessage(newMessage);
  };

  return (
    <form className="controls">
      <input
        type="text"
        value={newMessage}
        onChange={(event) => {
          SetNewMessage(event.target.value);
        }}
        placeholder="Say something"
      />
      <button onClick={(event) => sendMessage(event)}>Send</button>
    </form>
  );
};

export default SendMessageForm;
