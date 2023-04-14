import React, { useCallback, useContext, useEffect, useRef } from 'react';
import ChatMsg from './ChatMsg';
import useCurrentChat from '../../hooks/useCurrentChat';
import useChatList from '../../hooks/useChatList';
import { createRandomChannel } from '../../hooks/useChatList';
import { createRandonChannelList } from '../../hooks/useChatList';
import { faker } from '@faker-js/faker';
import useChatParams from '../../hooks/useChatParams';
import { act } from '@testing-library/react';
import api from '../../api/api';
import ChatSocketContext from '../ChatContext';
import { useAuth } from '../../useAuth';
import ChannelMsg from '../../modules/channelmsg';

function ChatMessages() {
  const activeChannel = useChatParams((state) => state.activeChannel);
  const activeChannelMessages = useChatParams(
    (state) => state.activeChannelMessages
  );
  const setActiveChannelMessages = useChatParams(
    (state) => state.setActiveChannelMessages
  );
  const updateActiveChannelMessages = useChatParams(
    (state) => state.updateActiveChannelMessages
  );
  const socket = useContext(ChatSocketContext);
  const ref = useRef<HTMLDivElement>(null);
  const auth = useAuth();
    // check if message author is the current user
    
  useEffect(() => {
    if (ref.current)
      ref.current.scrollTo({
        left: 0,
        top: ref.current.scrollHeight,
        behavior: 'smooth',
      });
  }, [activeChannelMessages]);

  const load = useCallback(() => {
    api.get(`/channels/${activeChannel?.id}/messages`).then((response) => {
      setActiveChannelMessages(response.data);
    });
  }, [activeChannel?.id]);

  useEffect(() => {
    if (!activeChannel) return;
    load();
    socket.emit('join', activeChannel?.id);
    socket.on('message', (data) => {
      updateActiveChannelMessages(data);
      // safely update zustand state
    });
    return () => {
      socket.emit('leave', activeChannel?.id);
      socket.off('message');
    };
  }, [activeChannel?.id]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [activeChannelMessages]);

  return (
    <div className="chat-messages-list scrollable" ref={ref}>
      {activeChannelMessages.map((msg, index) => {
        return (
          // should pass weither the message is from the current user or not but just for testing it's a random boolean
          <ChatMsg
            content={msg.content}
            author={msg.author}
            owner={msg.author_id === auth.user?.id}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;
