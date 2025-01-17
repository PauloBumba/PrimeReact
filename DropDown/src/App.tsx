import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export const App = () => {
  const [value, setValue] = useState(null); // Estado inicial corrigido

  const options = [
    { label: "Opção 1", value: 1 },
    { label: "Opção 2", value: 2 },
    { label: "Opção 3", value: 3 },
    { label: "Opção 4", value: 4 },
    { label: "Opção 5", value: 5 },
  ];

  return (
    <div className="p-4">
      <Dropdown
      
        options={options}
        value={value}
        placeholder="Selecione uma opção"
        onChange={(e) => setValue(e.value)} // Corrigido para usar onChange
      />
      <div className="mt-3">Valor selecionado: {value}</div>
    </div>
  );
};
