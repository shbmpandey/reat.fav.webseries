import React  from "react";
import Card from "./Card";
import Netdata from "./Netdata";

function Netall(val){
    return(
    <Card
    imgscr={val.imgscr}
    sname={val.sname}
    title={val.title}
    link={val.link}
            
    />
    );
}

function Netflix(){
      return(<>
      {Netdata.map(Netall)}

      </>);

}
export default Netflix;