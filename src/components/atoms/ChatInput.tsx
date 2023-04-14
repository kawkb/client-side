import { useContext, useState } from 'react';
import ImgButton from '../ImgButton';
import le_chat from './../../assets/svg/le_chat.svg';
import ChatSocketContext from '../ChatContext';
import useChatParams from '../../hooks/useChatParams';

function ChatInput() {
  const [message, setMessage] = useState<string>('');
  const socket = useContext(ChatSocketContext);
  const activeChannel = useChatParams((state) => state.activeChannel);

  const handleSend = () => {
    console.log('Send :' + message);
    socket.emit('message', { message, id: activeChannel?.id });
    setMessage('');
  };

  return (
    <div className="chat-msg-input">
      <input
        type="text"
        placeholder="write a something..."
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <div className="send-message">
        <ImgButton
          classes="send-button backgroundless-image-button"
          src={le_chat}
          alt={'Send message button'}
          onClick={handleSend}
        />
      </div>
    </div>
  );
}

export default ChatInput;
