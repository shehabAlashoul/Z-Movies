import axios from 'axios'
import React, { createContext, useCallback, useState } from 'react'

export const PeopleContext = createContext()

export default function PeopleProvider({children}) {
    const baseUrl = "https://api.themoviedb.org/3";
    const [Loading, setLoading] = useState(false)
    const [Error, setError] = useState(null)
    const [PopularPeople, setPopularPeople] = useState(null)

    const getPopularPeople = useCallback(
     async (time = "day") => {
        try{
            setLoading(true)
            setError('')
            const {data} = await axios.get(`${baseUrl}/trending/person/${time}?language=en-US`,{
                headers: {
                  accept: "application/json",
                  Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDRkM2FmZGQ4ZjRhNzg1NzAzM2UxN2ZjODk1MTcyYiIsInN1YiI6IjY2NDEzMGFlMTA4ODkyMjE2YTAxNTE4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iXTeYdpL0Evcjqpcs4Llbrz91J0G3UuaaneU84AIMY4",
                },
              })
            setPopularPeople(data)
        }catch(error){
            setError(error)
        }finally{
            setLoading(false)
        }
      },
      [],
    )
  return (
    <PeopleContext.Provider value={{Loading,Error,getPopularPeople,PopularPeople}}>
        {children}
    </PeopleContext.Provider>
  )
}
