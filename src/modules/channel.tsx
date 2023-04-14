import User from "./user";
import { Status } from "./user";
import ChannelUser from "./channeluser";

enum ChannelType {
	PUBLIC = "public",
	PROTECTED = "protected",
	PRIVATE = "private"
}

class Channel {
	private _id: string;
	private _name: string;
	private _owner_id : string;
	private _type: ChannelType;
	private _avatar: string;
	private _password: string;
    private _isAdmin: boolean;
	// private _messages: ChannelMsg[];
	// private _members: ChannelUser[];

	constructor(id: string, name: string, owner_id: string, type: ChannelType = ChannelType.PUBLIC, avatar: string, password: string, isAdmin: boolean = false) {
		this._id = id;
		this._name = name;
		this._owner_id = owner_id;
		this._type = type;
		this._avatar = avatar;
		this._password = password;
        this._isAdmin = isAdmin;
		// this._messages = messages;
		// this._members = members;
	}

	get id() {
		return this._id;
	}

	get name() {
		return this._name;
	}

	get owner_id() {
		return this._owner_id;
	}

	get type() {
		return this._type;
	}

	get avatar() {
		return this._avatar;
	}

	get password() {
		return this._password;
	}

    get isAdmin() {
        return this._isAdmin;
    }

	// get messages() {
	// 	return this._messages;
	// }

	set name(name: string) {

		this._name = name;
	}

	// get members() {
	// 	return this._members;
	// }

	set owner_id(owner_id: string) {
		this._owner_id = owner_id;
	}

	set type(type: ChannelType) {
		this._type = type;
	}

	set avatar(avatar: string) {
		this._avatar = avatar;
	}

	set password(password: string) {
		this._password = password;
	}

    set isAdmin(isAdmin: boolean) {
        this._isAdmin = isAdmin;
    }
	// set messages(messages: ChannelMsg[]) {
	// 	this._messages = messages;
	// }

	// set members(members: ChannelUser[]) {
	// 	this._members = members;
	// }

	static fromJson(json: any) {
		return new Channel(json.id, json.name, json.owner_id, json.type, json.avatar, json.password);
	}

	static fromJsonArray(json: any[]) {
		return json.map(Channel.fromJson);
	}

	toJson() {
		return {
			id: this._id,
			name: this._name,
			owner_id: this._owner_id,
			type: this._type,
			password: this._password,
            avatar: this._avatar,
            isAdmin: this._isAdmin,
			// messages: this._messages.map((msg) => msg.toJson()),
			// members: this._members.map((member) => member.toJson()),
		};
	}

}

export default Channel;
export { ChannelType };