import React from 'react'

function Search({handleInput, search}) {
    return (
        <section className="searchbox-wrap">
            <input 
            type="text"
             onChange={handleInput} 
             placeholder="Search For a movie...." 
             className="searchbox"
             onKeyPress={search}
             />

        </section>
    )
}

export default Search
