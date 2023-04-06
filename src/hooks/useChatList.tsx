import zustand from "zustand";
import { create } from "zustand";
import User from "../modules/user";
import Channel from "../modules/channel";
import DMs from "../modules/dms";
import { Status } from "../modules/user";
import { combine } from "zustand/middleware";

interface ChannelListStore {
	  channels: Channel[];
	  add: (channel: Channel) => void;
	  remove: (channel: Channel) => void;
	  activeChannel: Channel | null;
}

interface DMsListStore {
	  dms: DMs[];
	  add: (dms: DMs) => void;
	  remove: (dms: DMs) => void;
	  activeDMs: DMs | null;
}

interface ChatListStore {
	items: (Channel | DMs)[];
	add: (item: Channel | DMs) => void;
	remove: (itemId: string) => void;
	activeItem: Channel | DMs | null;
}

const useChannelList = create<ChatListStore>(
	// combine({items:[], activeItem: null}, (set) => ({
	// 	add: (item: Channel | DMs) => set((state) => ({items: [...state.items, item]})),
	// 	remove: (itemId: string) => set((state) => ({items: state.items.filter((i) => i !== item)})),
	// }))
	);


export default useChannelList;