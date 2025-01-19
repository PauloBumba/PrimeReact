import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Password } from "primereact/password";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css"; 
import { useState } from "react";

export const App = () => {
  const [password, setPassword] = useState("");
  console.log(password  )
  return (
    <div className="p-4">
      <h3>Informe sua palavra-passe:</h3>
      <Password
        toggleMask
        placeholder="Informe a sua palavra-passe"
        onChange={(e) => setPassword(e.target.value)} // Corrige o acesso ao valor
        value={password} // Vincula o valor ao estado
        feedback={true} // Exibe a força da senha
      />

      <p className="mt-4">
        Sua palavra-passe: {password }

        
      </p>
    </div>
  );
};
