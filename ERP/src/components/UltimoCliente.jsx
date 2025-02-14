import React, { useEffect, useState } from "react";
import axios from "axios";

//react icons
import { FaRegUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
//

const UltimoCliente = () => {
  const [clientes, setClientes] = useState([]);

  //get nos clientes do banco de dados
  useEffect(() => {
    axios.get("http://localhost:3001/clientes").then((res) => {
      const data = res.data;
      setClientes(data);
    });
  }, []);
  //

  //função e state para mostrar e esconder os clientes
  const [show, setShow] = useState(false);

  const showClientes = () => {
    setShow(!show);
    console.log(show);
  };
  //
  return (
    <div>
      {" "}
      <div className="general-info-cliente">
        <div className="title-cliente" onClick={showClientes}>
          <h1>Últimos Clientes</h1>
          {show === true ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </div>
        {""}
        {show === true ? (
          <div className="cliente">
            <ul>
              {clientes.map((cliente) => (
                <li key={cliente.id}>
                  <div className="cliente-info">
                    <FaRegUser className="icon-cliente" />
                    <h2 id="nome-cliente">{cliente.Nome}</h2>
                  </div>
                  <div className="cliente-general-info">
                    <BsFillTelephoneFill className="icon-general-cliente" />
                    <p id="telefone-cliente">{cliente.Telefone}</p>
                  </div>
                  <div className="cliente-general-info">
                    <MdAlternateEmail className="icon-general-cliente" />
                    <p id="telefone-cliente">{cliente.email}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default UltimoCliente;
