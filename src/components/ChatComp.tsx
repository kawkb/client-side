
import ChatTabBox from './ChatTabBox';

function ChatComp() {

	// const activeChannel = useChatParams(state => state.activeChannel);
	// const activeDMs = useChatParams(state => state.activeDMs);
	// const activeItem = useChatParams(state => state.activeItem);

	// activeChannel && console.log(`${activeChannel.id}`);
	// activeDMs && console.log(`${activeDMs.id}`);
	// activeItem && console.log(`${activeItem.id}`);

	return (
	<div className='chat-tab-container pattern-background orange-pattern'>
		{/* <TabBox options={options} tabcolor={color} imgbtn={true} title={activeItem instanceof Channel ? activeItem.name as string ?? "Welcome to chat !" : activeItem?.user.name as string ?? "Welcome to chat !"} avatar={activeItem instanceof Channel ? activeItem?.avatar ?? squares: activeItem?.user.avatar ?? squares}/>		 */}
		<ChatTabBox />
	</div>
	);
}

export default ChatComp