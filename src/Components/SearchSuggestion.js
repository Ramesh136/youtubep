import React from 'react'

const SearchSuggestion = ({suggestions}) => {
  return (
    <div
    className='mt-1 p-2 absolute flex flex-col bg-white gap-2 rounded-3xl border '>
        {suggestions && 
        
        suggestions.map((suggestion , index)=>{
            return <h2 key={index} className='border-b rounded p-1
            hover:bg-gray-300 cursor-pointer'>🔍 {suggestion}</h2>
        })
        }
        
        
    </div>
  )
}

export default SearchSuggestion