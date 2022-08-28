import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({ items, isLoading }) => {

  return isLoading ?( <Spinner/> )   //Terniary Operator True hai to Spinner me jaiga
  :(                   // False --> niche wala code chlega aur Character Item me jaiga
   
   <section className='cards'>
       {items.map((item) => (
        <CharacterItem item={item}></CharacterItem>  //Using Props again
       
       ))}
   </section>
   )
   
}

export default CharacterGrid
