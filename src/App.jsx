import { useState, useEffect } from 'react';

import BigBallSection from './components/BigBallSection'
import SmallBallSection from './components/SmallBallSection'
import Header from './components/Header';
import CheckingSection from './components/CheckingSection'
import Footer from './components/Footer';

import randomBall from "./jsFiles/randomBall";
import ballsArrFull from "./jsFiles/ballArrFull";
import speedValues from "./jsFiles/speedValues"

import './App.css'


function App() {



  const [emptyArr, setEmptyArr] = useState([]);
  const [ballsArr, setBallsArr] = useState(ballsArrFull());
  const [countingBalls, setCountingBalls] = useState(false);
  const [bigBall, setBigBall] = useState(null)

  const [speedSelect, setSpeedSelect] = useState(speedValues.middle)




  const selectRandomBall = () => {
    const randomNum = randomBall(0, ballsArr.length-1);
    const selectedNum = ballsArr.splice(randomNum, 1)[0];
    setEmptyArr([...emptyArr, selectedNum]);
    setBallsArr([...ballsArr]);
    setBigBall(selectedNum);
};


const clickStartStopContionue = () => {
    countingBalls ? setCountingBalls(false) : setCountingBalls(true)    
};


const resetAll = () => {
  setEmptyArr([])
  setBallsArr(ballsArrFull())
  setCountingBalls(false)
  setBigBall(null)
  setSpeedSelect(speedValues.middle)
}



useEffect(() => {
    if (countingBalls && ballsArr.length > 0) {
        const timer = setTimeout(() => {
            selectRandomBall();
        }, speedSelect);

    return () => clearTimeout(timer);
    }
}, [countingBalls, ballsArr]);


// console.log('ddddd', ballsArrFull());
// console.log('emptyArr---', emptyArr);
// console.log('2---', ballsArrFull);
// console.log('ballsArr---', ballsArr);

  return (
    <div>
      <Header          
        clickStartStopContionue={clickStartStopContionue}
        emptyArr={emptyArr}
        countingBalls={countingBalls}
        resetAll={resetAll}
        speedSelect={speedSelect} setSpeedSelect={setSpeedSelect}
      />
      <div className='app-content'>
        <div>
          <BigBallSection 
            bigBall={bigBall}
            emptyArr={emptyArr}
          />
          <CheckingSection 
            emptyArr={emptyArr}
          />
        </div>
        <SmallBallSection 
          emptyArr={emptyArr}
        />
      </div>
      <Footer
        emptyArr={emptyArr}
      />
    </div>
  )
}

export default App
