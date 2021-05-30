//import af react
import React from 'react'
//import af chatengien scripts
import { ChatEngine } from 'react-chat-engine';

//import af ydelriger chatengien compuinenter
import ChatFeed from './Components/ChatFeed';
import LoginForm from './Components/LoginForm';

// import af css for siden.
import './Samtaler.css'

//chat engien project api
const projectID = '551bfd5a-48e5-4641-84b6-4a0a3d547f82';

const Samtaler = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;
// til login, med username og kode



//loader chatengien in på siden og angiver værdiger som den skal bruge til at fungere.
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
