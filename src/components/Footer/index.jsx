export default function Footer ({emptyArr}) {


    return (

        <div className="footer">
            {emptyArr.map((el) => <span key={el}>{el}</span>)}
        </div>


    )


}