import React from 'react';

const Search = props => (

      <form onSubmit={e => e.preventDefault()}>
        <input 
          type="text" 
          name="nameToSearch" 
          placeholder="What's your band name?" 
          onChange={props.handleChange}
          value={props.name} 
        />
        <br /> 
        <button>Try it!</button>
      </form> 
    )
  


export default Search;
