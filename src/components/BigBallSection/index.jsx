import ballColor from "../../jsFiles/ballColor"

export default function BigBallSection ({ bigBall, emptyArr }) {

    return (
    <>
        <div className="big-ball-coll">
            <b className="ball" style={bigBall ? {backgroundColor: `${ballColor[Math.floor(bigBall/10-0.01)]}`} : {}}>
                <p style={(emptyArr.length > 0) ? {backgroundColor: 'aliceblue'} : {}}>{bigBall}</p>
            </b>
        </div>
    </>
    )
}