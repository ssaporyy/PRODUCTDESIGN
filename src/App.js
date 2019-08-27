import React from 'react';
import styled from 'styled-components';
import Home from '../src/components/Home'



const BG = styled.div`
    background-color: #282f41;
    color:#fb9fa4;
    background-size:cover;
    background-repeat:no-repeat;
    background-attachment: fixed;
    

`



function App() {
  return (
    <BG>
      <Home />

    </BG>
  );
}

export default App;
