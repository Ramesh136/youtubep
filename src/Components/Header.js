import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { togglemenu } from '../utils/appSlice'
import SearchSuggestion from './SearchSuggestion'
import {suggestion_api}  from './../utils/api'
import { cacheResults } from '../utils/suggestionSlice'
import { Link } from 'react-router-dom'
import {MenuIcon,UserSquare2Icon } from 'lucide-react'


const Header = () => {

  const dispath = useDispatch()
  const MenuHandler = ()=>{  
    dispath(togglemenu())
  }

  const searhCache = useSelector((store)=>store.suggestion)


const [searchVal ,setSearchVal] = useState('')

const [suggestions ,setSuggestions] = useState([])
const [suggestionBox , setSuggestionBox] = useState(false)



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
    <div className='w-full grid grid-flow-col p-3 m-2 absolute'>
        <div className='flex col-span-1'>
            <MenuIcon 
            className='h-8'
            onClick={MenuHandler}/>
            <Link to={'/'}>
            
            <img 
            src='data:image/jpeg;base64,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'
            alt='youtube-logo'
            className='h-8 px-3'
          /></Link>
           
            
        </div>
        <div className='col-span-10 px-10'>
            <input
            className='px-9 w-1/2 border p-2 border-gray-400 rounded-l-full'
            onChange={(e)=>{setSearchVal(e.target.value)}}
            onFocus={()=>setSuggestionBox(true)}
            onBlur={()=>{
              setTimeout(()=>{
                setSuggestionBox(false)
              },200)
              }}
            value={searchVal}
            >
            </input>
            <Link to={'/search?q='+searchVal}>
            <button
            className='border px-5 p-2 border-gray-400 rounded-r-full bg-gray-300'
            >
            🔍
            </button>
            </Link>
            
            {suggestionBox && <SearchSuggestion suggestions ={suggestions} setValue={setSearchVal}/>}

        </div>
        <div className='col-span-1 items-center'>
          <UserSquare2Icon className='pt-1 h-8' />
        </div>
    </div>
  )
}

export default Header