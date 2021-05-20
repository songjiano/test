import { useEffect } from "react"

export const useMount = ( callback ) => {
  useEffect(() => {
    callback()
  }, [])
}

export const useDebounce = (fun, delay) => {
  let timeOut;
  return () => {
    if(timeOut){
      clearTimeout(timeOut)
    }
    timeOut = setTimeout(function() {
      fun()
    }, delay)
  }
}