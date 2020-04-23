import React from "react";




function Card(props) {
  return ( <div>
 
            <div className= "fenetre2">
        <img className="pho1" src={props.listofcard.logo} />
         <p className="phs1">{props.listofcard.title}</p>
         <p className="avantder">{props.listofcard.desc}</p>
             </div>
      
 
 
</div>
  );
}

export default Card;
