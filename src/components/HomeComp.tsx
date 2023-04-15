import React from 'react';
import frisky from '../assets/svg/frisky.svg';
import fast from '../assets/svg/fast.svg';
import fierce from '../assets/svg/fierce.svg';
import { faker } from '@faker-js/faker';
import { useNavigate } from 'react-router-dom';

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
  const nav = useNavigate();
  const joinQueue = (gameMode: string) => {
    nav(`/game/${gameMode}`, { replace: true });
  };

  return (
    <div className="home-page pattern-background blue-pattern">
      <div className="home-container">
        {/* <div className="game-modes-container"> */}
        <div className="game-play-mode frisky-mode retro-border-box light-box-home">
          <img
            className="game-mode-img"
            src={frisky}
            alt=""
            onClick={() => joinQueue('Frisky')}
          />
        </div>
        <div className="game-play-mode fast-mode retro-border-box light-box-home">
          <img
            className="game-mode-img"
            src={fast}
            alt=""
            onClick={() => joinQueue('Fast')}
          />
        </div>
        <div className="game-play-mode fierce-mode retro-border-box light-box-home">
          <img
            className="game-mode-img"
            src={fierce}
            alt=""
            onClick={() => joinQueue('Fierce')}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeComp;
