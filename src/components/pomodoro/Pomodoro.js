import { useEffect, useState } from 'react'
import './Pomodoro.css'

const Pomodoro = (props) => {
    const workTime = 25
    const resTime = 5
    const [minute, setMinute] = useState(workTime);
    const [second, setSecond] = useState(0);
    const [isWorking, setIsworking] = useState(true)

useEffect(() => {
   setTimeout(() => {
        if(second > 0) setSecond(second - 1)
        else {
           if(minute != 0) setSecond(59);
            if(minute > 0) setMinute (minute - 1)
            else{
               if(isWorking){
                   alert("Dam oling");
                   setMinute(resTime)
               }
               else{
                   alert("Ishni boshlang");
                   setMinute(workTime)
               }
               setIsworking (!isWorking)
            }
        }
    },1000)
}, [second,isWorking])

const setZero  = (n) => {
    console.log(n);
    if(n < 10) n = "0" + n;
    return n
}



    return <div>
        <h1 className="text-danger">Pomodoro</h1>
    <h1>{setZero(minute)}:{setZero(second)}</h1>
    </div>
    
}

export default Pomodoro

