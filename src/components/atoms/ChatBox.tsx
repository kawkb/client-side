import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import useChatParams from '../../hooks/useChatParams';
import bigcat from '../../assets/svg/bigcat.svg';

function ChatBox() {

  const activeChannel = useChatParams(state => state.activeChannel);

  return (
	<div className='chat-box copy-book-background retro-border-box trans-orange-box'>
		{ activeChannel && <ChatMessages />}
		{ activeChannel && <ChatInput />}
		{ !activeChannel && 
			<div className='chat-default-img-container'>
				<img src={bigcat} alt="big cat" className='chat-default-img'/>
			</div>
		}
	</div>
  )
}

export default ChatBox
