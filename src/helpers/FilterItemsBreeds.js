import  { useContext } from 'react'
import { BreedsContext } from "./BreedsContext"

const FilterItems = () => {
    // State
    const {
        chunkedKey,
        currBreedKey,
        limitKey,
        orderKey,
        dogsKey,
        breedsOpenKey,
        limitOpenKey,
        breedsKey,
        breedTitleKey,
        limitTitleKey
      } = useContext( BreedsContext ); 
    
      const [currBreed, setCurrBreed] = currBreedKey;
      const [limit, setLimit] = limitKey;
      const [ order, setOrder] = orderKey;
      const [breedsOpen, setBrOpen] = breedsOpenKey;
      const [limitOpen, setLimitOpen] = limitOpenKey;
      const [breedTitle, setBreedTitle] = breedTitleKey;
      const [limitTitle, setLimitTitle] = limitTitleKey; 

    
      const handleFilterClick = (identifier, item) => {
 
          if (identifier === "Limit: 10") {
            setLimit(item.num);
            setLimitOpen(false);
            setLimitTitle(item.num)
          } else if (identifier === "All breeds") {
            setCurrBreed({ id: item.id, name: item.name });
            setBrOpen(false);
            setBreedTitle(item.name)
          } else {
              console.log("Error")
          }
      }

      const changeOrder = (value) => {
        if (value === "ASC") {
          order === "asc" ? setOrder("rand") : setOrder("asc");
        } else if (value === "DESC") {
          order === "desc" ? setOrder("rand") : setOrder("desc");
        }
      }
    
    return { handleFilterClick, changeOrder }
}

export default FilterItems
