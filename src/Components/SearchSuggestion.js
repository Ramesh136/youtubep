import React from 'react'
import { Link } from 'react-router-dom'

const SearchSuggestion = ({suggestions ,setValue}) => {
  return (
    <div
    className='mt-1 p-2 absolute flex flex-col bg-white gap-2 rounded-3xl border '>
        {suggestions && 
        
        suggestions.map((suggestion , index)=>{
            return <Link key={index} to={'/search?q='+suggestion}>
                <h2  className='border-b rounded p-1
            hover:bg-gray-300 cursor-pointer'
            onClick={()=>{
                console.log(suggestion)
                setValue(suggestion)}}>🔍 {suggestion}</h2>
            
            </Link> 
            
            
        })
        }
        
        
    </div>
  )
}

export default SearchSuggestion