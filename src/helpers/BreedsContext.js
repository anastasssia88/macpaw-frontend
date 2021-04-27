import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const BreedsContext = createContext();

export const BreedsProvider = ({ children }) => {
  const [dogs, setDogs] = useState({});
  const [chunked, setChunked] = useState([]);
  const [currBreed, setCurrBreed] = useState({});
  const [limit, setLimit] = useState(10);
  const [order, setOrder] = useState("rand");
  const [breeds, setBreeds] = useState({});

  // managing dropdowns
  const [breedsOpen, setBrOpen] = useState(false);
  const [limitOpen, setLimitOpen] = useState(false);
  const [title, setTitle] = useState("No title")

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios("https://api.thedogapi.com/v1/breeds");
      setBreeds(response.data);
    };
    fetchData();
  }, []);

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
        breedsKey: [breeds, setBreeds],
      }}
    >
      {children}
    </BreedsContext.Provider>
  );
};
