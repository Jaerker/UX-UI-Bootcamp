import { useEffect, useState } from 'react';
import './stopwatch.css';


const Stopwatch = () => {
    const [isPaused, setIsPaused] = useState(true);
    const [isRestarting, setIsRestarting] = useState(false);

    useEffect(() => {
        if(isRestarting)
            {
                setTimeout(() => {
                    setIsRestarting(false);
                },1);
        }
    },[isRestarting]);


    return (
    <section className='stopwatch__wrapper'>
        <section className='stopwatch-clock'>
            <figure className={`stopwatch-clock__minutes${isRestarting ? '' : ' stopwatch-clock__minutes-animation'} ${isPaused ? 'stopwatch-clock__minutes--pause' : 'stopwatch-clock__minutes--play'}`}></figure>
            <figure className={`stopwatch-clock__seconds${isRestarting ? '' : ' stopwatch-clock__seconds-animation'} ${isPaused ? 'stopwatch-clock__seconds--pause' : 'stopwatch-clock__seconds--play'}`}></figure>
        </section>
        <section className='stopwatch-digital'>
            <p className='stopwatch-digital__numbers'><span className='stopwatch-digital__minutes'></span>:<span className="stopwatch-digital__seconds"></span></p>
        </section>
        <section className='stopwatch-buttons'>
            <button className='stopwatch-buttons__start' onClick={() => setIsPaused(false)}>START</button>
            <button className='stopwatch-buttons__stop' onClick={() => setIsPaused(true)}>STOP</button>
            <button className='stopwatch-buttons__restart' onClick={() => setIsRestarting(true)}>RESTART</button>
        </section>
    </section>
  )
}

export default Stopwatch