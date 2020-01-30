import React , { Component, useState } from 'react';
import Search from './Search.js';
import Result from './Result.js';



const App = () => {
  
  const [bandname, setBandname] = useState("");
  const [discogsResult, setDiscogsResult] = useState("waiting");
  const [discogsResult1, setDiscogsResult1] = useState("waiting");

  const proxyurl       = 'https://cors-anywhere.herokuapp.com/';
  const url            = 'https://api.discogs.com/database/search?q=';
  const consumerKey    = "&key=ASYxbejFTvCfHSryhgKr"
  const consumerSecret = "&secret=NPbNIIhHUrdGYgQMPWIfEyFCIGkwvNeY"

  const handleInput = event => {
    const target = event.target;
    console.log(target)
    // setLoading(true);
    setBandname(target.value);
  }

  const handleChange = event => {
    // const updatedSearch = { 
    //   [event.target.name]: event.target.value 
    // };
    setBandname(target.value);
    const fullSearch = proxyurl + url + bandname + '&{?artist}&per_page=100' + consumerKey + consumerSecret;
    console.log(fullSearch)

    const discogsArtistNames = [];

    fetch(fullSearch)
      .then(res => res.json())
      .then((data) => {
        // this.setState({ discogsResult: data });
        setDiscogsResult(data);

        console.log(data);

        for (var i = 0; i < data.results.length; i++) {
          if (data.results[i].type === 'artist') {
            console.log(data.results[i].title);
            discogsArtistNames.push(data.results[i].title);
            console.log(discogsArtistNames);
          }
        }
        setDiscogsResult1(discogsArtistNames);
        console.log(discogsArtistNames);
      })
      .catch((error) => {
        console.error('error: ' + error);
        console.log('error: ' + error);
      })
  }

    return (
     <div className="App"> 
          <Result
            discogsResult={discogsResult}
            bandname={bandname}
         />
          <Search 
            onInput={handleInput}
            onChange={handleChange}

          />
    </div>
  );
}
export default App;
