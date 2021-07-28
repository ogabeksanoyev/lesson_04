import { useEffect, useState } from "react";
import "./style.css";


const ClockWithHook = (props) => {
    const [time, setTime] = useState(new Date());
    console.log(new Date())
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    const millsecond = time.getMilliseconds();
    useEffect(() => {
        setTimeout(() => { setTime(new Date()) }, 1000)
    }, [millsecond])

    const setZero  = (n) =>{
        if(n<10) n = "0" + n;
        return n
    }
    return <div>
        <h1>{props.text}</h1>
        <h1>{setZero(hour)}:{setZero(minute)}:{setZero(second)}:{setZero(millsecond)}</h1>
    </div>
}

export default ClockWithHook;