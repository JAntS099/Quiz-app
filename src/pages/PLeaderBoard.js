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
    <div className="PLeaderBoard container mt-5">
      {name !== null ? (
        <div className="row justify-content-center">
          <div className="col-md-9 justify-content-center gap-4 mt-5">
            <h1>SCORE BOARD</h1>

            <table className="table table-bordered table-striped table-lights">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {fetchLeaderboardData().map((row, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{row.name}</td>
                    <td>{row.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="d-flex col-md-9 justify-content-center gap-4">
            <div>
              <button
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
                className="btn btn-danger"
              >
                Restart
              </button>
            </div>
            <div>
              <button
                onClick={() => window.location.reload()}
                className="btn btn-success"
              >
                Play again
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="row justify-content-center">
          <div className="col col-md-9 ">
            <h1>DONE!</h1>
            <h3>
              Your score is {props.score}/{props.totalQuestions}
            </h3>
          </div>
          <div className="col col-md-9 ">
            <div className="form-group">
              <form className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                  <input
                    ref={inputRef}
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                  />

                  <div className="d-flex justify-content-center gap-4 mt-3">
                    <button
                      onClick={() => window.location.reload()}
                      className="btn btn-warning mb-2"
                    >
                      Try again
                    </button>
                    <button
                      type="button"
                      onClick={savePlayer}
                      className="btn btn-primary mb-2"
                    >
                      Save your Score
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PLeaderBoard;
