import User from './user';
import DMsMsg from './dmsmsg';

class DMs {
	private _user : User;
	private _messages: DMsMsg[];

	constructor(user: User, messages: DMsMsg[] = []) {
		this._user = user;
		this._messages = messages;
	}

	get user() {
		return this._user;
	}

	get messages() {
		return this._messages;
	}

	set user(user: User) {
		this._user = user;
	}

	set messages(messages: DMsMsg[]) {
		this._messages = messages;
	}

	static fromJson(json: any) {
		return new DMs(User.fromJson(json.user), json.messages.map(DMsMsg.fromJson));
	}

	static fromJsonArray(json: any[]) {
		return json.map(DMs.fromJson);
	}

	toJson() {
		return {
			user: this._user.toJson(),
			messages: this._messages.map((msg) => msg.toJson())
		};
	}
}

export default DMs;