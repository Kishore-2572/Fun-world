import React, { useState } from 'react';
import Leaderboardrow from '../../componants/leaderboardrow/Leaderboardrow';
import './leaderboard.css';

const Leaderboard = () => {
  const [active, setActive] = useState('2');
  const style = { backgroundColor: 'red', borderRadius: '0.3rem' };

  const list = [
    { Name: 'Kishore', Games: '12', Score: '3010', Average: '45.7' },
    { Name: 'Kishore', Games: '12', Score: '3010', Average: '45.7' },
    { Name: 'Kishore', Games: '12', Score: '3010', Average: '45.7' },
    { Name: 'Kishore', Games: '12', Score: '3010', Average: '45.7' },
    { Name: 'Kishore', Games: '12', Score: '3010', Average: '45.7' },
    { Name: 'Kishore', Games: '12', Score: '3010', Average: '45.7' },
    { Name: 'Kishore', Games: '12', Score: '3010', Average: '45.7' },
    { Name: 'Kishore', Games: '12', Score: '3010', Average: '45.7' },
    { Name: 'Kishore', Games: '12', Score: '3010', Average: '45.7' },
    { Name: 'Kishore', Games: '12', Score: '3010', Average: '45.7' },
    { Name: 'Kishore', Games: '12', Score: '3010', Average: '45.7' },
    { Name: 'Kishore', Games: '12', Score: '3010', Average: '45.7' },
    { Name: 'Kishore', Games: '12', Score: '3010', Average: '45.7' },
    { Name: 'Kishore', Games: '12', Score: '3010', Average: '45.7' },
    
  ];

  return (
    <div className="leaderboard">
      <div className="leaderboard-header">
        <div
          style={active === '1' ? style : null}
          onClick={() => setActive('1')}
          className="lbh-item"
        >
          Overall
        </div>
        <div
          style={active === '2' ? style : null}
          onClick={() => setActive('2')}
          className="lbh-item"
        >
          Game 1
        </div>
        <div
          style={active === '3' ? style : null}
          onClick={() => setActive('3')}
          className="lbh-item"
        >
          Game 2
        </div>
        <div
          style={active === '4' ? style : null}
          onClick={() => setActive('4')}
          className="lbh-item"
        >
          Game 3
        </div>
        <div
          style={active === '5' ? style : null}
          onClick={() => setActive('5')}
          className="lbh-item"
        >
          Game 4
        </div>
      </div>

      <div className="leaderboard-table">
        <table className="lb-table">
          <thead>
            <tr>
              <th>Ranking</th>
              <th>Name</th>
              <th>Games</th>
              <th>Score</th>
              <th>Average</th>
            </tr>
          </thead>
          <tbody>
            {list.map((e, idx) => {
              return <Leaderboardrow key={idx} data={e} rank={idx + 1} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
