import React from 'react';

const Search = props => {

    return(
      <div>
        <p>search something</p>
        <form method="post" action="/search">
          <input 
            type="text"
            placeholder="search for a title" 
            onChange={props.handleInput} 
            value={props.bandname}
          />
          <br /> 
          <button onSubmit={e => e.preventDefault()}>Try it!</button>
        </form> 
      </div>
    )
}

export default Search;

