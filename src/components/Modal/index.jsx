import './modal.css'

import { FiX } from 'react-icons/fi'

export default function Modal({ conteudo, close }) {

    function handleContainerClick(event) {
      event.stopPropagation();
    }

  return (
    <div className='modal' onClick={close}>
      <div className='container' onClick={handleContainerClick}>
        <button className='close' onClick={close}>
          <FiX size={25} color='#FFF' />
          Voltar
        </button>

        <main>
          <h2>Detalhes do chamado</h2>

          <div className="row">
            <span>
              Cliente: <i>{conteudo.cliente}</i>
            </span>
          </div>

          <div className="row">
            <span>
              Assunto: <i >{conteudo.assunto}</i>
            </span>
            <span>
              Cadastrado em: <i>{conteudo.dateFormated}</i>
            </span>
          </div>

          <div className="row">
            <span>
              Status: 
              <i style={{color: '#FFF', background: conteudo.status === 'Aberto' ? '#5cb85c' : '#999', borderRadius: 2}}>
                {conteudo.status}
              </i>
            </span>
          </div>

          {conteudo.complemento !== '' && (
            <>
              <h3>Complemento</h3>
              <p>{conteudo.complemento}</p>
            </>
          )}

        </main>
      </div>
    </div>
  )
}