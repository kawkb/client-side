import { create } from "zustand";
import Channel from "../modules/channel";
import DMs from "../modules/dms";
import DMsMsg from "../modules/dmsmsg";

interface DMsParamsStore {
	dmsList: DMs[];
	activeItem: Channel | DMs | null;
	activeDMs: DMs | null;
	activeDMsOptions: DMs | null;
	activeDMsMessages: DMsMsg[];
	setActiveDMs: (dmsId: string) => void;
	setActiveDMsOptions: (dmsId: string) => void;
	setDMsList: (dmsList: Array<DMs>) => void;
	setActiveDMsMessages: (messages: Array<DMsMsg>) => void;
}

const useDMsParams = create<DMsParamsStore>() ((set) => ({
	dmsList: [],
	activeItem: null,
	activeDMs: null,
	activeDMsOptions: null,
	activeDMsMessages: [],
	setActiveDMs: (dmsId: string) => set((state) => {
		const match = state.dmsList.find((dms) => dms.id === dmsId) as DMs;
		return {activeDMs: match, activeItem: match};
	}),
	setActiveDMsOptions: (dmsId: string) => set((state) => ({activeDMsOptions: state.dmsList.find((dms) => dms.id === dmsId) as DMs || null})),
	setDMsList: (dmsList: Array<DMs>) => set((state) => ({dmsList: dmsList})),
	setActiveDMsMessages: (messages: Array<DMsMsg>) => set((state) => ({activeDMsMessages: messages})),
}));

export default useDMsParams;