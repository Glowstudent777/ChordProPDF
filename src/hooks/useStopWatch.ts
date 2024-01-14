import { useState, useRef, useEffect } from "react"

export type LapData = {
    time: string
    lap: number
}

const padStart = (num: number) => {
    return num.toString().padStart(2, "0")
}

const formatMs = (milliseconds: number) => {
    let seconds = Math.floor(milliseconds / 1000)
    let minutes = Math.floor(seconds / 60)
    let hours = Math.floor(minutes / 60)

    minutes = minutes % 60;
    seconds = seconds % 60;

    const ms = Math.floor((milliseconds % 1000) / 10)

    let str = `${padStart(minutes)}:${padStart(seconds)}.${padStart(ms)}`

    if (hours > 0) {
        str = `${padStart(hours)}:${str}`
    }

    return str
}

export const useStopWatch = () => {
    const [time, setTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const [startTime, setStartTime] = useState<number>(0)
    const [timeWhenLastStopped, setTimeWhenLastStopped] = useState<number>(0)

    // Might remove later
    const [laps, setLaps] = useState<number[]>([])

    const interval = useRef<ReturnType<typeof setInterval>>()

    useEffect(() => {
        if (startTime > 0) {
            interval.current = setInterval(() => {
                setTime(() => Date.now() - startTime + timeWhenLastStopped)
            }, 1)
        } else {
            if (interval.current) {
                clearInterval(interval.current)
                interval.current = undefined
            }
        }
    }, [startTime])

    const start = () => {
        setIsRunning(true)
        setStartTime(Date.now())
    }

    const stop = () => {
        setIsRunning(false)
        setStartTime(0)
        setTimeWhenLastStopped(time)
    }

    const reset = () => {
        setIsRunning(false)
        setStartTime(0)
        setTimeWhenLastStopped(0)
        setTime(0)
    }

    const lap = () => {
        setLaps(laps => [time, ...laps])
    }

    const formattedLapData: LapData[] = laps.map((l, index) => {
        const previousLap = laps[index + 1] || 0
        const lapTime = l - previousLap

        return {
            time: formatMs(lapTime),
            lap: laps.length - index,
        }
    })

    return {
        start,
        stop,
        reset,
        lap,

        isRunning,
        time: formatMs(time),

        laps: formattedLapData,
        currentLapTime: laps[0] ? formatMs(time - laps[0]) : formatMs(time),
        hasStarted: time > 0,
    }
}