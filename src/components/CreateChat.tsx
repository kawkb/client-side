import React from "react";
import { useState } from "react";
import ClassButton from "./ClassButton";
import useChatList from "../hooks/useChatList";
import api from "../api/api";

function CreateChat({ onClose }: { onClose: () => void }) {
  const [type, setType] = useState<"public" | "private" | "protected">(
    "public"
  );
  const [password, setPassword] = useState("");
  const [roomName, setRoomName] = useState("");

  const publicClasses =
    "new-room-option-btn new-room-option-first-btn " +
    (type === "public" ? "green-bg" : "unclicked-new-room-option coral-bg");
  const privateClasses =
    "new-room-option-btn " +
    (type === "private" ? "green-bg" : "unclicked-new-room-option coral-bg");
  const protectedClasses =
    "new-room-option-btn " +
    (type === "protected" ? "green-bg" : "unclicked-new-room-option coral-bg");

  // const add = useChatList(state => state.add);
  const handleCreateNewRoom = () => {
    api
      .post("/chat", {
        name: roomName,
        type: type,
        password: password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
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
          name="Public"
          classes={publicClasses}
          onClick={() => setType("public")}
        />
        <ClassButton
          name="Private"
          classes={privateClasses}
          onClick={() => setType("private")}
        />
        <ClassButton
          name="Protected"
          classes={protectedClasses}
          onClick={() => setType("protected")}
        />
      </div>
      <input
        className="popup-input"
        type="password"
        placeholder="Password:"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
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
