import { RadioButton } from "primereact/radiobutton";
import { useState } from "react";
import "primereact/resources/themes/lara-light-cyan/theme.css";

import 'primeicons/primeicons.css';
import "primereact/resources/primereact.min.css"; 
export const App = () => {
  const [selectedValue, setSelectedValue] = useState(null); // Estado para controlar o valor selecionado

  return (
   <div className=" shadow-8 m-8">
    <div className="p-4">
  {/* Botão de rádio 1 */}
  <div className="field-radiobutton">
    <RadioButton
      inputId="option1"
      name="group"
      value="1"
      onChange={(e) => setSelectedValue(e.value)}
      checked={selectedValue === "1"}
    />
    <label htmlFor="option1">Opção 1</label>
  </div>

  {/* Botão de rádio 2 */}
  <div className="field-radiobutton">
    <RadioButton
      inputId="option2"
      name="group"
      value="2"
      onChange={(e) => setSelectedValue(e.value)}
      checked={selectedValue === "2"}
    />
    <label htmlFor="option2">Opção 2</label>
  </div>

  {/* Valor selecionado */}
  <div className="mt-4">
    Valor selecionado: {selectedValue }
  </div>
</div>

   </div>  
  );
};
