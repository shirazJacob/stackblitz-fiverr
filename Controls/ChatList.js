import React, { Component, useEffect, useState } from 'react';
import { render } from 'react-dom';
import './style.scss';
import ChatBox from './ChatBox.js';

const ChatList = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    window.Chat.onMessage((message) => {
      setChats((prevState) => [...prevState, message]);
    });
  }, []);

  return chats.map((message) => {
    return (
      <>
        <ChatBox
          key={message.id}
          user={message.user}
          content={message.content}
        />
      </>
    );
  });
};

export default ChatList;
