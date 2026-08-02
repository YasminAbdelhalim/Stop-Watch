import { useEffect, useRef, useState } from "react";

function StopWatch() {
    const [timer , setTimer] = useState(0);
    const [isRunning , setIsRunning] = useState(false);
    const intervalRef = useRef(null)
    useEffect(()=>{
       if(isRunning === true){
         intervalRef.current = setInterval(() =>{
            setTimer(prev => prev + 1)
         }, 1000)
         
         return (() =>{
            clearInterval(intervalRef.current)
         })
       }
       
    }, [isRunning])

    const hours = Math.floor(timer / 3600);
    const minutes = Math.floor((timer % 3600) / 60);
    const seconds = timer % 60;

    return ( 
        <>
        <div className="container mt-5 mx-auto ">
            <div className="card text-center mb-3 bg-dark-subtle shadow-lg py-4">
            <div className="card-body">
                <h5 className="card-title">Stop Watch</h5>
                <p className="card-text">
                  {hours.toString().padStart(2 , "0")} :
                  {minutes.toString().padStart(2 , "0")} : 
                  {seconds.toString().padStart(2 , "0")}</p>
                <button className="btn btn-success fw-bold" onClick={() => {setIsRunning(true);}}>
                            Start
                </button>
                <button className="btn btn-dark mx-3 fw-bold" onClick={() =>{setIsRunning(false)}}>
                            Stop
                </button>
                <button className="btn btn-primary fw-bold" onClick={() =>{setIsRunning(false);
                  setTimer(0)
                }}>
                            Reset
                </button>
            </div>
            </div>
        </div>
        </>
     );
}

export default StopWatch;