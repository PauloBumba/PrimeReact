import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import "./index.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const App = () => {
  const [visibleSidebar, setVisibleSidebar] = useState(false); // Offcanvas (mobile)
  const [sidebarExpanded, setSidebarExpanded] = useState(true); // Expand/Collapse sidebar (desktop)
  const [hovered, setHovered] = useState(false); // Controle de hover

  const isSidebarExpanded = sidebarExpanded || hovered; // Sidebar expandido se está no modo expandido ou em hover

  return (
    <div className="layout">
      {/* Header */}
      <header className="header bg-primary text-white">
        <div className="header-content flex justify-content-between align-items-center">
          {/* Menu hamburguer (somente para mobile) */}
          <Button
            icon="pi pi-bars"
            className="p-button-rounded p-button-secondary sm:hidden"
            onClick={() => setVisibleSidebar(true)}
          />

          {/* Botão de expandir/colapsar sidebar (somente desktop) */}
          <Button id="paulo"
            icon={`pi ${sidebarExpanded ? "pi-angle-left" : "pi-angle-right"}`}
            className="p-button-rounded p-button-secondary hidden sm:inline-block "            onClick={() => setSidebarExpanded(!sidebarExpanded)}
          />

          <h3>Dashboard</h3>
          <div className="header-actions flex align-items-center gap-3">
            <Button
              icon="pi pi-bell"
              className="p-button-rounded p-button-secondary"
            />
            <Button
              icon="pi pi-user"
              className="p-button-rounded p-button-secondary"
            />
          </div>
        </div>
      </header>

      {/* Sidebar (offcanvas - mobile) */}
      <Sidebar
        visible={visibleSidebar}
        onHide={() => setVisibleSidebar(false)}
        className="mobile-sidebar"
      >
        <h3>Navegação</h3>
        <ul>
          <li>Dashboard</li>
          <li>Estoque</li>
          <li>Financeiro</li>
          <li>Relatórios</li>
        </ul>
      </Sidebar>

      {/* Sidebar (desktop) */}
      <aside
        className={`sidebar ${isSidebarExpanded ? "expanded" : "collapsed"}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <ul>
          <li className="mt-5">Logo</li>
          <hr />
          <li>
            <i className="pi pi-home"></i>
            {isSidebarExpanded && <span>Dashboard</span>}
          </li>
          <li>
            <i className="pi pi-box"></i>
            {isSidebarExpanded && <span>Estoque</span>}
          </li>
          <li>
            <i className="pi pi-dollar"></i>
            {isSidebarExpanded && <span>Financeiro</span>}
          </li>
          <li>
            <i className="pi pi-chart-line"></i>
            {isSidebarExpanded && <span>Relatórios</span>}
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h2>Conteúdo Principal</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis velit
          ipsum aliquam, soluta ex, esse fugit est, dolorum animi praesentium
          quam voluptates nobis fuga temporibus magnam tempora provident harum.
          Quis.
        </p>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Seu Projeto. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
