import React from "react";
import ChatModel from "../../modules/chat";
import { useState } from "react";
import { useEffect } from "react";
import { faker } from "@faker-js/faker";
import useChatList from "../../hooks/useChatList";
import User from "../../modules/user";
// import { createRandomChannel } from "../../hooks/useChatList";
// import { createRandonChannelList } from "../../hooks/useChatList";
import ThreeDotMenu from "./ThreeDotMenu";
import useChatParams from "../../hooks/useChatParams";
import Popup from "../Popup";
import ChannelSettings from "./ChannelSettings";
import ChannelMembers from "./ChannelMembers";
import ChannelInvite from "./ChannelInvite";
import api from "../../api/api";
import { toast } from "react-hot-toast";
import { useAuth } from "../../useAuth";

// type ChatListProps = {
// 	  chats: ChatModel[];
// }

function ChatsList() {
  const channelList = useChatParams((state) => state.channelList);
  const setChannelList = useChatParams((state) => state.setChannelList);
  const activeChannel = useChatParams((state) => state.activeChannel);
  const activeChannelOptions = useChatParams(
    (state) => state.activeChannelOptions
  );
  const setActiveChannel = useChatParams((state) => state.setActiveChannel);
  const setActiveChannelOptions = useChatParams(
    (state) => state.setActiveChannelOptions
  );
  const removeChannel = useChatParams((state) => state.removeChannel);
  const setActiveChannelOptionsNull = useChatParams(
    (state) => state.setActiveChannelOptionsNull
  );
  const [showSettings, setShowSettings] = useState(false);
  const [showMembers, setShowMembers] = useState(false);
  const [showInviteToChannel, setShowInviteToChannel] = useState(false);
  const { user, loading } = useAuth();
  useEffect(() => {
    if (!user) return;
    if (loading) return;
    api
      .get("/channel/all")
      .then((response) => {
        setChannelList(response.data.map((channel: any) => channel));
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  }, [user, loading]);

  const [showAdminOptions, setShowAdminOptions] = React.useState<boolean>(true);

  const handleMenuClick = (menuItem: string) => {
    console.log(menuItem);
  };

  const handleButtonClick = (itemId: string, itemName: string) => {
    console.log(`item id: ${itemId} ${itemName}`);
    setActiveChannelOptions(itemId);
  };

  const handleCloseOptions = () => {
    setActiveChannelOptions("");
  };

  const handleLeaveChannel = () => {
    console.log("leave channel");
    if (activeChannelOptions) {
      removeChannel(activeChannelOptions.id);
      setActiveChannelOptions("");
    }
  };

  const handleShowSettings = () => {
    setShowSettings(true);
  };

  const handleCloseSettingsPopup = () => {
    setShowSettings(false);
    setActiveChannelOptionsNull();
  };

  const handleShowMembers = () => {
    setShowMembers(true);
  };

  const handleCloseMembers = () => {
    setShowMembers(false);
    setActiveChannelOptionsNull();
  };

  const handleShowInviteToChannel = () => {
    console.log("invite to channel");
    setShowInviteToChannel(true);
  };

  const handleCloseInviteToChannel = () => {
    setShowInviteToChannel(false);
    setActiveChannelOptionsNull();
  };

  return (
    <div className="chat-list scrollable">
      {channelList.map((item, index) => {
        const itemName = item.name;
        return (
          <div key={index}>
            {(activeChannelOptions === null ||
              activeChannelOptions?.id !== item.id) && (
              <div className="chat-list-item">
                <span
                  className="chat-list-item-name"
                  onClick={() => {
                    setActiveChannel(item.id);
                  }}
                >
                  {" "}
                  {itemName}{" "}
                </span>
                <button
                  className="three-dot-menu-button"
                  onClick={() => handleButtonClick(item.id, itemName)}
                >
                  <div className="three-dot-menu-dot"></div>
                  <div className="three-dot-menu-dot"></div>
                  <div className="three-dot-menu-dot"></div>
                </button>
              </div>
            )}
            {activeChannelOptions && activeChannelOptions.id === item.id && (
              <div className="chat-list-item-options">
                {showAdminOptions && (
                  <span
                    className="chat-list-option"
                    onClick={handleShowSettings}
                  >
                    Settings
                  </span>
                )}
                {showSettings && (
                  <Popup
                    onClose={handleCloseSettingsPopup}
                    content={
                      <ChannelSettings onClose={handleCloseSettingsPopup} />
                    }
                  />
                )}
                <span className="chat-list-option" onClick={handleShowMembers}>
                  Members
                </span>
                {showMembers && (
                  <Popup
                    onClose={handleCloseMembers}
                    content={<ChannelMembers onClose={handleCloseMembers} />}
                  />
                )}
                <span
                  className="chat-list-option"
                  onClick={handleShowInviteToChannel}
                >
                  Invite
                </span>
                {showInviteToChannel && (
                  <Popup
                    onClose={handleCloseInviteToChannel}
                    content={
                      <ChannelInvite onClose={handleCloseInviteToChannel} />
                    }
                  />
                )}
                <span
                  className="chat-list-option chat-list-option-last"
                  onClick={handleLeaveChannel}
                >
                  Leave
                </span>
                <button
                  className="chat-list-options-close"
                  onClick={handleCloseOptions}
                >
                  x
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ChatsList;
