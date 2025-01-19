import "primereact/resources/themes/lara-light-cyan/theme.css";
import { InputText } from "primereact/inputtext";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";

export const App = () => {
  return (
    <div className="p-4">
    <div className="flex align-items-center">
      <span className="p-inputgroup-addon">@</span>
      <InputText placeholder="Digite um número" className="flex-1" />
    </div>
  </div>
  );
};
