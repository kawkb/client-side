class DMsMsg {
	private _id: string;
	private _sender_id: string;
	private _receiver_id: string;
	private _content: string;
	private _send_at: Date;
	private _read_at: Date;
	private _is_read: boolean;

	constructor(id: string, sender_id: string, receiver_id: string, content: string, send_at: Date, read_at: Date, is_read: boolean) {
		this._id = id;
		this._sender_id = sender_id;
		this._receiver_id = receiver_id;
		this._content = content;
		this._send_at = send_at;
		this._read_at = read_at;
		this._is_read = is_read;
	}

	get id() {
		return this._id;
	}

	get sender_id() {
		return this._sender_id;
	}

	get receiver_id() {
		return this._receiver_id;
	}

	get content() {
		return this._content;
	}

	get send_at() {
		return this._send_at;
	}

	get read_at() {
		return this._read_at;
	}

	get is_read() {
		return this._is_read;
	}

	// set id(id: string) {
	// 	this._id = id;
	// }

	// set sender_id(sender_id: string) {
	// 	this._sender_id = sender_id;
	// }

	// set receiver_id(receiver_id: string) {

	// 	this._receiver_id = receiver_id;
	// }

	// set content(content: string) {
	// 	this._content = content;
	// }
	
	// set send_at(send_at: Date) {
	// 	this._send_at = send_at;
	// }

	// set read_at(read_at: Date) {
	// 	this._read_at = read_at;
	// }

	// set is_read(is_read: boolean) {
	// 	this._is_read = is_read;
	// }

	static fromJson(json: any) {
		return new DMsMsg(json.id, json.sender_id, json.receiver_id, json.content, json.send_at, json.read_at, json.is_read);
	}

	static fromJsonArray(json: any[]) {
		return json.map(DMsMsg.fromJson);
	}

	toJson() {
		return {
			id: this._id,
			sender_id: this._sender_id,
			receiver_id: this._receiver_id,
			content: this._content,
			send_at: this._send_at,
			read_at: this._read_at,
			is_read: this._is_read
		};
	}
}

export default DMsMsg;