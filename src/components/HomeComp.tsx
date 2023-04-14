import React, { useContext, useEffect } from "react";
import frisky from "../assets/svg/frisky.svg";
import fast from "../assets/svg/fast.svg";
import fierce from "../assets/svg/fierce.svg";
import squares from "../assets/img/squares.png";
import { useAuth } from "../useAuth";
import { AxiosError } from "axios";
import api from "../api/api";
import { faker } from "@faker-js/faker";
import TopPlayers from "../assets/svg/TopPlayers.svg";
import { useNavigate } from "react-router-dom";
import GameSocketContext from "../game/GameContext";
import { toast } from "react-hot-toast";

interface ItemProps {
  imageSrc: string;
  name: string;
}

const TopPlayersItem: React.FC<ItemProps> = ({ imageSrc, name }) => {
  return (
    <div className="Top-player-item">
      <img src={imageSrc} alt={name} />
      <div className="name">{name}</div>
    </div>
  );
};

interface Data {
  avatar: string;
  name: string;
}

const data: Data[] = Array.from({ length: 6 }, () => ({
  avatar: faker.image.avatar(),
  name: faker.name.firstName(),
}));

data.map((item) => {
  console.log(item.avatar);
  console.log(item.name);
});

function HomeComp() {
  const [topPlayers, setTopPlayers] = React.useState<any>([]);
  const { user, loading } = useAuth();
  useEffect(() => {
    setTopPlayers(data);
  }, []);

  const nav = useNavigate();
  const socket = useContext(GameSocketContext);
  useEffect(() => {
    socket.on("invited", (data: any) => {
	  // dont let two toasts appear at the same time
	  toast.dismiss();
      const toastId = toast(
        <div className="toast-container">
          <div className="toast-text">
            {data.login} invited you to a custom game
          </div>
          <div className="toast-buttons">
            <button
              className="toast-button"
              onClick={() => {
				console.log('inviteId', data.inviteId);
				nav(`/game/Custom`, { replace: true });
                socket.emit("accept_invite", { inviteId: data.inviteId });
                toast.dismiss(toastId);
              }}
            >
              Accept
            </button>
            <button
              className="toast-button"
              onClick={() => {
                socket.emit("decline_invite");
                toast.dismiss(toastId);
              }}
            >
              Decline
            </button>
          </div>
        </div>,
        {
          position: "top-center",
          style: {
            background: "#333",
            color: "#fff",
            borderRadius: "10px",
            fontSize: "1.2rem",
            fontWeight: "bold",
            padding: "1rem",
            width: "30rem",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          },
          duration: 100000,
        }
      );
    });
  }, [socket, nav]);

  const joinQueue = (gameMode: string) => {
    socket.emit("join_queue", { gameMode });
    console.log(gameMode);
    console.log();
    nav(`/game/${gameMode}`, { replace: true });
  };

  //   //get top players data:
  // const { user, loading } = useAuth();
  // useEffect(() => {
  // 	if (loading) return;
  // 	api.get("/topPlayers")
  // 		.then((res) => {
  // 			console.log(res.data);
  // 			setTopPlayers(res.data)
  // 		})
  // 		.catch((err: AxiosError) => {
  // 			console.log(err.response)
  // 		});
  // }, [loading])

  //handle top player click:
  const handleTopPlayerClick = () => {
    // nav(`/profile/${login}`, { replace: true });
  };
  return (
    <div className="home-page pattern-background blue-pattern">
      <div className="home-container">
        <div className="game-modes-container">
          <div className="game-play-mode frisky-mode retro-border-box light-box-home">
            <img
              className="game-mode-img"
              src={frisky}
              alt=""
              onClick={() => joinQueue("Frisky")}
            />
          </div>
          <div className="game-play-mode fast-mode retro-border-box light-box-home">
            <img
              className="game-mode-img"
              src={fast}
              alt=""
              onClick={() => joinQueue("Fast")}
            />
          </div>
          <div className="game-play-mode fierce-mode retro-border-box light-box-home">
            <img
              className="game-mode-img"
              src={fierce}
              alt=""
              onClick={() => joinQueue("Fierce")}
            />
          </div>
        </div>
        <div className="game-info-container">
          <div className="game-info top-player-more copy-book-background retro-border-box light-box">
            <div className="top-players-image-list-container">
              <div className="top-player-img-canva">
                <img src={TopPlayers} alt="" />
              </div>
              <div className="top-players-list-items">
                {topPlayers.map((player: Data, index: number) => {
                  return (
                    <div className="Top-player-item" key={index}>
                      <img
                        src={player.avatar}
                        alt={player.name}
                        onClick={handleTopPlayerClick}
                      />
                      <div className="Top-player-name">{player.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // 		<div className='game-info-container'>

    // 			<div className='game-info copy-book-background retro-border-box light-box'>
    // 				<h1>Live Matches:</h1>
    // 				<div className='live-matches-list scrollable'>
    // 						<div className='live-matches-list-item' >
    // 							<img className="live-matches-player-avatar" src={squares} alt="" />
    // 							<span className='live-matches-player-name'>Moe Erradi</span>
    // 							<span>VS</span>
    // 							<span className='live-matches-player-name'>kawtar Drissi</span>
    // 							<img className="live-matches-player-avatar" src={squares} alt="" />
    // 						</div>

    // 						<div className='live-matches-list-item' >
    // 							<img className="live-matches-player-avatar" src={squares} alt="" />
    // 							<span className='live-matches-player-name'>Moe Erradi</span>
    // 							<span>VS</span>
    // 							<span className='live-matches-player-name'>kawtar Drissi</span>
    // 							<img className="live-matches-player-avatar" src={squares} alt="" />
    // 						</div>

    // 						<div className='live-matches-list-item' >
    // 							<img className="live-matches-player-avatar" src={squares} alt="" />
    // 							<span className='live-matches-player-name'>Moe Erradi</span>
    // 							<span>VS</span>
    // 							<span className='live-matches-player-name'>kawtar Drissi</span>
    // 							<img className="live-matches-player-avatar" src={squares} alt="" />
    // 						</div>

    // 						<div className='live-matches-list-item' >
    // 							<img className="live-matches-player-avatar" src={squares} alt="" />
    // 							<span className='live-matches-player-name'>Moe Erradi</span>
    // 							<span>VS</span>
    // 							<span className='live-matches-player-name'>kawtar Drissi</span>
    // 							<img className="live-matches-player-avatar" src={squares} alt="" />
    // 						</div>
    // 				</div>
    // 			</div>

    // 			<div className='game-info copy-book-background retro-border-box light-box'>
    // 				{/* <div className='top-players-list-items'> */}
    // 					<TopPlayers{...data}/>
    // 				{/* </div> */}
    // 			</div>

    // 			<div className='game-info copy-book-background retro-border-box light-box'>
    // 				<h1>Popular Chat Rooms:</h1>
    // 				<div className='chat-room-list scrollable'>
    // 					<div className='popular-chat-rooms-list-item' >
    // 						<img className="chat-rooms-img" src={squares} alt="" />
    // 						<span className='chat-rooms-name'>Chat Room 1</span>
    // 					</div>
    // 					<div className='popular-chat-rooms-list-item' >
    // 						<img className="chat-rooms-img" src={squares} alt="" />
    // 						<span className='chat-rooms-name'>Chat Room 1</span>
    // 					</div>
    // 					<div className='popular-chat-rooms-list-item' >
    // 						<img className="chat-rooms-img" src={squares} alt="" />
    // 						<span className='chat-rooms-name'>Chat Room 1</span>
    // 					</div>
    // 					<div className='popular-chat-rooms-list-item' >
    // 						<img className="chat-rooms-img" src={squares} alt="" />
    // 						<span className='chat-rooms-name'>Chat Room 1</span>
    // 					</div>
    // 					<div className='popular-chat-rooms-list-item' >
    // 						<img className="chat-rooms-img" src={squares} alt="" />
    // 						<span className='chat-rooms-name'>Chat Room 1</span>
    // 					</div>
    // 					<div className='popular-chat-rooms-list-item' >
    // 						<img className="chat-rooms-img" src={squares} alt="" />
    // 						<span className='chat-rooms-name'>Chat Room 1</span>
    // 					</div>
    // 					<div className='popular-chat-rooms-list-item' >
    // 						<img className="chat-rooms-img" src={squares} alt="" />
    // 						<span className='chat-rooms-name'>Chat Room 1</span>
    // 					</div>
    // 				</div>
    // 			</div>
    // 		</div>
    // 	</div>
    // </div>
  );
}

export default HomeComp;
