import React, { Component, useEffect, useState } from 'react';
import { render } from 'react-dom';
import './style.scss';

const UserTyping = ({ userName }) => {
  return <p>{userName} is typing...</p>;
};

export default UserTyping;
