import React, { useState, useEffect, createContext} from 'react'
import axios from 'axios'

export const DogContext = createContext()

export const DogProvider = ({ children }) => {

    const [liked, addToLiked] = useState([]); 
    const [favorites, addToFav] = useState([]); 
    const [disliked, addToDisliked] = useState([]); 
    const [chunked, setChunked ] = useState([]);

    const [ dogs, setDogs ] = useState({})
    const [ breeds, setBreeds ] = useState({})
    
    // Fetching dogs
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios('https://api.thedogapi.com/v1/images/search?limit=20');
            setDogs(response.data)
            };
        fetchData(dogs)
    }, []);

    // Fetching breeds
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios('https://api.thedogapi.com/v1/breeds');
            setBreeds(response.data)
            };
        fetchData(breeds)
    }, []);

    return (
        <DogContext.Provider value={{ 
            likeKey: [liked, addToLiked], 
            favKey: [favorites, addToFav], 
            disKey: [disliked, addToDisliked], 
            chunkedKey: [chunked, setChunked],
            dogsKey: [dogs, setDogs],
            breedsKey: [ breeds, setBreeds ],
            }}> 
            { children }
        </DogContext.Provider>
    )
}

