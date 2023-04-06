class ChannelMsg {
	private _id: string;
	private _channel_id: string;
	private _sender_id: string;
	private _content: string;
	private _timestamp: Date;

	constructor(id: string, channel_id: string, user_id: string, content: string, timestamp: Date) {
		this._id = id;
		this._channel_id = channel_id;
		this._sender_id = user_id;
		this._content = content;
		this._timestamp = timestamp;
	}

	get id() {
		return this._id;
	}

	get channel_id() {
		return this._channel_id;
	}

	get sender_id() {
		return this._sender_id;
	}

	get content() {
		return this._content;
	}

	get timestamp() {
		return this._timestamp;
	}

	// set id(id: string) {
	// 	this._id = id;
	// }

	// set channel_id(channel_id: string) {
	// 	this._channel_id = channel_id;
	// }

	// set sender_id(sender_id: string) {
	// 	this._sender_id = sender_id;
	// }

	// set content(content: string) {
	// 	this._content = content;
	// }

	// set timestamp(timestamp: Date) {
	// 	this._timestamp = timestamp;
	// }

	static fromJson(json: any) {
		return new ChannelMsg(json.id, json.channel_id, json.sender_id, json.content, json.timestamp);
	}

	static fromJsonArray(json: any[]) {
		return json.map(ChannelMsg.fromJson);
	}

	toJson() {
		return {
			id: this._id,
			channel_id: this._channel_id,
			sender_id: this._sender_id,
			content: this._content,
			timestamp: this._timestamp
		};
	}

}

export default ChannelMsg;