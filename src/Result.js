import React from 'react';

class Result extends React.Component {
  render() {
    const apiResult = "results coming in..."
    return(
      <div>
        <p>Result: {apiResult}</p>
      </div>
    )
  }
}

export default Result;
