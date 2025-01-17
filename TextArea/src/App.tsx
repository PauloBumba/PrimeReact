import { InputTextarea } from "primereact/inputtextarea";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";

export const App = () => {
  return (
    <div>
      <div className="container text-center mt-5">
        <InputTextarea 
          rows={10} 
          cols={15} 
          placeholder="Digite aqui sua mensagem" 
          style={{ color: "black" }} // Usando a propriedade style para definir a cor
        />    
      </div>
    </div>
  );
};
