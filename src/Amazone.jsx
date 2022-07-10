import React  from "react";
import Card from "./Card";
import AMdata from "./Amdata";

function Amall(val){
    return(
    <Card
    imgscr={val.imgscr}
    sname={val.sname}
    title={val.title}
    link={val.link}
            
    />
    );
}

function Amazone(){
      return(<>
      {AMdata.map(Amall)}

      </>);

}
export default Amazone;