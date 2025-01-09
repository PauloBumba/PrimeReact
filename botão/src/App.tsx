import {Button} from "primereact/button";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeflex/primeflex.css";
import 'primeicons/primeicons.css';
import { Card } from 'primereact/card';
function App() {
  return (
    <>
      <div className=" container   mt-5 p-5  gap-2">
        <Button label="clica aqui" icon="pi pi-check" className="p-button-primary mx-2 "/>
        <Button label="clica aqui" icon="pi pi-check" className="p-button-success mx-2 "/>
        <Button label="clica aqui" icon="pi pi-check" className="p-button-danger mx-2"/>
        <Button label="clica aqui" icon="pi pi-check" className="p-button-help mx-2"/>
        <Button label="clica aqui" icon="pi pi-check" className="p-button-text mx-2"/>
        <Button label="clica aqui" icon="pi pi-check" className="p-button-info mx-2"/>
        <Button label="clica aqui" icon="pi pi-check" className="p-button-secondary mx-2"/>
        <Button label="clica aqui" icon="pi pi-check" className="p-button-warning mx-2"/>
        <Button label="clica aqui" icon="pi pi-check" className="p-button-outlined mx-2 rounded" />
      </div>
      <div className="container mt-5">
     
    </div>
    </>
  );
}

export default App;
