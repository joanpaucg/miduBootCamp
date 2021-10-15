
import { useState,React } from "react";
export const Toggable=({children,buttonLabel})=>{
     const [visible,setVisible]=useState(false)
    const showWhenIsVisible={display:visible?"":"none"}
    const hideWhenIsVisible={display:visible?"none":""}
    return (<div>
    <div style={hideWhenIsVisible}>
    <button onClick={()=>{setVisible(true)}}>{buttonLabel}</button>
    </div>
    <div style={showWhenIsVisible}>
      {children}
      <button onClick={()=>{setVisible(false)}}>Cancel</button>
      
    </div>
    
    </div>)
}