import './App.css';
import React, { useState, useEffect } from 'react';
import { interval, Subject } from "rxjs";
import { takeUntil,debounceTime } from "rxjs/operators";
import Timer from './component/Timer';
import Button from './component/Button';


function App() {

  const [time, setTime] = useState(0);
  const [watchOn, setWatchOn] = useState(false);
  const [status, setStatus] = useState(0);

  useEffect(() => {

    const unsubscribe = new Subject();
    interval(10)
        .pipe(takeUntil(unsubscribe))
        .subscribe(() => {
          if (watchOn) {
            setTime(val => val + 1);
          }
        });
    return () => {
      unsubscribe.next();
      unsubscribe.complete();
    };
  }, [watchOn]);


  const handleStart = () => {
    setWatchOn(prevState => !prevState);
    setStatus(1);
  }


  const handleResume = () => {
    handleStart();
  }


  const handleStop = () => {
    if (time !== 0) {
      setWatchOn(false);
    }
    setStatus(2);
  }


  const handleReset = () => {
    setTime(0);
    setWatchOn(false);
    setStatus(0);
  }

  const handleWait = ()=>{
    handleStart();
    setStatus(2);
   
  }

  return (
    <div className="App">
      <div className='main-section'>
        <div className='clock-holder'>
          <div className='app-title'>Stopwatch</div>
          <div className='stopwatch'>
            <Timer
                time={time}
            />
            <Button
                start={handleStart}
                stop={handleStop}
                reset={handleReset}
                resume={handleResume}
                wait ={handleWait}
                status={status}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;