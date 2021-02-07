import {useState, useEffect} from 'react'

//custum hook, needs to start with "use"
const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
 
  useEffect(() => {
    // abortController se pouziva proto, abychom zabranilili fetchi dat, kdyz je komponent Domu uz unmountovany (pote, co rychle preklikneme na Nove moudro)
    const abortCont = new AbortController()
    
    // simulujeme to, ze fetch dat nejakou dobu trva
    setTimeout(() => {      
      fetch(url, { signal: abortCont.signal})
      .then(res => {
        if (!res.ok) throw Error('Could not fetch the data 😢 Try it later...') // error coming back from server
        return res.json()
      })
      .then(data => {
        setData(data)
        setIsLoading(false)
        // Nastaveni erroru znovu na null, pokud predtim pri fetchi doslo k chybe a spustil se catch blok
        setError(null)
      })
      .catch(err => {
        // prevent update of the component that is unmounted
        if (err.name === 'AbortError') return 
        
        // auto catches network / connection error
        setIsLoading(false)
        setError(err.message)
      })      
    }, 800);
    
    // abort the fetch
    return () => abortCont.abort();
    // useEffect bude zavolano pri zmene url
  }, [url])

  // vratime si promenne, ktere chceme pouzivat
  return {data, isLoading, error}
}

export default useFetch

