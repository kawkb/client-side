import User from "./user";
import DMsMsg from "./dmsmsg";

type DMs = {
  id: string;
  user: User;
  messages: DMsMsg[];
};

export default DMs;
