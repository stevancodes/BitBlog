import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal
        setTimeout(()=> {     // Simulation of loading
            fetch(url, {signal})
            .then(res => {
                if (!res.ok) {
                    throw Error("Could not Fetch data from resource - resouce error");
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setData(data);
                setIsPending(false)
                setError(null)

            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log("Fetch aborted")
                    setError(err.message)
                } else {
                    setIsPending(false)
                    setError(err.message)
                }

            })
        }, 500)
        return () => controller.abort()
        
    }, [url]);

    return { data, setData, isPending, error}
}

export default useFetch;

