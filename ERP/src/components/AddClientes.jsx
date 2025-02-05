import React, { useState } from "react";
import { FaWindowClose, FaRegUser } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { CiUser } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { GrClearOption } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const AddClientes = ({ modal, cliente, setCliente, id, setId }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState(0);

  // function handleSubmit(event) {
  //   const novoCliente = {
  //     id: id,
  //     nome: name,
  //     email: email,
  //     senha: senha,
  //     telefone: telefone,
  //   };

  //   setCliente([...cliente, novoCliente]);
  //   setId(id + 1);
  //   setName("");
  //   setEmail("");
  //   setSenha("");
  //   setTelefone("");
  // }

  const handleSubmit = async () => {
    const novoCliente = {
      id: id,
      nome: name,
      email: email,
      senha: senha,
      telefone: telefone,
    };

    setCliente([...cliente, novoCliente]);
    setId(id + 1);
    setName("");
    setEmail("");
    setSenha("");
    setTelefone("");
  };

  function limpaCampo() {
    setName("");
    setEmail("");
    setSenha("");
    setTelefone("");
  }

  // function validaCampo() {
  //   if (name == "") {
  //     const wrongName = {
  //       color: "red",
  //     };
  //   }
  // }

  return (
    <>
      <div className="form-container">
        <div className="spacing">
          <Link to="/">
            <img src="chilliz.png" alt="logo" className="form-logo" />
          </Link>
        </div>
        <form
          className="general-forms"
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          <div className="inputs-container">
            <label htmlFor="name">
              <FaRegUser />
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Nome de usuário"
              onChange={(e) => {
                console.log(e.target.value);
                setName(e.target.value);
              }}
            />
          </div>

          <div className="inputs-container">
            <label htmlFor="email">
              <MdAlternateEmail />
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="E-Mail"
              onChange={(e) => {
                console.log(e.target.value);
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="inputs-container">
            <label htmlFor="password">
              <RiLockPasswordLine />
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={senha}
              placeholder="Senha"
              onChange={(e) => {
                console.log(e.target.value);
                setSenha(e.target.value);
              }}
            />
          </div>
          <div className="inputs-container">
            <label htmlFor="telefone">
              <BsFillTelephoneFill />{" "}
            </label>

            <input
              type="text"
              id="telefone"
              name="telefone"
              value={telefone}
              placeholder="Número de telefone"
              onChange={(e) => {
                console.log(e.target.value);
                setTelefone(e.target.value);
              }}
            />
          </div>

          <div className="extra-option">
            <GrClearOption className="clear" onClick={limpaCampo} />
            <button id="submit-btn">
              <GiConfirmed type="submit" className="confirm" />
            </button>
          </div>
        </form>
        <FaWindowClose onClick={modal} className="close" />
      </div>
    </>
  );
};
export default AddClientes;
