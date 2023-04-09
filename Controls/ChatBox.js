import React, { Component, useEffect, useState } from 'react';
import { render } from 'react-dom';
import './style.scss';

const ChatBox = ({ user, content }) => {
  return (
    <p>
      {user}
      {content}
    </p>
  );
};

export default ChatBox;
