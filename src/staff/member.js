import React from "react";
import "./staff.css"



function Member(props) {
  return ( <div>
   <h2>{ props.el.name }</h2>
   <p> {props.el.role} </p>
  


 
</div>
  );
}

export default Member;
