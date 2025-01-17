import {InputText} from "primereact/Inputtext"
import "primereact/resources/themes/lara-light-cyan/theme.css";

import 'primeicons/primeicons.css';
import "primereact/resources/primereact.min.css"; 
import { useState } from "react";
export const App = ()=>{
 const  [valeu ,setvalue]= useState()

  return(
      <div className="mt-5 text-center  text-5xl font-light ">
        <InputText placeholder=" Digite teu nome"  className=" " onChange={(e)=> setvalue(e.target.value)} value={valeu} name="name" aria-label="Nome"/>      
        <p className="bg-red-500 p-8 block border  text-green-400 ">{valeu }</p>
        </div>

  )
}