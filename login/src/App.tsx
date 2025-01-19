import "primereact/resources/themes/lara-light-cyan/theme.css";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";

function App() {
  return (
    <div className="flex justify-content-center align-items-center h-screen">
      <div className="border-1 surface-border shadow-8 rounded-4 p-4" style={{ width: "400px" }}>
        <h1 className="font-light mb-5 text-center">Entre com sua conta</h1>
        <div className="mb-4">
          <label htmlFor="email" className="font-light block mb-2">Endereço de email</label>
          <div className="p-inputgroup">
            <div className="p-inputgroup-addon">
              <i className="pi pi-envelope"></i>
            </div>
            <InputText placeholder="Digite seu email" id="email" className="w-full" />
          </div>
        </div>
        <div className="mb-4 col-12 ">
          <label htmlFor="password" className="font-light block mb-2">Senha</label>
          <div className="p-inputgroup">
            <div className="p-inputgroup-addon">
              <i className="pi pi-lock"></i>
            </div>
            <Password
              placeholder="Digite sua senha"
             toggleMask
              id="password"
              className="w-full"
              inputClassName="w-full"
              style={{ width: "100%" }}
              
            />
          </div>
        </div>
        <div className="text-center">
          <Button label="Entrar" icon="pi pi-sign-in" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default App;
