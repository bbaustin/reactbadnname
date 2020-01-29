import React from 'react';

class Search extends React.Component {

  handleChange = (event) => {
    const updatedSearch = { 
      [event.currentTarget.name]: event.currentTarget.value 
    };

    const proxyurl       = 'https://cors-anywhere.herokuapp.com/';
    const url            = 'https://api.discogs.com/database/search?q=';
    const consumerKey    = "&key=ASYxbejFTvCfHSryhgKr"
    const consumerSecret = "&secret=NPbNIIhHUrdGYgQMPWIfEyFCIGkwvNeY"
    
    const fullSearch     = proxyurl + url + event.currentTarget.value + '&{?artist}&per_page=100' + consumerKey + consumerSecret;
    // console.log(fullSearch);
    const discogsArtistNames = [];

    fetch(fullSearch)
      .then(res => res.json())
      .then((data) => {
        this.setState({ discogsResult: data });
        console.log(data);

        for (var i = 0; i < data.results.length; i++) {
          if (data.results[i].type === 'artist') {
            // console.log(data.results[i].title);
            discogsArtistNames.push(data.results[i].title);
            console.log(discogsArtistNames);
          }
        }
      })
      .catch((error) => {
        console.error('error: ' + error);
        console.log('error: ' + error);
      })
  }



  render() {
    const { name, ...props } = this.props
    return(
      <form method="post" action="/search">
        <input 
          type="text" 
          name="nameToSearch" 
          onChange={this.handleChange}
          value={this.props.name} 
          placeholder="What's your band name?" 
        />
        <br /> 
        <button>Try it!</button>
      </form> 
    )
  }
}

export default Search;

//value above was this.props.fish.name
