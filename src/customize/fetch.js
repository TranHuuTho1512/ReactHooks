import { useEffect, useState } from 'react'
import axios from "axios";
import moment from "moment";
const useFetch = (url) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    useEffect(async () => {

        const ourRequest = axios.CancelToken.source() // <-- 1st step
        async function fetchData() {
            try {

                let res = await axios.get(url, {
                    cancelToken: ourRequest.token, // <-- 2nd step
                })
                let data = res && res.data ? res.data : [];
                if (data && data.length > 0) {
                    data.map(item => {
                        item.Date = moment(item.Date).format("DD/MM/YYYY");
                        return item;
                    })
                    data = data.reverse();
                }
                setData(data);
                setIsLoading(false);
                setIsError(false);

            }
            catch (err) {
                if (axios.isCancel(err)) {
                    console.log('Request canceled', err.message);
                } else {
                    setIsError(true);
                    setIsLoading(false);

                }

            }
        }
        setTimeout(() => {
            fetchData();
        }, 3000);

        return () => {
            ourRequest.cancel('Operation canceled by the user.');
        }

    }, [url]);
    return {
        data, isLoading, isError
    }

}
export default useFetch;