import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
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
                } else {
                    setIsPending(false)
                    setError(err.message)
                }

            })
    }, [url]);

    return { data, setData, isPending, error }
}

export default useFetch;

