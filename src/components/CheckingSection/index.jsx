import { useState } from "react";

const DynamicInput = ({ value, onChange, isInvalid }) => {
  return (
    <input
      type="number"
      value={value}
      onChange={onChange}
      min="1"
      max="90"
      style={{ backgroundColor: isInvalid ? '#FFCCCB' : '#CBE8BE',  }}
    />
  );
};

const CheckingSection = ({ emptyArr }) => {
    const [arrayCount, setArrayCount] = useState(5)
    const [inputValues, setInputValues] = useState(Array(arrayCount).fill(null));
    const handleInputChange = (index, value) => {
        if (value === "" || (value >= 1 && value <= 90)) {
        const newInputValues = [...inputValues];
        newInputValues[index] = value === "" ? null : Number(value);
        setInputValues(newInputValues);
        }
    };
    const includesAll = inputValues.every(element => emptyArr.includes(element));
    const checkHandler = () => {
        if (includesAll) {
            console.log('SALYUT')
        }
    };

    const changeArray = () => {
        if (arrayCount === 5) {
          setArrayCount(15);
          setInputValues(Array(15).fill(null));
        } else {
          setArrayCount(5);
          setInputValues(Array(5).fill(null));
        }
    };

    const isCheckButtonDisabled = inputValues.some(value => value === null);

    const resetAllInputs = () => {
        if (arrayCount === 5) {
            setInputValues(Array(5).fill(null));
        } else {
            setInputValues(Array(15).fill(null));
        } 
    } 

    return (
        <div className="check-section">
        <div className="check-btn-section">
            <button onClick={checkHandler} disabled={isCheckButtonDisabled} style={isCheckButtonDisabled ? {boxShadow: 'none', background: '#ededed', color: '#adadad'} : {}}>
                Check
            </button>
            <button onClick={changeArray} disabled={(!inputValues.includes(null))} style={isCheckButtonDisabled ? {} : {boxShadow: 'none', background: '#ededed', color: '#adadad'}}>
                {arrayCount===5 ? '3/5' : '1/5'}
            </button>
            <button onClick={resetAllInputs}>
                <i className="fa-solid fa-arrow-rotate-right"></i>
            </button>
        </div>
        <div className="check-input-section">
            {inputValues.map((value, index) => (
            <DynamicInput
                key={index}
                value={value === null ? "" : value}
                onChange={(e) => handleInputChange(index, e.target.value)}
                isInvalid={!emptyArr.includes(value)}
            />
            ))}
        </div>
        <span className="steps-counter">
                {emptyArr.length > 0 ? `step - ${emptyArr.length}` : ''}
        </span>
        <div className="dev-name">
            <p>Sargis Khachatryan ©</p>
        </div>
        </div>
    );
};

export default CheckingSection;
