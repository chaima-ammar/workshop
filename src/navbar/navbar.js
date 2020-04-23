import React from "react";
import logosimp from "./images/logosimp.png";
import "./Navbar.css";

 // Logo Component 

function Logo() {
  return <img src={logosimp} alt="logo de Simplon Tunisie" />;
}



const list = [

{name:"Acceuil",link:"https://www.google.com/"},
{name:"About us",link:"https://www.google.com/"},
{name:"Equipe",link:"https://www.google.com/"}

]




function Navbar(props) {
  return ( <div>
    <nav className="navbar">
   <Logo />
    <div className="links">

      {  list.map(   element  =>   <a href={element.link}>{element.name}</a> )    }



    </div>
  
  </nav>

  
  
 
</div>
  );
}

export default Navbar;
