enum ChannelUserStatus {
	REQUESTED = "requested",
	MEMBER = "member",
	ADMIN = "admin",
	DECLINED = "declined",
	BANNED = "banned",
}

enum ChannelUserRole {
	ADMIN = "admin",
	REGULAR = "regular",
}

class ChannelUser {
	private _id: string;
	private _channelId: string;
	private _status: ChannelUserStatus;
	private _role: ChannelUserRole;
	private _muted_until: Date;

	constructor(id: string, channelId: string, status: ChannelUserStatus, role: ChannelUserRole, muted_until: Date) {
		this._id = id;
		this._channelId = channelId;
		this._status = status;
		this._role = role;
		this._muted_until = muted_until;
	}

	get id() {
		return this._id;
	}

	get channelId() {
		return this._channelId;
	}
	
	get status() {
		return this._status;
	}

	get role() {
		return this._role;
	}

	get muted_until() {
		return this._muted_until;
	}

	static fromJson(json: any) {
		return new ChannelUser(json.id, json.channelId, json.status, json.role, json.muted_until);
	}

	toJson() {
		return {
			id: this._id,
			channelId: this._channelId,
			status: this._status,
			role: this._role,
			muted_until: this._muted_until,
		};
	}


}

export default ChannelUser;
export { ChannelUserStatus, ChannelUserRole };