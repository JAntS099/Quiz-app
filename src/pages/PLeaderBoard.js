import React, { useState, useRef } from "react";

const PLeaderBoard = (props) => {
  const [name, setName] = useState(null);
  const inputRef = useRef(null);

  const savePlayer = () => {
    const current = inputRef.current;
    if (!current) return;

    const playerName = current.value;

    if (playerName === "") return;

    setName(playerName);

    localStorage.setItem(playerName, props.score);
  };

  const fetchLeaderboardData = () => {
    const names = Object.keys(localStorage);

    return names
      .map((key) => ({
        name: key,
        score: localStorage.getItem(key),
      }))
      .sort((a, b) => b.score - a.score);
  };

  return (
    <div className="PLeaderBoard">
      {name !== null ? (
        <div>
          <table className="table table-stripped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {fetchLeaderboardData().map((row, idx) => (
                <tr key={idx}>
                  <td>{row.name}</td>
                  <td>{row.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="d-flex col-12 justify-content-center gap-4">
            <button
              onClick={() => localStorage.clear()}
              className="btn btn-danger"
            >
              Clear leaderboard
            </button>

            <button
              onClick={() => window.location.reload()}
              className="btn btn-success"
            >
              Play again
            </button>
          </div>
        </div>
      ) : (
        <div className="form-group">
          <input
            ref={inputRef}
            type="text"
            placeholder="Fill your name"
            className="input-group"
          />
          <button onClick={savePlayer} className="btn btn-secondary">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

{
  /* <div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">
</div> */
}

export default PLeaderBoard;
