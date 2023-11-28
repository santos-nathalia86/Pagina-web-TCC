import React from 'react'
import style from './contato.module.css';
import { BsTelephone } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

export const Contato = () => {
  //pego o número de telefone e jogo em uma variavel
  const numeroTelefone = '(11) 94002-8922';

  //função para ligar para o telefone
  const handleClickTelefone = () => {
    // Lógica para abrir o telefone
    // Por exemplo, pode ser uma chamada para uma API ou um link para "tel:"
    window.location.href = `tel:${numeroTelefone}`;
  };

  //TELEFONES DE EMERGENCIA
  function fazerChamada(numero) {
    window.location.href = `tel:${numero}`;
  };

    return (
    <>
    <div className={style.header}>
        <div className={style.texto}>
          <a href='/'>HOME</a> | <a href='/Contato'>Contato</a>
        </div>
    </div>

    <div className={style.contato}>
      <text style={style.tituloContato}>  Sheila Oliveira </text>
      <br />
      <text> Tel:
      <text style={style.telefone} 
      //  ao clicar no numero ele deverá encaminhar a o app de ligações 
      onClick={handleClickTelefone}> {numeroTelefone} </text>
      <BsWhatsapp className={style.iconW}/>
      <BsTelephone />
      </text>

    </div>

      <div className={style.linha}></div>

      <div className={style.contato}>
      <text style={style.tituloContato}>  Sheila Oliveira </text>
      <br />
      <text> Tel:
      <text style={style.telefone} 
      //  ao clicar no numero ele deverá encaminhar a o app de ligações 
      onClick={handleClickTelefone}> {numeroTelefone} </text>
      <BsWhatsapp className={style.iconW}/>
      <BsTelephone />
      </text>
      </div>


    <div className={style.emergencia}>
      <text> Emergência </text>

      <div className={style.telEmergency} onClick={() => fazerChamada('190')}>
      <BsTelephone />
      <text> 190</text>
      <p> Polícia</p>
      </div>

      <div className={style.telEmergencyB} onClick={() => fazerChamada('193')}>
      <BsTelephone />
      <text> 193</text>
      <p> Bombeiros </p>
      </div>

    </div>

    </>
);
};
export default Contato;

//tentativa de fazer o negocio de ligar