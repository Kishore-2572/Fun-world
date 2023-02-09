import React from 'react';
import './leaderboardrow.css';

const Leaderboardrow = ({ data, rank }) => {
  return (
    <tr className="leaderboardrow">
      <td>{rank}</td>
      <td>{data.Name}</td>
      <td>{data.Games}</td>
      <td>{data.Score}</td>
      <td>{data.Average}</td>
    </tr>
  );
};

export default Leaderboardrow;
