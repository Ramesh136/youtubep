import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { togglemenu } from '../utils/appSlice'
import SearchSuggestion from './SearchSuggestion'
import {suggestion_api}  from './../utils/api'
import { cacheResults } from '../utils/suggestionSlice'


const Header = () => {

  const dispath = useDispatch()
  const MenuHandler = ()=>{  
    dispath(togglemenu())
  }

  const searhCache = useSelector((store)=>store.suggestion)


const [searchVal ,setSearchVal] = useState('')

const [suggestions ,setSuggestions] = useState([])
const [suggestionBox , setSuggestionBox] = useState(true)



useEffect(()=>{

  const getSearchSuggestion = async()=>{

    const data = await fetch(suggestion_api+searchVal)
    const json = await data.json()
    setSuggestions(json[1])
    dispath(cacheResults({
      [searchVal] : json[1]
    }))
  }

    const timer = setTimeout(()=>{
      if(searhCache[searchVal]){
        setSuggestions(searhCache[searchVal])
        console.log(searchVal+' api cancelled')
      }
      else{
        getSearchSuggestion()
      }
       
    },200)

return ()=> {
  clearTimeout(timer)
}
  
},[searchVal ])


  return (
    <div className='grid grid-flow-col p-3 m-2'>
        <div className='flex col-span-1'>
            <img 
            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAY1BMVEX///8AAADIyMgjIyPc3NzPz8/Z2dk/Pz8eHh69vb0uLi7n5+f6+vonJyf39/fg4OCnp6fw8PCWlpZ8fHyenp6CgoKysrJKSkoZGRlnZ2cUFBQMDAxERERiYmJVVVVzc3OKioqYpew7AAACkUlEQVR4nO3d7dKaMBCGYQQDCgqICKK+6vkfZTu1TnWm5OPXZvW+jmB3IhDIk5gkAAAAAAAAAAAAkLepTBoxU238W1l3tyJbRSsrbt3asx1z2C6itz0Yn17ai3Shfi6tu5fuJF2lr1PnHJezdI3+zo6xSQvpCkMUqa2X3V66vjD7nW1gVtLlhVlZhmbTS1cXqp9/3FQ/0sWF+qlmm8mV/coWiyyfbcZI1xZufh5AM7Lmm8mP0rWFOs9fM9UkXVyoaf5uVnfSxYXq6tlmklTNlPnhZJuc7Q7S5YU52OZmHzVrTjZtJl2hv6x1fAioezVvZ+fecvX/7WaQLtLX4Ozlt+oqXaaP6/wT5l2zj/wWfbo1nq08hqdZRqvxHRQAAAAAAAAAs2qzjpjx+cr8tL6NRRmxYrytPVtZjgoWnY/j0qcXNWGg3t2LolXNg3NcIl/MeHVyjM0nLdASaxRkizXWau5kT5YFZ2KNoo7EGmP1Jc3ou2a2XxJr/Kj4fJIq2KD1avs9sUajZMPZw8Wxia5V8Mr8dHRuoVMUbXZuoEuSoZQu0k85uHtJkmZS0E45+WYB0/s0FhEbp7s90fyuzqU3Y9vkIV80AQAAAAAAAPzPpjERa/wPa0xqE/3a5uQZ06zzUbpUH2PuMTw7NYu0rXUN8E8vdz1naNwd3dS9pmVAx4kgqYJ1pn/KL4o1SlcXyhZrVLTU/GA5RUvHiTOvLKfP5Gpuy0+Wk+c+KjxHM7IssUZlcbMvijW20sWFsp0991mxxrt0eWHsLwFGxVvm0+iINQ6KctorZ3xOz9mTmce/HAxKZptXr1hj3il43Sy7+cflm41p9+M2i9Z23Lcm4Dvgrskj1jg/MgEAAAAAAAAAAETrF2CqZbbFeuA9AAAAAElFTkSuQmCC'
            alt='menu-icon'
            className='h-8'
            onClick={MenuHandler}
            />
           <img 
            src='data:image/jpeg;base64,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'
            alt='youtube-logo'
            className='h-8 px-3'
          />
            
        </div>
        <div className='col-span-10 px-10'>
            <input
            className='px-9 w-1/2 border p-2 border-gray-400 rounded-l-full'
            onChange={(e)=>{setSearchVal(e.target.value)}}
            onFocus={()=>setSuggestionBox(true)}
            onBlur={()=>setSuggestionBox(false)}
            >
            </input>
            <button
            className='border px-5 p-2 border-gray-400 rounded-r-full bg-gray-300'
            >
            🔍
            </button>
            {suggestionBox && <SearchSuggestion suggestions ={suggestions}/>}

        </div>
        <div className='col-span-1'>
        <img 
            src='data:image/png;base64,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'
            alt='profile-icon'
            className='h-8'
            />
        </div>
    </div>
  )
}

export default Header