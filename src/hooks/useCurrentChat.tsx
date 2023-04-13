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


const createRandomMsg = (): ChannelMsg => {
	return new ChannelMsg(faker.datatype.uuid(), faker.datatype.uuid(), faker.datatype.uuid(), faker.lorem.sentence(), faker.date.past());
}

const createRandomMsgList = (): Array<ChannelMsg> => {
	let msgs: Array<ChannelMsg> = [];
	for (let i = 0; i < 10; i++) {
		msgs.push(createRandomMsg());
	}
	return msgs;
}

const createRandomDMsMsg = (): DMsMsg => {
	return new DMsMsg(faker.datatype.uuid(), faker.datatype.uuid(), faker.datatype.uuid(), faker.lorem.sentence(), faker.date.past(), faker.date.past(), faker.datatype.boolean());
}

const createRandomDMsMsgList = (): Array<DMsMsg> => {
	let msgs: Array<DMsMsg> = [];
	for (let i = 0; i < 10; i++) {
		msgs.push(createRandomDMsMsg());
	}
	return msgs;
}

const useCurrentChat = create(
	combine({item: null as (Channel | DMs | null)}, (set) => ({
	setCurrentChat: (item: Channel | DMs) => set((state) => ({item: item as Channel | DMs})),
	setMessages: (messages: Array<ChannelMsg | DMsMsg>) => set((state) => ({item: {...state.item, messages: messages} as Channel | DMs})),})),		
);

export default useCurrentChat;
export { createRandomMsg, createRandomMsgList };
export { createRandomDMsMsg, createRandomDMsMsgList };