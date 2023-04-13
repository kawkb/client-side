import User from "./user";
import { Status } from "./user";
import ChannelMsg from "./channelmsg";
import ChannelUser from "./channeluser";

enum ChannelType {
  PUBLIC = "public",
  PROTECTED = "protected",
  PRIVATE = "private",
}

type Channel = {
  id: string;
  name: string;
  owner_id: string;
  type: ChannelType;
  avatar: string;
  password: string;
  messages: ChannelMsg[];
  members: ChannelUser[];
};

export default Channel;
export { ChannelType };
