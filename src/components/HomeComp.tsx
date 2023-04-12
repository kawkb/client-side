import React, { useContext } from "react";
import frisky from "../assets/svg/frisky.svg";
import fast from "../assets/svg/fast.svg";
import fierce from "../assets/svg/fierce.svg";
import squares from "../assets/img/squares.png";
import { useNavigate } from "react-router-dom";
import GameSocketContext from "../game/GameContext";


function HomeComp() {

  const navigate = useNavigate();
  const socket = useContext(GameSocketContext);
  
  const joinQueue = (gameMode: string) => {
    socket.emit("join_queue", { gameMode });
    navigate("/waiting");
  };

  return (
    <div className="home-page pattern-background blue-pattern">
      <div className="home-container">
        <div className="game-modes-container">
          <div
            className="game-play-mode frisky-mode retro-border-box light-box"
            onClick={() => joinQueue("Frisky")}
          >
            <img className="game-mode-img" src={frisky} alt="" />
            <h1>Frisky?</h1>
          </div>
          <div
            className="game-play-mode fast-mode retro-border-box light-box"
            onClick={() => joinQueue("Fast")}
          >
            <img className="game-mode-img" src={fast} alt="" />
            <h1>Fast?</h1>
          </div>
          <div
            className="game-play-mode fierce-mode retro-border-box light-box"
            onClick={() => joinQueue("Fierce")}
          >
            <img className="game-mode-img" src={fierce} alt="" />
            <h1>Fierce?</h1>
          </div>
        </div>
        <div className="game-info-container">
          <div className="game-info copy-book-background retro-border-box light-box">
            <h1>Live Matches:</h1>
            <div className="live-matches-list scrollable">
              <div className="live-matches-list-item">
                <img
                  className="live-matches-player-avatar"
                  src={squares}
                  alt=""
                />
                <span className="live-matches-player-name">Moe Erradi</span>
                <span>VS</span>
                <span className="live-matches-player-name">kawtar Drissi</span>
                <img
                  className="live-matches-player-avatar"
                  src={squares}
                  alt=""
                />
              </div>

              <div className="live-matches-list-item">
                <img
                  className="live-matches-player-avatar"
                  src={squares}
                  alt=""
                />
                <span className="live-matches-player-name">Moe Erradi</span>
                <span>VS</span>
                <span className="live-matches-player-name">kawtar Drissi</span>
                <img
                  className="live-matches-player-avatar"
                  src={squares}
                  alt=""
                />
              </div>

              <div className="live-matches-list-item">
                <img
                  className="live-matches-player-avatar"
                  src={squares}
                  alt=""
                />
                <span className="live-matches-player-name">Moe Erradi</span>
                <span>VS</span>
                <span className="live-matches-player-name">kawtar Drissi</span>
                <img
                  className="live-matches-player-avatar"
                  src={squares}
                  alt=""
                />
              </div>

              <div className="live-matches-list-item">
                <img
                  className="live-matches-player-avatar"
                  src={squares}
                  alt=""
                />
                <span className="live-matches-player-name">Moe Erradi</span>
                <span>VS</span>
                <span className="live-matches-player-name">kawtar Drissi</span>
                <img
                  className="live-matches-player-avatar"
                  src={squares}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="game-info copy-book-background retro-border-box light-box">
            <h1>Top Players:</h1>
            <div className="top-players-list-items">
              <div className="top-players-box1">
                <img
                  className="top-players-player-avatar"
                  src={squares}
                  alt=""
                />
                <h3>Moe Erradi</h3>
              </div>

              <div className="top-players-box2">
                <div className="top-players-box1">
                  <img
                    className="top-players-player-avatar"
                    src={squares}
                    alt=""
                  />
                  <h3>kawkab</h3>
                </div>
                <div className="top-players-box1">
                  <img
                    className="top-players-player-avatar"
                    src={squares}
                    alt=""
                  />
                  <h3>Sigma houssna</h3>
                </div>
              </div>

              <div className="top-players-box3">
                <div className="top-players-box1">
                  <img
                    className="top-players-player-avatar"
                    src={squares}
                    alt=""
                  />
                  <h3>Zmerribaa</h3>
                </div>

                <div className="top-players-box1">
                  <img
                    className="top-players-player-avatar"
                    src={squares}
                    alt=""
                  />
                  <h3>Hoyam Aicha</h3>
                </div>

                <div className="top-players-box1">
                  <img
                    className="top-players-player-avatar"
                    src={squares}
                    alt=""
                  />
                  <h3>aelfadil</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="game-info copy-book-background retro-border-box light-box">
            <h1>Popular Chat Rooms:</h1>
            <div className="chat-room-list scrollable">
              <div className="popular-chat-rooms-list-item">
                <img className="chat-rooms-img" src={squares} alt="" />
                <span className="chat-rooms-name">Chat Room 1</span>
              </div>
              <div className="popular-chat-rooms-list-item">
                <img className="chat-rooms-img" src={squares} alt="" />
                <span className="chat-rooms-name">Chat Room 1</span>
              </div>
              <div className="popular-chat-rooms-list-item">
                <img className="chat-rooms-img" src={squares} alt="" />
                <span className="chat-rooms-name">Chat Room 1</span>
              </div>
              <div className="popular-chat-rooms-list-item">
                <img className="chat-rooms-img" src={squares} alt="" />
                <span className="chat-rooms-name">Chat Room 1</span>
              </div>
              <div className="popular-chat-rooms-list-item">
                <img className="chat-rooms-img" src={squares} alt="" />
                <span className="chat-rooms-name">Chat Room 1</span>
              </div>
              <div className="popular-chat-rooms-list-item">
                <img className="chat-rooms-img" src={squares} alt="" />
                <span className="chat-rooms-name">Chat Room 1</span>
              </div>
              <div className="popular-chat-rooms-list-item">
                <img className="chat-rooms-img" src={squares} alt="" />
                <span className="chat-rooms-name">Chat Room 1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeComp;
