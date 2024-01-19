import { useState } from 'react'
import Header from "../../components/Header";
import Title from "../../components/Title";
import { FiUser } from 'react-icons/fi'

import { db } from '../../services/firebaseConnection';
import { addDoc, collection } from 'firebase/firestore';

import { toast } from 'react-toastify';

export default function Customers() {
  const [nome, setNome] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [endereco, setEndereco] = useState('')

  async function handleRegister(e) {
    e.preventDefault();

    if (nome !== '' && cnpj !== '' && endereco !== '') {
      await addDoc(collection(db, "customers"), {
        nomeFantasia: nome,
        cnpj: cnpj,
        endereco: endereco,
      })
        .then(() => {
          setNome('')
          setCnpj('')
          setEndereco('')
          toast.success("Cliente cadastrado!")
        })
        .catch((error) => {
          console.log("Erro ao cadastrar cliente: " + error);
          toast.error("Erro ao fazer cadastro de Cliente")
        })
    }else{
      toast.info("Preencha todos os Campos!!")
    }
  }


  return (
    <div>
      <Header />

      <div className="content">
        <Title name="Clientes">
          <FiUser size={25} />
        </Title>

        <div className="container">
          <form className="form-profile" onSubmit={handleRegister}>
            <label>Nome Fantasia</label>
            <input
              type="text"
              placeholder="Nome da empresa"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <label>CNPJ</label>
            <input
              type="text"
              placeholder="Digite o CNPJ"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
            />
            <label>Endereço</label>
            <input
              type="text"
              placeholder="Endereço da empresa"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />

            <button type='submit'>Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}