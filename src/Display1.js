import React from "react";
// import { context } from "./App1";
import myContext from './MyContext'

function Display1(){
    return<>
    <h1 style={{textAlign:'center',color:'red'}}>Display1 component called :
    
    <myContext.Consumer>
        {
            (data)=><b>{data}</b>
        }
    </myContext.Consumer>
    </h1>
    </>
 }

 export default Display1;