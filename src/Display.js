import React from "react";
import { context } from "./App";
function Display(){
    return<>
    <h1 style={{textAlign:'center',color:'red'}}>Display component called :
    
    <context.Consumer>
        {
            (data)=><b>{data}</b>
        }
    </context.Consumer>
    </h1>
    </>
 }

 export default Display;