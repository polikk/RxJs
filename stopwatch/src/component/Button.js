import React from 'react';

function Button({ start, stop, reset, resume,wait, status }) {
  return (
      <div>
          {(status === 0) ?
                <button className="stopwatch-btn stopwatch-btn-blu"
                      onClick={start}>Start</button> : ""
          }

          {(status === 1) ?
              <div>
                     <button className="stopwatch-btn stopwatch-btn-red"
                          onClick={stop}>Stop</button>

                    <button className="stopwatch-btn stopwatch-btn-yel"
                          onClick={reset}>Reset</button>

                    <button className="stopwatch-btn stopwatch-btn-blu"
                          onDoubleClick={wait}>Wait</button> 
              </div> : ""
          }

          {(status === 2) ?
              <div>
                    <button className="stopwatch-btn stopwatch-btn-blu"
                          onClick={resume}>Продолжить</button>

                     <button className="stopwatch-btn stopwatch-btn-yel"
                          onClick={reset}>Reset</button>

                         
              </div> : ""
          }

      </div>
  );
}

export default Button;