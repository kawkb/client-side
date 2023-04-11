import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useBell } from "../hooks/useBell";
import Notif from "../components/atoms/Notif";
import ImgButton from "../components/ImgButton";
import accept from '../assets/img/accept.png';
import decline from '../assets/img/decline.png';


function Bell() {
  const setBellClose = useBell((state) => state.setBellClose);
  const setBellName = useBell((state) => state.setBellName);

  const notifList = [];

  function toggleBell() {
    setBellClose(true);
    setBellName("Close");
  }

  const notifNumber = 5;

  const handleAcceptFriend = () => {
    console.log("Accept");
  };

  const handleDeclineFriend = () => {
    console.log("Decline");
  };

  return (
    <div className="menu-container pattern-background purple-pattern">
        <div className="notif-container retro-border-box trans-purple-box menu-box copy-book-background">
          <div className="notif-list scrollable">
            <div className="notif-box">
              <div className="notif-msg-container">
                <span className="notif-msg-name">Kdrissi</span>
                <span className="notif-msg-span">sent you a friend request</span>
              </div>
              <div className="notif-buttons">
                  <ImgButton src={accept} alt="Accept" classes="notif-btn" onClick={handleAcceptFriend} />
                  <ImgButton src={decline} alt="Decline" classes="notif-btn" onClick={handleDeclineFriend} />
              </div>
            </div>

            <div className="notif-box">
              <div className="notif-msg-container">
                <span className="notif-msg-name">Kdrissi</span>
                <span className="notif-msg-span">sent you a friend request</span>
              </div>
              <div className="notif-buttons">
                  <ImgButton src={accept} alt="Accept" classes="notif-btn" onClick={handleAcceptFriend} />
                  <ImgButton src={decline} alt="Decline" classes="notif-btn" onClick={handleDeclineFriend} />
              </div>
            </div>

            <div className="notif-box">
              <div className="notif-msg-container">
                <span className="notif-msg-name">Kdrissi</span>
                <span className="notif-msg-span">sent you a friend request</span>
              </div>
              <div className="notif-buttons">
                  <ImgButton src={accept} alt="Accept" classes="notif-btn" onClick={handleAcceptFriend} />
                  <ImgButton src={decline} alt="Decline" classes="notif-btn" onClick={handleDeclineFriend} />
              </div>
            </div>

            <div className="notif-box">
              <div className="notif-msg-container">
                <span className="notif-msg-name">Kdrissi</span>
                <span className="notif-msg-span">sent you a friend request</span>
              </div>
              <div className="notif-buttons">
                  <ImgButton src={accept} alt="Accept" classes="notif-btn" onClick={handleAcceptFriend} />
                  <ImgButton src={decline} alt="Decline" classes="notif-btn" onClick={handleDeclineFriend} />
              </div>
            </div>

            <div className="notif-box">
              <div className="notif-msg-container">
                <span className="notif-msg-name">Kdrissi</span>
                <span className="notif-msg-span">sent you a friend request</span>
              </div>
              <div className="notif-buttons">
                  <ImgButton src={accept} alt="Accept" classes="notif-btn" onClick={handleAcceptFriend} />
                  <ImgButton src={decline} alt="Decline" classes="notif-btn" onClick={handleDeclineFriend} />
              </div>
            </div>


            <div className="notif-box">
              <div className="notif-msg-container">
                <span className="notif-msg-name">Kdrissi</span>
                <span className="notif-msg-span">sent you a friend request</span>
              </div>
              <div className="notif-buttons">
                  <ImgButton src={accept} alt="Accept" classes="notif-btn" onClick={handleAcceptFriend} />
                  <ImgButton src={decline} alt="Decline" classes="notif-btn" onClick={handleDeclineFriend} />
              </div>
            </div>
            


          </div>
        </div>
      </div>
  );
}

export default Bell;
