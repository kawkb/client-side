import { create } from 'zustand';
import Channel from '../modules/channel';
import type ChannelMsg from '../modules/channelmsg';
import ChannelUser from '../modules/channeluser';

interface ChatParamsStore {
  channelTab: boolean;
  channelList: Channel[];
  activeChannel: Channel | null;
  activeChannelMessages: ChannelMsg[];
  activeChannelOptions: Channel | null;
  activeChannelOptionsName: string;
  activeChannelOptionsAvatar: string;
  activeChannelOptionsMembers: ChannelUser[];
  activeChannelMemberOptions: ChannelUser | null;
  activeChannelOptionsInviteUsers: ChannelUser[];
  setActiveChannel: (channelId: string) => void;
  setActiveChannelOptions: (channelId: string) => void;
  setChannelList: (channelList: Array<Channel>) => void;
  setActiveChannelMessages: (messages: Array<ChannelMsg>) => void;
  updateActiveChannelMessages: (message: ChannelMsg) => void;
  removeChannel: (channelId: string) => void;
  setChannelTab: (channelTab: boolean) => void;
  setActiveChannelOptionsName: (channelId: string, channelName: string) => void;
  setActiveChannelOptionsAvatar: (
    channelId: string,
    channelAvatar: string
  ) => void;
  setActiveChannelOptionsNull: () => void;
  setActiveChannelOptionsMembers: (members: ChannelUser[]) => void;
  setActiveChannelMemberOptions: (member: ChannelUser) => void;
  setActiveChannelMemberOptionsNull: () => void;
  setActiveChannelOptionsInviteUsers: (users: ChannelUser[]) => void;
  removeFromChannelList: (channelId: string) => void;
}

const useChatParams = create<ChatParamsStore>()((set) => ({
  channelTab: false,
  channelList: [],
  activeItem: null,
  activeChannel: null,
  activeChannelMessages: [],
  activeChannelOptions: null,
  activeChannelOptionsName: '',
  activeChannelOptionsAvatar: '',
  activeChannelOptionsMembers: [],
  activeChannelMemberOptions: null,
  activeChannelOptionsInviteUsers: [],
  setActiveChannel: (channelId: string) =>
    set((state) => {
      const match = state.channelList.find(
        (channel) => channel.id === channelId
      ) as Channel;
      return { activeChannel: match || null, activeItem: match || null };
    }),

  removeFromChannelList: (channelId: string) =>
    set((state) => {
      const match = state.channelList.find(
        (channel) => channel.id === channelId
      ) as Channel;
      return {
        channelList: state.channelList.filter(
          (channel) => channel.id !== channelId
        ),
      };
    }),

  updateActiveChannelMessages: (message: ChannelMsg) =>
    set((state) => ({
      activeChannelMessages: [...state.activeChannelMessages, message],
    })),

  setActiveChannelOptions: (channelId: string) =>
    set((state) => ({
      activeChannelOptions:
        (state.channelList.find(
          (channel) => channel.id === channelId
        ) as Channel) || null,
    })),
  setChannelList: (channelList: Array<Channel>) =>
    set((state) => ({ channelList: channelList })),
  setActiveChannelMessages: (messages: Array<ChannelMsg>) =>
    set((state) => ({ activeChannelMessages: messages })),
  removeChannel: (channelId: string) =>
    set((state) => ({
      channelList: state.channelList.filter(
        (channel) => channel.id !== channelId
      ),
    })),
  setChannelTab: (channelTab: boolean) =>
    set((state) => ({ channelTab: channelTab })),
  setActiveChannelOptionsName: (channelId: string, channelName: string) =>
    set((state) => ({
      channelList: state.channelList.map((c) => {
        if (c.id === channelId) {
          return { ...c, name: channelName } as Channel;
        }
        return c;
      }),
    })),

  setActiveChannelOptionsAvatar: (channelId: string, channelAvatar: string) =>
    set((state) => ({
      channelList: state.channelList.map((c) => {
        if (c.id === channelId) {
          return { ...c, avatar: channelAvatar } as Channel;
        }
        return c;
      }),
    })),
  setActiveChannelOptionsNull: () =>
    set((state) => ({ activeChannelOptions: null })),

  setActiveChannelOptionsMembers: (members: ChannelUser[]) =>
    set((state) => ({ activeChannelOptionsMembers: members })),
  setActiveChannelMemberOptions: (member: ChannelUser) =>
    set((state) => ({ activeChannelMemberOptions: member })),
  setActiveChannelMemberOptionsNull: () =>
    set((state) => ({ activeChannelMemberOptions: null })),
  setActiveChannelOptionsInviteUsers: (users: ChannelUser[]) =>
    set((state) => ({ activeChannelOptionsInviteUsers: users })),
}));

export default useChatParams;
