import React from 'react'
import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './Components/ChatFeed';
import LoginForm from './Components/LoginForm';

import './Samtaler.css'

const projectID = '551bfd5a-48e5-4641-84b6-4a0a3d547f82';

const Samtaler = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;
// til login, med username og kode
  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

export default Samtaler;
