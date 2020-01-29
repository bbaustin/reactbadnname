import React , { Component, useState } from 'react';
import Search from './Search.js';
import Result from './Result.js';
import Contacts from './Contacts.js';



const App = () => {
  
  const [bandnameToSearch, setBandnameToSearch] = useState("type something");
  const [discogsResult, setDiscogsResult] = useState("waiting");
  // state = {
  //   discogsResult: []
  // }


  

    return (
     <div className="App"> 
       <Search 
          bandnameToSearch={bandnameToSearch}
        />
        <Result
          discogsResult={discogsResult}
        />
      </div>
    );
  }
export default App;
