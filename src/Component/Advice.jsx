import React from "react";


function Advice(){
    const [advice , setAdvice] = React.useState("")
    const [nextadvice, setnextadvice] = React.useState(0)

    function changeadvice(){
        setnextadvice(prev => prev +1)
    }

    React.useEffect(()=>{

        fetch("https://api.adviceslip.com/advice")
        .then(res => res.json())
        .then(data => setAdvice(data.slip.advice) ).catch(alert("error"))
        
    },[nextadvice])
    return(
        <div className="container">
            <main>
                <div className="advice-container">
                    <div className="advice">
                        <h1 className="heading">{advice ? advice :"Go and work Hard"}</h1>
                        <button onClick={changeadvice}>Give me advice</button>
                    </div>
                </div>
            </main>      
        </div>
    )
}

export default Advice