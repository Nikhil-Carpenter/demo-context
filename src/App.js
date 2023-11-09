import './App.css';
import React from 'react';
import Show from './Show';
import Wish from './Wish';
import Display from './Display';
export const context = React.createContext()

function App() {
  var name = "Mahi"
  return (
    <div className="App">
      <h1 style={{textAlign:'center',color:'red'}}>Main Component Called:{name}</h1>

      <context.Provider value={name} >

     <Show/>
     {/* <Display/> */}
      </context.Provider>

    </div>
  );
}

export default App;
