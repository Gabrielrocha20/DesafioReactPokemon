import { useState, useEffect } from 'react'
import axios from 'axios'

function useGetData(url){

    const api = axios.create({baseURL:url})
    const [data, setData] = useState();

    useEffect(() => {
      api.get()
        .then(response => {
          if (response.data.results) {
            setData(response.data.results)
          } else {setData(response.data)}
            

        }).catch(error => {
            console.log(error)
      })
    }, [])
    return {data}
}

export default useGetData