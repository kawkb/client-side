class ChannelMsg {
	private _id: string;
	private _channel_id: string;
	private _author_id: string;
	private _content: string;
	private _sent_at: Date;

	constructor(id: string, channel_id: string, user_id: string, content: string, sent_at: Date) {
		this._id = id;
		this._channel_id = channel_id;
		this._author_id = user_id;
		this._content = content;
		this._sent_at = sent_at;
	}

	get id() {
		return this._id;
	}

	get channel_id() {
		return this._channel_id;
	}

	get author_id() {
		return this._author_id;
	}

	get content() {
		return this._content;
	}

	get sent_at() {
		return this._sent_at;
	}

	set id(id: string) {
		this._id = id;
	}

	set channel_id(channel_id: string) {
		this._channel_id = channel_id;
	}

	set author_id(author_id: string) {
		this._author_id = author_id;
	}

	set content(content: string) {
		this._content = content;
	}

	set sent_at(sent_at: Date) {
		this._sent_at = sent_at;
	}

	static fromJson(json: any) {
		return new ChannelMsg(json.id, json.channel_id, json.author_id, json.content, json.sent_at);
	}

	static fromJsonArray(json: any[]) {
		return json.map(ChannelMsg.fromJson);
	}

	toJson() {
		return {
			id: this._id,
			channel_id: this._channel_id,
			author_id: this._author_id,
			content: this._content,
			sent_at: this._sent_at
		};
	}

}

export default ChannelMsg;