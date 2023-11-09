import './App.css';
import React from 'react';
// import Show from './Show';
// import Wish from './Wish';
// import Display from './Display';
import Show1 from './Show1';
import myContext from './MyContext'
export const context = React.createContext()

function App1() {
  var name = "Mahi"
  return (
    <div className="App">
      <h1 style={{textAlign:'center',color:'red'}}>Main Component Called:{name}</h1>

      <myContext.Provider value={name} >

     <Show1/>
     {/* <Display/> */}
      </myContext.Provider>

    </div>
  );
}

export default App1;
