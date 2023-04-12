import zustand from "zustand";
import { create } from "zustand";
import User from "../modules/user";
import Channel from "../modules/channel";
import DMs from "../modules/dms";
import { Status } from "../modules/user";
import { combine } from "zustand/middleware";
import { faker } from '@faker-js/faker';
import { ChannelType } from "../modules/channel";
import ChannelMsg from "../modules/channelmsg";
import DMsMsg from "../modules/dmsmsg";
import { createRandomMsg } from "./useCurrentChat";
import { createRandomMsgList } from "./useCurrentChat";

interface ChatParamsStore {
	channelTab: boolean;
	channelList: Channel[];
	dmsList: DMs[];
	activeChannel: Channel | null;
	activeChannelOptions: Channel | null;
	activeDMsOptions: DMs | null;
	activeDMs: DMs | null;
	activeChannelOptionsName: string;
	activeChannelOptionsAvatar: string;
	setActiveChannel: (channelId: string) => void;
	setActiveDMs: (dmsId: string) => void;
	setActiveChannelOptions: (channelId: string) => void;
	setActiveDMsOptions: (dmsId: string) => void;
	setChannelList: (channelList: Array<Channel>) => void;
	setDMsList: (dmsList: Array<DMs>) => void;
	setChannelMessages: (messages: Array<ChannelMsg>) => void;
	setDMsMessages: (messages: Array<DMsMsg>) => void;
	removeChannel: (channelId: string) => void;
	setChannelTab: (channelTab: boolean) => void;
	setActiveChannelOptionsName: (channelId: string, channelName: string) => void;
	setActiveChannelOptionsAvatar: (channelId: string, channelAvatar: string) => void;
	setActiveChannelOptionsNull: () => void;
}

const useChatParams = create<ChatParamsStore>() ((set) => ({
	channelTab: false,
	channelList: [],
	dmsList: [],
	activeChannel: null,
	activeDMs: null,
	activeChannelOptions: null,
	activeDMsOptions: null,
	activeChannelOptionsName: "",
	activeChannelOptionsAvatar: "",
	setActiveChannel: (channelId: string) => set((state) => ({activeChannel: state.channelList.find((channel) => channel.id === channelId) as Channel})),
	setActiveDMs: (dmsId: string) => set((state) => ({activeDMs: state.dmsList.find((dms) => dms.id === dmsId) as DMs})),
	setActiveChannelOptions: (channelId: string) => set((state) => ({activeChannelOptions: state.channelList.find((channel) => channel.id === channelId) as Channel || null})),
	setActiveDMsOptions: (dmsId: string) => set((state) => ({activeDMsOptions: state.dmsList.find((dms) => dms.id === dmsId) as DMs || null})),
	setChannelList: (channelList: Array<Channel>) => set((state) => ({channelList: channelList})),
	setDMsList: (dmsList: Array<DMs>) => set((state) => ({dmsList: dmsList})),
	setChannelMessages: (messages: Array<ChannelMsg>) => set((state) => ({activeChannel: {...state.activeChannel, messages: messages} as Channel})),
	setDMsMessages: (messages: Array<DMsMsg>) => set((state) => ({activeDMs: {...state.activeDMs, messages: messages} as DMs})),
	removeChannel: (channelId: string) => set((state) => ({channelList: state.channelList.filter((channel) => channel.id !== channelId)})),
	setChannelTab: (channelTab: boolean) => set((state) => ({channelTab: channelTab})),
	setActiveChannelOptionsName: (channelId: string, channelName: string) => set((state) => ({channelList: state.channelList.map((c) => {
		if (c.id === channelId) {
			return {...c, name: channelName} as Channel;
		}
		return c;
	})})),

	setActiveChannelOptionsAvatar: (channelId: string, channelAvatar: string) => set((state) => ({channelList: state.channelList.map((c) => {
		if (c.id === channelId) {
			return {...c, avatar: channelAvatar} as Channel;
		}
		return c;
	})})),
	setActiveChannelOptionsNull: () => set((state) => ({activeChannelOptions: null})),
}));

export default useChatParams;