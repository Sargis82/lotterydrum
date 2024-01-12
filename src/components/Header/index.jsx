
import speedValues from "../../jsFiles/speedValues"

export default function Header ({ clickStartStopContionue, countingBalls, emptyArr, resetAll, speedSelect, setSpeedSelect }) {

 


    const hendleSelect = (event) => {
        setSpeedSelect (event.target.value)
    }


    return (
    <>
        <div className="header">
            <div className="head-left">
                <button onClick={clickStartStopContionue} className="cSSC-btn" style={countingBalls ? {width: '38.6vh'} : {width: '16vh'}}>
                    {countingBalls ? `S T O P - (speed value ${speedSelect/1000} sec)` : emptyArr.length > 0 && emptyArr.length < 90? 'C O N T I N U E' : 'S T A R T'}
                </button>
                <select className="speed-select" name="speed" id="speed" onChange={hendleSelect} value={speedSelect} 
                        style={countingBalls ? {display: 'none'} : {display: 'block'}}>
                    <option value={speedValues.veryLow}>Very Low ({speedValues.veryLow/1000} sec)</option>
                    <option value={speedValues.low}>Low ({speedValues.low/1000} sec)</option>
                    <option value={speedValues.middle}>Middle ({speedValues.middle/1000} sec)</option>
                    <option value={speedValues.fast}>Fast ({speedValues.fast/1000} sec)</option>
                    <option value={speedValues.veryFast}>Very Fast ({speedValues.veryFast/1000} sec)</option>
                </select>
                <button onClick={resetAll} className="reset-all-btn"
                        style={countingBalls ? {display: 'none'} : {display: 'block'}}>
                    <i className="fa-solid fa-arrows-rotate"></i>
                </button>
            </div>
            
            <div className="head-right">
                <h1>Lottery Drum</h1>
            </div>
        </div>
    </>)
}