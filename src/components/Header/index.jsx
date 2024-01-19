import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import avatarImg from '../../assets/avatar.png';

import { AuthContext } from '../../contexts/auth'
import { FiHome, FiUser, FiSettings, FiMenu } from 'react-icons/fi'
import { GrFormClose } from "react-icons/gr";
import './header.css'


export default function Header() {
  const { user } = useContext(AuthContext);
  const [openToggle, setOpenToggle] = useState(true)
  const [larguraDaTela, setLarguraDaTela] = useState(window.innerWidth);

  useEffect(() => {
    function atualizarLarguraDaTela() {
      setLarguraDaTela(window.innerWidth);
    };

    window.addEventListener('resize', atualizarLarguraDaTela);

    return () => {
      window.removeEventListener('resize', atualizarLarguraDaTela);
    };
  }, []);

  if (larguraDaTela <= 700) {
    return (
      <div className='sidebar'>

        <button className='toggle-btn' onClick={() => setOpenToggle(!openToggle)}>
          {openToggle ? (
            <GrFormClose color="#FFF" size={28}/>
          ) : (
            <FiMenu color='#FFF' size={25} />
          )}
        </button>

        {openToggle && (
          <>
            <Link to="/dashboard">
              <FiHome color='#FFF' size={24} />
              Chamados
            </Link>
            <Link to="/customers">
              <FiUser color='#FFF' size={24} />
              Clientes
            </Link>
            <Link to="/profile">
              <FiSettings color='#FFF' size={24} />
              Perfil
            </Link>
          </>
        )}

      </div>
    )
  }

  return (

    <div className="sidebar">

      <div>
        <img src={user.avatarUrl === null ? avatarImg : user.avatarUrl} alt="Foto do usuário" />
      </div>


      <Link to="/dashboard">
        <FiHome color='#FFF' size={24} />
        Chamados
      </Link>
      <Link to="/customers">
        <FiUser color='#FFF' size={24} />
        Clientes
      </Link>
      <Link to="/profile">
        <FiSettings color='#FFF' size={24} />
        Perfil
      </Link>
    </div>
  );
}