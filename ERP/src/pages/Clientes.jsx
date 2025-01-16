import React, { useState } from "react";
import "../styles/AddClientes.css";
import "../styles/Clientes.css";
import cliente from "../components/AddClientes";
import AddClientes from "../components/AddClientes";
import { IoAdd } from "react-icons/io5";

// import AddClientes from "../components/AddClientes";

const Clientes = () => {
  const [cliente, setCliente] = useState([]);
  const [id, setId] = useState(1);

  const [modal, setModal] = useState(false);
  const defineModal = () => {
    setModal(!modal);
  };

  return (
    <div className="clientes-pag">
      <div className="clientes-container">
        <div className="cadastra-cliente">
          <h1 id="titulo-cliente">Resumo de clientes</h1>

          <IoAdd id="add-cliente" onClick={defineModal} />
        </div>

        <div className="quadro-container">
          {""}
          <div className="quadro-resumo">
            <h2>Clientes</h2>
            <ul>
              {cliente.map((cliente) => (
                <li key={cliente.id}>{cliente.nome}</li>
              ))}
            </ul>
          </div>
          {""}
          <div className="quadro-resumo">
            <h2>Telefone</h2>
            <ul>
              {cliente.map((cliente) => (
                <li key={cliente.id}>{cliente.telefone}</li>
              ))}
            </ul>
          </div>
          {""}
          {/* <div className="quadro-resumo">
            <h2>E-Mail</h2>
            <ul>
              {cliente.map((cliente) => (
                <li key={cliente.id}>{cliente.email}</li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
      {modal && (
        <div className="modal">
          <AddClientes
            modal={defineModal}
            cliente={cliente}
            setCliente={setCliente}
            id={id}
            setId={setId}
          />
        </div>
      )}

      <div className="resumo-cliente">
        <div></div>
      </div>
    </div>
  );
};

export default Clientes;
