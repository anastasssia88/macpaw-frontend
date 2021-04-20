import React, { useState, useEffect, createContext} from 'react'
import axios from 'axios'

export const DogContext = createContext()

export const DogProvider = ({ children }) => {

    const [liked, addToLiked] = useState([]); 
    const [favorites, addToFav] = useState([]); 
    const [disliked, addToDisliked] = useState([]); 
    const [chunked, setChunked ] = useState([]);

    useEffect(() => {
        if (liked.length > 0) {
            const temporary = [...liked];
            const result = []
            while (temporary.length > 0) {
                result.push(temporary.splice(0, 10))
                // debugger
            }
            setChunked(result)
        }
    }, [liked]);


    return (
        <DogContext.Provider value={{ likeKey: [liked, addToLiked], favKey: [favorites, addToFav], disKey: [disliked, addToDisliked], chunkedKey: [chunked, setChunked]} }> 
            { children }
        </DogContext.Provider>
    )
}

