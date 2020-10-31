import React, { Fragment } from 'react';
import BackgroundImage from './components/BackgroundImage';

function App() {
  const randomFrom = arr => arr[Math.floor(Math.random() * arr.length)];

  return(
    <Fragment>
      <BackgroundImage 
        randomFrom={randomFrom}
      />
    </Fragment>
  )
}

export default App;
