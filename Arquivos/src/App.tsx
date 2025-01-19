
import "primereact/resources/themes/lara-light-cyan/theme.css";
import {  FileUpload} from "primereact/fileupload";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css"; 
import { useState } from "react";

export const App = ()=>
{
  return(
    <div>
      <FileUpload  mode="basic" accept="image/*"  maxFileSize={10000 } url="/" name="demo[]"/>
    </div>)
}