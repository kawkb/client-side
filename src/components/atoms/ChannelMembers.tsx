import React, { useEffect } from 'react';
import ImgButton from '../ImgButton';
import ban from '../../assets/img/thinban.png';
import mute from '../../assets/img/mute-user.png';
import kick from '../../assets/img/taekwondo-kick.png';
import timeout from '../../assets/img/clock.png';
import ClassButton from '../ClassButton';
import squares from '../../assets/img/squares.png';
import { Tooltip } from 'react-tooltip';
import admin from '../../assets/img/adminuser.png';
import demote from '../../assets/img/down-arrow.png';
import {
  createRandomChannelUser,
  createRandomChannelUserList,
} from '../../hooks/useCurrentChat';
import useChatParams from '../../hooks/useChatParams';
import ChannelUser from '../../modules/channeluser';
import { ChannelUserStatus, ChannelUserRole } from '../../modules/channeluser';
import api from '../../api/api';

function ChannelMembers({ onClose }: { onClose: () => void }) {
  const [showAdminOptions, setShowAdminOptions] =
    React.useState<boolean>(false);
  const [showOwnerOptions, setShowOwnerOptions] =
    React.useState<boolean>(false);
  const [promoteToAdmin, setPromoteToAdmin] = React.useState<boolean>(false);

  const activeChannelOptions = useChatParams().activeChannelOptions;
  const activeChannelOptionsMembers =
    useChatParams().activeChannelOptionsMembers;
  const setActiveChannelOptionsMembers =
    useChatParams().setActiveChannelOptionsMembers;

  const activeChannelMemberOptions = useChatParams().activeChannelMemberOptions;
  const setActiveChannelMemberOptions =
    useChatParams().setActiveChannelMemberOptions;
  const setActiveChannelMemberOptionsNull =
    useChatParams().setActiveChannelMemberOptionsNull;

  // fetch members from channel with id activeChannelOptions.id
  useEffect(() => {
    api
      .get(`/channels/${activeChannelOptions?.id}/members`)
      .then((res) => {
        setActiveChannelOptionsMembers(
          res.data.map(
            ({ status, user }: any) =>
              new ChannelUser(
                user.id,
                user.login,
                user.avatar_url.startsWith('http')
                  ? user.avatar_url
                  : process.env.REACT_APP_API_URL + 'static' + user.avatar_url,
                activeChannelOptions!.id,
                status,
                status,
                user.created_at
              )
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
    // also get my role in this channel
    api.get(`/channels/${activeChannelOptions?.id}/me`).then((res) => {
      console.log('res data me', res.data);
      if (res.data.isAdmin) {
        setShowAdminOptions(true);
      } else if (res.data.isOwner) {
        setShowAdminOptions(true);
        setShowOwnerOptions(true);
      }
    });
  }, [activeChannelOptions]);

  const handleButtonClick = (member: ChannelUser) => {
    setActiveChannelMemberOptions(member);
  };

  const handleBanMember = () => {
    console.log('Ban Member');
    // banactiveChannelMemberOptions.id
  };

  const handleKickMember = () => {
    console.log('Kick Member');
  };

  const handleModMember = () => {
    console.log('Mod Member');
  };

  const handleTimeoutMember = () => {
    console.log('Timeout Member');
  };

  const handleMuteMember = () => {
    console.log('Mute Member');
  };

  const handlePromoteToAdmin = () => {
    console.log('Promote to Admin');
    setPromoteToAdmin(true);
  };

  const handleDemoteToMember = () => {
    console.log('Demote to Member');
    setPromoteToAdmin(false);
  };

  const handleCloseOptions = () => {
    setActiveChannelMemberOptionsNull();
  };

  return (
    <div className="channel-members-popup copy-book-background retro-border-box trans-orange-box">
      <div className="channel-members-container">
        <h1 className="channel-members-title">
          {activeChannelOptions?.name} Members
        </h1>
        <div className="channel-members-list scrollable">
          {activeChannelOptionsMembers.map((member, index) => {
            return (
              <div key={index}>
                {(activeChannelMemberOptions === null ||
                  activeChannelMemberOptions.id !== member.id) && (
                  <div className="channel-member-box">
                    <div className="channel-member-info-container">
                      <img
                        className="channel-member-avatar"
                        src={member.avatar}
                        alt="channel member avatar"
                      />
                      <span className="channel-member-name">{member.name}</span>
                    </div>
                    {showAdminOptions && (
                      <button
                        className="three-dot-menu-button"
                        onClick={() => handleButtonClick(member)}
                      >
                        <div className="three-dot-menu-dot"></div>
                        <div className="three-dot-menu-dot"></div>
                        <div className="three-dot-menu-dot"></div>
                      </button>
                    )}
                  </div>
                )}

                {activeChannelMemberOptions &&
                  activeChannelMemberOptions.id === member.id && (
                    <div className="chat-list-item-options">
                      {showOwnerOptions && (
                        <span
                          className="chat-list-option"
                          onClick={handleModMember}
                        >
                          Mod
                        </span>
                      )}
                      <span
                        className="chat-list-option"
                        onClick={handleTimeoutMember}
                      >
                        Timeout
                      </span>
                      <span
                        className="chat-list-option"
                        onClick={handleBanMember}
                      >
                        Ban
                      </span>
                      <span
                        className="chat-list-option chat-list-option-last"
                        onClick={handleKickMember}
                      >
                        Kick
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
        <ClassButton
          name="Close"
          classes="retro-button orange-header close-channel-members-btn"
          onClick={onClose}
        />
      </div>
    </div>
  );
}

export default ChannelMembers;
