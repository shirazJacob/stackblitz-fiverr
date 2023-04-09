import React, { useState, useEffect, useRef } from 'react';
import { render } from 'react-dom';
import SendMessageForm from './Controls/index.js';
import ChatList from './Controls/ChatList.js';
import UserTyping from './Controls/UserTyping.js';
import './style.scss';

/**
 * Mock: https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/3d3f154277a842ef2f1b06ccbf854efc-1619951517276/fe_mock.png
 */

/**
 * Message object
 * @typedef {Object} message
 * @property {string} content - The message content.
 * @property {string} user - The message sender.
 * @property {number} timestamp - The message timestamp in millieseconds.
 * @property {string} id - The message id.
 */
window.Chat.onMessage((message) => {});

window.Chat.sendMessage('My first message');

window.Chat.onTyping((username) => {});

const App = () => {
  const [userTyping, setUserTyping] = useState('');
  const timeout = useRef(null);

  useEffect(() => {
    window.Chat.onTyping((username) => {
      setUserTyping(username);
      clearTimeout(timeout.current);
      timeout.current = setTimeout(() => {
        setUserTyping('');
      }, 5000);
    });
  }, []);

  return (
    <>
      <ChatList />
      {userTyping && <UserTyping userName={userTyping} />}
      <SendMessageForm />
    </>
  );
};

render(<App />, document.getElementById('root'));
