import React from 'react';
import logo from './logo.svg';
import './App.css';
import './navbar/navbar'
import Header from './header/header'
import Navbar from './navbar/navbar';
import Apprenants from './apprenants/apprenants'
import Staff from './staff/staff'
import Docplanner from './Docplanner/docplanner'
const company = "Simplon"

const staff = [
  {name:"Mouna",role:"Gerante"},
  {name:"Sirine",role:"CME"},
  {name:"Elli ysi7 barcha",role:"Formateur"}
]

const apprenants = [
  {name : "Amira" , age : 30},
  {name : "Feryel" , age : 30},
  {name : "Nessrine" , age : 30}, 
  {name : "Salim" , age : 30},
  {name : "Mohieddine" , age :30}
]

function App() {
  return (
    <div className="App">
      <Navbar   />
    <Header  company = {company} />
    <Apprenants   apprenants= {apprenants}  />

    <div ><Staff staff = {staff} /></div> 
<div><Docplanner /></div>
    </div>
  );
}

export default App;
