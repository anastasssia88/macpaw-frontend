import React, { useState, createContext } from "react";

export const BreedsContext = createContext();

export const BreedsProvider = ({ children }) => {
  const [dogs, setDogs] = useState({});
  const [chunked, setChunked] = useState([]);
  const [currBreed, setCurrBreed] = useState({});
  const [limit, setLimit] = useState(10);
  const [order, setOrder] = useState("rand");

  // managing dropdowns
  const [breedsOpen, setBrOpen] = useState(false);
  const [limitOpen, setLimitOpen] = useState(false);

  // Fetching dogs
  // useEffect(() => {
  //     const fetchData = async () => {
  //         const response = await axios('https://api.thedogapi.com/v1/images/search?limit=20');
  //         setDogs(response.data)
  //         };
  //     fetchData(dogs)
  // }, []);

  return (
    <BreedsContext.Provider
      value={{
        chunkedKey: [chunked, setChunked],
        currBreedKey: [currBreed, setCurrBreed],
        limitKey: [limit, setLimit],
        orderKey: [order, setOrder],
        dogsKey: [dogs, setDogs],
        breedsOpenKey: [breedsOpen, setBrOpen],
        limitOpenKey: [limitOpen, setLimitOpen],
      }}
    >
      {children}
    </BreedsContext.Provider>
  );
};
