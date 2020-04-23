import React from "react";




function Apprenants(props) {
  return ( <div>
   

  <h1> la liste des Apprenants</h1>
<div className="Apprenants">


{ props.apprenants.map(  el =>
    <div>
<div> Apprenant : {el.name}</div>

<div> Age : {el.age}</div>
    </div>
    )}



 </div>
  
 
</div>
  );
}

export default Apprenants;