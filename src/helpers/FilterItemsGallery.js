import  { useContext } from 'react'
import { GalleryContext } from "./GalleryContext"

const FilterItems = () => {
    const {
        orderTitleKey,
        typeTitleKey,
        currBreedTitleKey, 
        limitTitleKey,
        orderKey,
        typeKey, 
        currBreedKey,
        limitKey,
      } = useContext( GalleryContext ); 

    const [order, setOrder] = orderKey;
    const [type, setType] = typeKey
    const [currBreed, setCurrBreed] = currBreedKey
    const [limit, setLimit] = limitKey

    const [orderTitle, setOrderTitle] = orderTitleKey
    const [typeTitle, setTypeTitle] = typeTitleKey
    const [currBreedTitle, setCurrBreedTitle] = currBreedTitleKey
    const [limitTitle, setLimitTitle] = limitTitleKey
    

    const handleFilterClick = (identifier, {id, name, state}) => {
        if (identifier === "order") {
            setOrder(state)
            setOrderTitle(name)
        } else if (identifier === "type") {
            setType(state)
            setTypeTitle(name)
        } else if (identifier === "breed") {
            setCurrBreed({id: id, name: name})
            setCurrBreedTitle(name)
        } else if (identifier === "limit") {
            setLimit(state)
            setLimitTitle(name)
        }

    }
    
    return { handleFilterClick }
}

export default FilterItems
