import React from 'react';
import './Main.css';
import  ProfilPhoto  from "./profile/ProfilPhoto";
import  FullName from "./profile/FullName";
import Adress  from "./profile/Adress";

function Main() {
    return (
      <div>
  <ProfilPhoto />
  <FullName />
  <Adress /> 
      </div>
    );
  }
  
  export default Main;