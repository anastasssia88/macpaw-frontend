import React, { useState, useContext } from 'react'
import { DogContext } from "./DogContext"

const Select = () => {
    const { selectedKey } = useContext( DogContext );
    const [ selected , setSelected ] = selectedKey

    const handleSelectedClick = (dog) => {
        setSelected(dog)
        console.log(selected)
    }
    
    
    return { handleSelectedClick } 
}

export default Select
