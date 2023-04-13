import React from "react";
import TabBox from "./TabBox";
import ChatBox from "./atoms/ChatBox";
import ImgButton from "./ImgButton";
import ChatDisplay from "./ChatDisplay";
import ChatContainer from "./ChatContainer";
import le_chat from "./../assets/svg/le_chat.svg";
import les_chats from "./../assets/svg/les_chats.svg";
import ChatSearch from "./atoms/ChatSearch";
import ChatSearchPlus from "./atoms/ChatSearchPlus";
import squares from "../assets/img/squares.png";
import useChatList from "../hooks/useChatList";
import DMsDisplay from "./DMsDisplay";
import useChatParams from "../hooks/useChatParams";

function ChatComp() {
  const options = [
    { name: le_chat, content: <DMsDisplay /> },
    { name: les_chats, content: <ChatDisplay /> },
  ];
  const color: string = "orange";

  const activeChannel = useChatParams((state) => state.activeChannel);
  const activeDMs = useChatParams((state) => state.activeDMs);
  const activeItem = useChatParams((state) => state.activeItem);

  console.log(activeChannel, activeDMs, activeItem);

  return (
    <div className="chat-tab-container pattern-background orange-pattern">
      <TabBox
        options={options}
        tabcolor={color}
        imgbtn={true}
        title={
          activeItem
            ? !activeChannel
              ? (activeDMs?.user.name as string)
              : (activeChannel?.name as string)
            : "Welcome to chat !"
        }
        avatar={squares}
      />
    </div>
  );
}

export default ChatComp;
