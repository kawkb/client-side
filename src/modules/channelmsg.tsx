type ChannelMsg = {
  id: string;
  channel_id: string;
  author_id: string;
  content: string;
  sent_at: Date;
  author: {
    id: string;
    login: string;
  };
};

export default ChannelMsg;
