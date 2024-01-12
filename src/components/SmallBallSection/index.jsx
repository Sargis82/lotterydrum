import ballColor from "../../jsFiles/ballColor";
import ballsArrFull from "../../jsFiles/ballArrFull";

export default function SmallBallSection({ emptyArr }) {
    const smallBallsArr = ballsArrFull()
    return (
        <>
            <div className="ball-colection">
                {smallBallsArr.map((el) => (
                    <div
                        key={el}
                        className={`ball-box ${emptyArr.includes(el) ? "ball-active" : ""}`}
                    >
                        <p style={emptyArr.includes(el) ? {backgroundColor: `${ballColor[Math.floor(el/10-0.01)]}`} : {}}>
                            <span>{el}</span>
                        </p>
                    </div>
                ))}
            </div>
            
        </>
    );
}


