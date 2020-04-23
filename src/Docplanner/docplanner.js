import React from "react";
import Card from './card'
import './docplanner.css'

const cards= [
    {title:"1.5 million appointments",desc:"booked last month",logo:"https://www.docplanner.com/img/visits.png"},
    {title:"Leader in 10 countries",desc:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile",logo:"https://www.docplanner.com/img/flag.png"},
    {title:"2 million active doctors",desc:"trust in our solutions",logo:"https://www.docplanner.com/img/doctors.png"},
    {title:"30 million unique patients",desc:"visit us every month",logo:"https://www.docplanner.com/img/patients.png"},

]


function Docplanner(props) {
  return ( <div>

   <div className="fenetres">
       <p className="titre">The world's</p>
          <p className="titre">biggest healthcare platform</p>
          <p className="avantder3">We work from 6 offices all over the world, bringing Docplanner</p> 
          <p className="avantder3">Group to life in almost 20 countries.</p>
          <img id="fenetre1" src="https://www.docplanner.com/img/logo.png" /> 
        </div>

    { cards.map(el =>   <Card listofcard={el}  />   )}
        
     
     
      </div>


  
 

  );
}

export default Docplanner;
