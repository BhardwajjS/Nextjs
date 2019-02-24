import { Chat, ChatForm, ChatMessages } from 'oah-ui';
import React, { useState } from 'react';
import defaultMessages from './messages';

export default function ChatPage() {
  const [messages, setMessages] = useState(defaultMessages);

  const onSendHandle = v => {
    const files = !v.files
      ? []
      : v.files.map(file => {
        return {
          url: file.src,
          type: file.type,
          icon: 'icon ion-ios-document'
        };
      });
    const newMessage = {
      message: v.message,
      date: new Date().toLocaleTimeString(),
      reply: true,
      type: files.length ? 'file' : 'text',
      files,
      sender: 'Ahmed Elywa',
      avatar: 'https://i.gifer.com/no.gif'
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <Chat title="OAH Technology">
      <ChatMessages messages={messages} mapKey="API_KEY" />
      <ChatForm
        onSend={v => onSendHandle(v)}
        dropFiles
        filesIcon="icon ion-ios-document"
      />
    </Chat>
  );
}
