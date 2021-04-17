import React, { useState, useEffect, createContext} from 'react'
import axios from 'axios'

export const DogContext = createContext()

export const DogProvider = ({ children }) => {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios('https://api.thedogapi.com/v1/images/search');
            setData(response.data[0])
            };
            fetchData(data)
    }, []);

    return (
        <DogContext.Provider value={[ data, setData]}> 
            { children }
        </DogContext.Provider>
    )
}

