import React from "react";
import { useState } from "react";
import ClassButton from "./ClassButton";
import useChatList from "../hooks/useChatList";
import api from "../api/api";
import { toast } from "react-hot-toast";
import useChatParams from "../hooks/useChatParams";

function CreateChat({ onClose }: { onClose: () => void }) {
  const [type, setType] = useState<"PUBLIC" | "PRIVATE" | "PROTECTED">(
    "PUBLIC"
  );
  const [password, setPassword] = useState("");
  const [roomName, setRoomName] = useState("");
  const { setChannelList, channelList } = useChatParams();

  const publicClasses =
    "new-room-option-btn new-room-option-first-btn " +
    (type === "PUBLIC" ? "green-bg" : "unclicked-new-room-option coral-bg");
  const privateClasses =
    "new-room-option-btn " +
    (type === "PRIVATE" ? "green-bg" : "unclicked-new-room-option coral-bg");
  const protectedClasses =
    "new-room-option-btn " +
    (type === "PROTECTED" ? "green-bg" : "unclicked-new-room-option coral-bg");

  // const add = useChatList(state => state.add);
  const handleCreateNewRoom = () => {
    api
      .post("/channel/create", {
        name: roomName,
        type: type,
        password: password,
      })
      .then((res) => {
        const channel = res.data;
        setChannelList([...channelList, channel]);
        onClose();
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <div className="create-room-popup copy-book-background retro-border-box trans-orange-box">
      <h1 className="create-room-title">Add New Chat Room!</h1>
      <input
        className="popup-input"
        type="text"
        placeholder="Room Name:"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
      />
      <div className="create-chat-options">
        <ClassButton
          name="PUBLIC"
          classes={publicClasses}
          onClick={() => setType("PUBLIC")}
        />
        <ClassButton
          name="PRIVATE"
          classes={privateClasses}
          onClick={() => setType("PRIVATE")}
        />
        <ClassButton
          name="PROTECTED"
          classes={protectedClasses}
          onClick={() => setType("PROTECTED")}
        />
      </div>
      {type === "PROTECTED" && (
        <input
          className="popup-input"
          type="password"
          placeholder="Password:"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      )}
      <div className="create-button-container">
        <ClassButton
          name="Create"
          classes="retro-button orange-header confirm-new-chat-btn"
          onClick={handleCreateNewRoom}
        />
        <ClassButton
          name="Cancel"
          classes="retro-button orange-header confirm-new-chat-btn"
          onClick={onClose}
        />
      </div>
    </div>
  );
}

export default CreateChat;
