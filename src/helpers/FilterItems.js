import React, { useContext } from 'react'
import { BreedsContext } from "./BreedsContext"

const FilterItems = () => {
    // State
    const {
        currBreedKey,
        limitKey,
        orderKey,
        breedsOpenKey,
        limitOpenKey,
        breedsKey
      } = useContext(BreedsContext); 
    
      const [currBreed, setCurrBreed] = currBreedKey;
      const [limit, setLimit] = limitKey;
      const [ setOrder] = orderKey;
      const [breedsOpen, setBrOpen] = breedsOpenKey;
      const [limitOpen, setLimitOpen] = limitOpenKey;
      const [breeds, setBreeds] = breedsKey;
 

    
      const handleFilterClick = (identifier, item) => {

          if (identifier === "Limit: 10") {
            setLimit(item.num);
            setLimitOpen(false);
          } else if (identifier === "All breeds") {
            setCurrBreed({ id: item.id, name: item.name });
            setBrOpen(false);
          }
      }
    
    return { handleFilterClick }
}

export default FilterItems
