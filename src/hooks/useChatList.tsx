import zustand from "zustand";
import { create } from "zustand";
import User from "../modules/user";
import Channel from "../modules/channel";
import DMs from "../modules/dms";
import { Status } from "../modules/user";
import { combine } from "zustand/middleware";

// interface ChannelListStore {
// 	  channels: Channel[];
// 	  add: (channel: Channel) => void;
// 	  remove: (channel: Channel) => void;
// 	  activeChannel: Channel | null;
// }

// interface DMsListStore {
// 	  dms: DMs[];
// 	  add: (dms: DMs) => void;
// 	  remove: (dms: DMs) => void;
// 	  activeDMs: DMs | null;
// }



const useChatList = create(
	combine({items: [] as Array<Channel | DMs> , activeItem: null as (Channel | DMs | null)}, (set) => ({
		add: (item: Channel | DMs) => set((state) => ({items: [...state.items, item] as Array<Channel | DMs>})),
		remove: (itemId: string) => set((state) => ({items: state.items.filter((i : Channel | DMs) => {
			if (i.id !== itemId)
			return  i as Channel | DMs;
		}) as Array<Channel | DMs> })),
		setActiveItem: (itemId: string) => set((state) => ({activeItem: state.items.find((i : Channel | DMs) => i.id === itemId) as Channel | DMs})),
	}))
);


export default useChatList;