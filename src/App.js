import React from 'react';
import './App.css';
import './style.css'
import myImage from "./imageInSrc.jpg"

function App() {
  return (
    <div className="App">
      <div border="1px solid black" max-width="100vw" >

        <h1 class="title red">Mahatma Gandhi</h1>

        <br />

        <img className='picture1' src={myImage} alt='pictur' />

        <br />

        <img className='picture2' src="/imageInPublic.jpg" alt='phot' />

        </div>

        <video width="320" height="240" controls src="/Une vie _ Gandhi.mp4" type="video/mp4" >

        </video> 
    </div>
  );
}

export default App;
