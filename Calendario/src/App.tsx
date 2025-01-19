import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Calendar } from "primereact/calendar";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css"; 
import { useState } from "react";

export const App = () => {
  const [data, setData] = useState(null); // Estado para armazenar a data selecionada

  return (
    <div className="p-4">
      <h3>Selecione sua data de nascimento:</h3>
      <Calendar
        placeholder="Escolha sua data de nascimento"
        value={data} // Vincula o estado ao componente Calendar
        onChange={(e) => setData(e.value)} // Atualiza o estado com o valor selecionado
        dateFormat="dd/mm/yy" // Formato da data
      />

      <p className="mt-4">
        Data selecionada: {data ? data.toLocaleDateString() : "Nenhuma data selecionada"}
      </p>
    </div>
  );
};
