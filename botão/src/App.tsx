import {Button} from "primereact/button";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeflex/primeflex.css";
import 'primeicons/primeicons.css';
import "primereact/resources/primereact.min.css"; 

function App() {
  return (
    <>
      <div className="row  my-5 p-5  ">
        <Button label="clica aqui" icon="pi pi-check" className="p-button-primary mx-2  "/>
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

   <div className="my-5   bg-primary-reverse p-5 md-hidden">
    <Button icon="pi pi-plus " label="Addcionar" className="p-button-success mr-2  border-white"/>
    <Button icon="pi pi-pencil " label="Edital"    className="p-button-warning mr-2"/>
    <Button icon="pi pi-trash " label="Excluir" className="p-button-danger mr-2"/>
    <Button icon="pi pi-eye " label="visualizar" className="p-button-info mr-2 mt-2"/>
    
    <Button icon="pi pi-eye " label="visualizar" className="p-button-info mr-2 mt-2"/>

   </div>
   
    </>
  );
}

export default App;
