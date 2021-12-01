import React from 'react'

function Search(props) {
    return (
        <div>
            <input 
                onChange={props.onSearchChange} 
                type="text" 
                name="search" 
                placeholder="Enter Search"
            />
        </div>
    )
}

export default Search
