import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../useAuth";
import api from "../api/api";
import { AxiosError } from "axios";
import { useFriendButton } from '../hooks/useFriendButton';

function Friends() {
  const [friends, setFriends] = React.useState<any>([]);
  const { login } = useParams();
  const { user, loading } = useAuth();
  const nav = useNavigate();
  const friendButton = useFriendButton((state) => state.friendButton);
  useEffect(() => {
    if (loading) return;
    let param = login;
    if (login == null) {
      param = user.login;
    }
    api
      .get("/profile/" + param + "/info")
      .then((res) => {
        console.log(res.data);
        setFriends(res.data.friends);
      })
      .catch((err: AxiosError) => {
        if (err.response) {
          if (err.response.status === 404) nav("/404", { replace: true });
        }
      });
  }, [loading, login, friendButton]);

  const handleFriendClick = () => {
    console.log("Friend clicked!");
  };
  return (
    <div className="friends-list-box retro-border-box trans-pink-box copy-book-background">
      <h1>Friends:</h1>
      <div className="frinds-search-form">
        <input type="text" placeholder="Search" />
      </div>
      <div className="friends-list scrollable">
        {friends.map((friend: any, index: number) => {
          return (
            <div className="friends-list-item" key={index} onClick={() => nav("/profil/" + friend.login, { replace: true })}>
				<img className="chat-rooms-img" src={friend.avatar_url} alt="" />
            	<span className='chat-rooms-name'>{friend.login}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Friends;
