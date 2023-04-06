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
	private _password: string;

	constructor(id: string, name: string, owner_id: string, type: ChannelType, password: string) {
		this._id = id;
		this._name = name;
		this._owner_id = owner_id;
		this._type = type;
		this._password = password;
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

	get password() {
		return this._password;
	}

	set name(name: string) {

		this._name = name;
	}

	set owner_id(owner_id: string) {
		this._owner_id = owner_id;
	}

	set type(type: ChannelType) {
		this._type = type;
	}

	set password(password: string) {
		this._password = password;
	}

	static fromJson(json: any) {
		return new Channel(json.id, json.name, json.owner_id, json.type, json.password);
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
			password: this._password
		};
	}

}

export default Channel;
export { ChannelType };