import {MultiSelect} from "primereact/multiselect"
import "primereact/resources/themes/lara-light-cyan/theme.css";

import 'primeicons/primeicons.css';
import "primereact/resources/primereact.min.css"; 
import { useState } from "react";
export const App = ()=>{

  const [valeu , setvalue]= useState("");

   const options = [
    {label : "Opção A" , Valeu :  1},
    {label : "Opção b" , Valeu :  2},
    {label : "Opção c" , Valeu :  3},
    {label : "Opção d" , Valeu :  4}
   ]
  return(
    <div className="p-4">
        <MultiSelect options={options}  value={valeu} placeholder="Escolhe as suas opções" onChange={(e)=> setvalue(e.value)}  />
    </div>
  )
}