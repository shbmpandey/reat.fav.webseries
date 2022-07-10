import React, { useState } from "react";
import Amazone from "./Amazone";

import "./index.css";

import Netflix from './Netflix'






function App(){
const [def, Sdef]=useState(<Amazone/>)
function Aplat(){
        Sdef(<Amazone/>);
   };
function Nplat(){
           
        Sdef(<Netflix/>);
        
      };


         return(<>
                <h1 className="heading_style">Webseries World</h1>
                <h1 className="heading_style">
                        <span className="heading_style">Choose Platform</span>
                        <input type="radio" name="Platform" onChange={Aplat} />Amazone
                        <input type="radio" name="Platform" onChange={Nplat}/>Netflix

                </h1>
                {def}
                 
                </>

         );

}


export default App;