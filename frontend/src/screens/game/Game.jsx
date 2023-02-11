import React from 'react';
import { Link } from 'react-router-dom';
import './game.css';
const Game = () => {
  return (
    <div className="games">
      <div className="game-cards">
        <Link to="/game/typo">
          <div className="game-card">
            <div className="gc-left">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8iRZ4oIbQwXol4xfDTsKGXwD_CRWJkM6V7vekNwpJXIP15VJQiS5JTHb_ZoeJkFa87QE&usqp=CAU"
                alt=""
                srcset=""
              />
            </div>
            <div className="gc-right">
              <h1>TYPING GAME</h1>
              <p className="description">
                It is a Game which test your typing speed{' '}
              </p>
              <div className="gc-gamecount">
                <h3>Games</h3> <p>10</p>{' '}
              </div>
              <div className="gc-highest-core">
                {' '}
                <h3>High Score</h3> <p>500</p>{' '}
              </div>
              <div className="gc-Average">
                {' '}
                <h3>Average</h3> <p>45.8</p>{' '}
              </div>
            </div>
          </div>
        </Link>
        <Link to="/game/candycrush">
          <div className="game-card">
            <div className="gc-left">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvrfXujVmcLKTfgq5ttv1xQNKTND6EsvRWng&usqp=CAU"
                alt=""
                srcset=""
              />
            </div>
            <div className="gc-right">
              <h1>Candy Crush</h1>
              <p className="description">
                It is a Game with candies it's fun to play{' '}
              </p>
              <div className="gc-gamecount">
                <h3>Games</h3> <p>10</p>{' '}
              </div>
              <div className="gc-highest-core">
                {' '}
                <h3>High Score</h3> <p>500</p>{' '}
              </div>
              <div className="gc-Average">
                {' '}
                <h3>Average</h3> <p>45.8</p>{' '}
              </div>
            </div>
          </div>
        </Link>
        <Link to="/game/typo">
          <div className="game-card">
            <div className="gc-left">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8iRZ4oIbQwXol4xfDTsKGXwD_CRWJkM6V7vekNwpJXIP15VJQiS5JTHb_ZoeJkFa87QE&usqp=CAU"
                alt=""
                srcset=""
              />
            </div>
            <div className="gc-right">
              <h1>TYPING GAME</h1>
              <p className="description">
                It is a Game which test your typing speed{' '}
              </p>
              <div className="gc-gamecount">
                <h3>Games</h3> <p>10</p>{' '}
              </div>
              <div className="gc-highest-core">
                {' '}
                <h3>High Score</h3> <p>500</p>{' '}
              </div>
              <div className="gc-Average">
                {' '}
                <h3>Average</h3> <p>45.8</p>{' '}
              </div>
            </div>
          </div>
        </Link>
        <Link to="/game/typo">
          <div className="game-card">
            <div className="gc-left">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8iRZ4oIbQwXol4xfDTsKGXwD_CRWJkM6V7vekNwpJXIP15VJQiS5JTHb_ZoeJkFa87QE&usqp=CAU"
                alt=""
                srcset=""
              />
            </div>
            <div className="gc-right">
              <h1>TYPING GAME</h1>
              <p className="description">
                It is a Game which test your typing speed{' '}
              </p>
              <div className="gc-gamecount">
                <h3>Games</h3> <p>10</p>{' '}
              </div>
              <div className="gc-highest-core">
                {' '}
                <h3>High Score</h3> <p>500</p>{' '}
              </div>
              <div className="gc-Average">
                {' '}
                <h3>Average</h3> <p>45.8</p>{' '}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Game;
