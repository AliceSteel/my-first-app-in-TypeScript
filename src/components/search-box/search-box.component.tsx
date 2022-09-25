import React, { ChangeEventHandler } from 'react'
import './search-box-styles.css';

type SearchBoxProps = {
	placeholder?: string;
	handleChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchBox = ({ placeholder, handleChange }: SearchBoxProps) => {
  return (
    <input 
        className='search'
        type='search' 
        placeholder={ placeholder } 
        onChange={ handleChange }
    />
  )
}

export default SearchBox