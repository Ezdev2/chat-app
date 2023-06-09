import { useEffect, useState } from 'react';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);

  return (
    <div>
      <h1>Discussion globale</h1>
      {messages.map((message: any) => (
        <div key={message.id}>{message.text}</div>
      ))}
    </div>
  );
};

export default ChatPage;
