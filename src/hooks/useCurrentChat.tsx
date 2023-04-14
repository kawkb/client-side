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
import ChannelUser from "../modules/channeluser";
import { ChannelUserStatus } from "../modules/channeluser";
import { ChannelUserRole } from "../modules/channeluser";


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

const createRandomChannelUser = (): ChannelUser => {
	return new ChannelUser(faker.datatype.uuid(), faker.name.fullName(), faker.image.avatar(), faker.datatype.uuid(), faker.helpers.arrayElement([ChannelUserStatus.REQUESTED, ChannelUserStatus.MEMBER, ChannelUserStatus.ADMIN, ChannelUserStatus.DECLINED, ChannelUserStatus.BANNED,]), faker.helpers.arrayElement([ChannelUserRole.ADMIN, ChannelUserRole.REGULAR,]), faker.date.past());
}

const createRandomChannelUserList = (): Array<ChannelUser> => {
	let users: Array<ChannelUser> = [];
	for (let i = 0; i < 10; i++) {
		users.push(createRandomChannelUser());
	}
	return users;
}

const useCurrentChat = create(
	combine({item: null as (Channel | DMs | null)}, (set) => ({
	setCurrentChat: (item: Channel | DMs) => set((state) => ({item: item as Channel | DMs})),
	// setMessages: (messages: Array<ChannelMsg | DMsMsg>) => set((state) => ({item: {...state.item, messages: messages} as Channel | DMs})),
})),);

export default useCurrentChat;
export { createRandomMsg, createRandomMsgList };
export { createRandomDMsMsg, createRandomDMsMsgList };
export { createRandomChannelUser, createRandomChannelUserList };