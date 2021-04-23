import React, { useState, useEffect, createContext} from 'react'
import axios from 'axios'

export const DogContext = createContext()

export const DogProvider = ({ children }) => {

    const [liked, addToLiked] = useState([]); 
    const [favorites, addToFav] = useState([]); 
    const [disliked, addToDisliked] = useState([]); 
    const [chunked, setChunked ] = useState([]);
    const [ log, setLog ] = useState([]) 


    const [ dogs, setDogs ] = useState({})
    const [ breeds, setBreeds ] = useState({})
    const [ currBreed , setCurrBreed ] = useState({})
    const [ limit , setLimit ] = useState(10)
    const [ order,  setOrder ] = useState('rand') 
    
    // Fetching dogs
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await axios('https://api.thedogapi.com/v1/images/search?limit=20');
    //         setDogs(response.data)
    //         };
    //     fetchData(dogs)
    // }, []);

    // Fetching breed names
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios('https://api.thedogapi.com/v1/breeds');
            setBreeds(response.data)
            };
        fetchData(breeds)
    }, [breeds]);

    return (
        <DogContext.Provider value={{ 
            likeKey: [ liked, addToLiked ], 
            favKey: [ favorites, addToFav ], 
            disKey: [ disliked, addToDisliked ], 
            chunkedKey: [ chunked, setChunked ],
            dogsKey: [ dogs, setDogs ],
            breedsKey: [ breeds, setBreeds ],
            currBreedKey: [ currBreed, setCurrBreed ],
            limitKey: [ limit, setLimit ],
            orderKey: [ order, setOrder ],
            logKey: [ log, setLog ]
            }}> 
            { children }
        </DogContext.Provider>
    )
}
