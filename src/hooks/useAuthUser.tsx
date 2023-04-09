import zustand from "zustand";
import { create } from "zustand";
import User from "../modules/user";
import { Status } from "../modules/user";

export const useAuthUser = create<User>((set) => (User.fromJson({
	id: "",
	name: "",
	avatar: "",
	status: Status.ONLINE,
	level: 1,
	xp: 0,
})));
