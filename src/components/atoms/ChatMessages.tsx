import React, { useEffect } from "react";
import ChatMsg from "./ChatMsg";
import useCurrentChat from "../../hooks/useCurrentChat";
import useChatList from "../../hooks/useChatList";
import { faker } from "@faker-js/faker";
import useChatParams from "../../hooks/useChatParams";
import { act } from "@testing-library/react";
import api from "../../api/api";
import ChannelMsg from "../../modules/channelmsg";
import { useAuth } from "../../useAuth";

function ChatMessages() {
  const activeChannel = useChatParams((state) => state.activeChannel);
  const setChannelMessages = useChatParams((state) => state.setChannelMessages);
  const { user } = useAuth();

  useEffect(() => {
    api.get(`/channel/${activeChannel?.id}/messages`).then((response) => {
      console.log(response.data);
      setChannelMessages(response.data);
    });
  }, [activeChannel?.id]);

  return (
    <div className="chat-messages-list scrollable">
      {(activeChannel?.messages || []).map((msg, index) => {
        return (
          <ChatMsg
            content={msg.content}
            owner={msg.author.login === user?.login}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;
