import React, { useContext, useEffect, useState } from "react";
import Sketch from "react-p5";
import p5Types from "p5";
import GameSocketContext from "./GameContext";
import { tab } from "@testing-library/user-event/dist/tab";

interface GameStateProps {
  gameStatus: "waiting" | "playing" | "break" | "gameover";
  ballX: number;
  ballY: number;
  player1Y: number;
  player2Y: number;
  player1H: number;
  player2H: number;
}

const Game: React.FC = () => {
  const FACTOR = 2;
  const path = window.location.pathname.split("/").at(-1);
  const [spectating, setSpectating] = useState(false);
  const socket = useContext(GameSocketContext);
  const [resized, setResized] = useState(false);
  let tableWidth = window.innerWidth - 40;
  let tableHeight = tableWidth / FACTOR;
  const gameState = {
    gameStatus: "waiting",
    ballX: tableWidth / 2,
    ballY: tableHeight / 2,
    player1Y: tableHeight / 2,
    player2Y: tableHeight / 2,
    player1H: 120,
    player2H: 120,
  } as GameStateProps;

  //   useEffect(() => {
  //     socket?.current?.on("gameState", (state: GameStateProps) => {
  //       console.log(state);
  //     });
  //   }, []);

  useEffect(() => {
    socket.emit("startGame", { gameID: path });
    socket?.on("spectate_game", (state: GameStateProps) => {
      // Update game state with spectated game's state
      gameState.gameStatus = state.gameStatus;
      gameState.ballX = state.ballX;
      gameState.ballY = state.ballY;
      gameState.player1Y = state.player1Y;
      gameState.player2Y = state.player2Y;
      gameState.player1H = state.player1H;
      gameState.player2H = state.player2H;
    });
  }, [socket]);

  socket.on("gameState", (state: GameStateProps) => {
    // console.log(state);
    gameState.gameStatus = state.gameStatus;
    gameState.ballX = state.ballX;
    gameState.ballY = state.ballY;
    gameState.player1Y = state.player1Y;
    gameState.player2Y = state.player2Y;
    gameState.player1H = state.player1H;
    gameState.player2H = state.player2H;
  });
  socket.on("gameOver", (state: GameStateProps) => {
    console.log("game over");
    gameState.gameStatus = state.gameStatus;
  });

  const setup: any = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(tableWidth, tableHeight).parent(canvasParentRef);
    p5.ellipseMode(p5.CENTER);
    p5.rectMode(p5.CENTER);
  };

  const Draw: any = (p5: p5Types) => {
    if (gameState.gameStatus === "playing" && !spectating) {
      console.log(p5.mouseY);
      socket.emit("movePlayer", {
        playerY: p5.mouseY,
      });
    }
    // update();
    p5.background(0);
    p5.noStroke();

    // Draw paddle A
    p5.fill("white");
    p5.rect(
      20 * (tableWidth / 1000),
      gameState.player1Y * tableHeight,
      20 * (tableWidth / 1000),
      gameState.player1H * tableHeight
    );

    // Draw paddle B
    p5.fill("white");
    p5.rect(
      tableWidth - 20 * (tableWidth / 1000),
      gameState.player2Y * tableHeight,
      20 * (tableWidth / 1000),
      gameState.player2H * tableHeight
    );

    for (let i = 0; i < tableHeight; i += 20) {
      p5.stroke(255);
      p5.strokeWeight(2);
      p5.line(tableHeight, i, tableHeight, i + 10);
    }
    // Draw the ball

    p5.fill("white");
    p5.noStroke();
    // console.log(gameState.ballX, gameState.ballY);
    p5.ellipse(
      gameState.ballX * tableWidth,
      gameState.ballY * tableHeight,
      15,
      15
    );
    // console.log(gameState);
    // drawGameOver
    if (gameState.gameStatus === "gameover") {
      p5.fill("white");
      p5.textSize(32);
      p5.textAlign(p5.CENTER, p5.CENTER);
      p5.text("Game Over", tableWidth / 2, tableHeight / 2);
    }
  };

  console.log("actual hball x", gameState.ballX * tableWidth);
  console.log("actual hball y", gameState.ballY * tableHeight);
  const windowResized: any = (p5: p5Types) => {
    setResized((prev) => !prev);
    tableWidth = window.innerWidth - 40;
    tableHeight = tableWidth / FACTOR;
    p5.resizeCanvas(tableWidth, tableHeight);
  };

  useEffect(() => {
    return () => {
      socket.emit("leave_queue");
    };
  }, []);

  return (
    <div>
      <Sketch setup={setup} draw={Draw} windowResized={windowResized} />
    </div>
  );
};

export default Game;
