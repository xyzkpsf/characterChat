import { useEffect, useState, useRef } from 'react';
import style from 'styled-components';
import 'react-chat-elements/dist/main.css';
import { MessageList, Avatar, Input, Button } from 'react-chat-elements';
import VoiceInput from './VoiceInput';

const ChatViewWrapper = style.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderWrapper = style.div`
  height: 80px;
  width: 100%;
  display: flex;
  fiex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const AvatarWrapper = style.div`
  padding-left: 20px;
`;

const FooterWrapper = style.div`
  display: flex;
  flex-direction: row;  
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = style.div`
  width: 80%;
  height: 40px;
  border-radius: 5px;
  border: 2px solid #e0e0e0;
`;

const SendButtonWrapper = style.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  .rce-button {
    height: 40px;
  }
`;

const BodyWrapper = style.div`
  width: 100%;
  height: calc(100% - 160px);
`;

// TODO: stype the voice input here
const VoiceInputWrapper = style.div`
  display: flex;
  `;

// TODO: Server should return a first response to client
// TODO: add speech recognition
const ChatView = (props) => {
  const [dataSource, setDataSource] = useState([]);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleInputOnChange = (value) => {
    inputRef.current.value = value;
  };

  const handleSendButtonOnClick = () => {
    if (inputRef.current.value) {
      const userInput = inputRef.current.value;
      inputRef.current.value = '';
      const newMessage = {
        position: 'right',
        type: 'text',
        title: 'You',
        text: userInput
      };
      setDataSource((dataSource) => [...dataSource, newMessage]);

      // TODO: deceide how to handle error: Show in UI or just log in console
      // TODO: fix title here base on props or server response
      fetch('/chat', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ message: userInput })
      })
        .then((res) => res.json())
        .then((data) => {
          if (data && data.response) {
            const ResponseMessage = {
              position: 'left',
              type: 'text',
              title: 'Mando',
              text: data.response
            };
            setDataSource((dataSource) => [...dataSource, ResponseMessage]);
          }
        });
    }
  };

  const renderMessageList = () => {
    return <MessageList lockable={true} toBottomHeight={'100%'} dataSource={dataSource} />;
  };

  return (
    <ChatViewWrapper>
      <HeaderWrapper>
        <AvatarWrapper>
          <Avatar src="https://avatars.githubusercontent.com/u/80540635?v=4" alt="avatar" size="xlarge" type="rounded" />
        </AvatarWrapper>
      </HeaderWrapper>
      <BodyWrapper>{renderMessageList()}</BodyWrapper>
      <FooterWrapper>
        <InputWrapper>
          <Input placeholder="Type here..." referance={inputRef} onChange={(e) => handleInputOnChange(e.target.value)} />
        </InputWrapper>
        <SendButtonWrapper>
          <Button text={'Send'} onClick={() => handleSendButtonOnClick()} title="Send" />
          <VoiceInputWrapper>
            <VoiceInput />
          </VoiceInputWrapper>
        </SendButtonWrapper>
      </FooterWrapper>
    </ChatViewWrapper>
  );
};

export default ChatView;
