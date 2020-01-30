import React , { Component, useState } from 'react';
import Search from './Search.js';
import Result from './Result.js';




const App = () => {
  
  const [bandnameToSearch, setBandnameToSearch] = useState("type something");
  const [discogsResult, setDiscogsResult] = useState("waiting");
  const [discogsResult1, setDiscogsResult1] = useState("");


  const [typed, setTyped] = useState(false);
  const [query, setQuery] = useState('');

  // state = {
  //   discogsResult: []
  // }

  // const handleInput = event => {
  //   const target = event.target;
  //   setLoading(true);
  //   setQuery(target.value);
  // }

  const handleChange = event => {
    const updatedSearch = { 
      [event.currentTarget.name]: event.currentTarget.value 
    };
    setQuery(updatedSearch);

    const proxyurl       = 'https://cors-anywhere.herokuapp.com/';
    const url            = 'https://api.discogs.com/database/search?q=';
    const consumerKey    = "&key=ASYxbejFTvCfHSryhgKr"
    const consumerSecret = "&secret=NPbNIIhHUrdGYgQMPWIfEyFCIGkwvNeY"
    const fullSearch     = proxyurl + url + event.currentTarget.value + '&{?artist}&per_page=100' + consumerKey + consumerSecret;
    console.log(fullSearch);
    
    const discogsArtistNames = [];

    fetch(fullSearch)
      .then(res => res.json())
      .then((data) => {
        // this.setState({ discogsResult: data });
        console.log(data);
        setDiscogsResult(data);

        for (var i = 0; i < data.results.length; i++) {
          if (data.results[i].type === 'artist') {
            // console.log(data.results[i].title);
            discogsArtistNames.push(data.results[i].title);
            console.log(discogsArtistNames);
          }
        }
        setDiscogsResult1(discogsArtistNames);
      })
      .catch((error) => {
        console.error('error: ' + error);
        console.log('error: ' + error);
        setDiscogsResult(error);
      })
  }


  

    return (
      // const { name, ...props } = this.props

       <div className="App"> 
         <Result
           discogsResult={discogsResult}
           discogsResult1={discogsResult1}

         />
         <Search
           query={query}
           handleChange={handleChange}
         />

      </div>
    );
  }
export default App;
