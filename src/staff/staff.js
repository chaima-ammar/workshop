import React from "react";
import "./staff.css"
import Member from "./member"



function Staff(props) {
  return ( <div>
   

  <h1>Simplon's Staff</h1>
  <div >

{ props.staff.map(  el  =>   <Member el={el} />



)}


  </div>
  
 
</div>
  );
}

export default Staff;
