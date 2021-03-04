import React from 'react';
import Button from '../Button';
import { ACCESSIBILITY } from '../Stickers/accessibility';
import { useStickersContext } from '../../components/_context/StickersContext';
import './footer.scss';

const Footer = () => {
  const { sendMessage, setSendMessage, validate } = useStickersContext();

  const handleSubmit = () => {
    if (!validate) setSendMessage('Formulário enviado com sucesso!');
  };

  return (
    <footer className="footer">
      <span className="footer--message">{sendMessage}</span>
      <Button
        className="footer--button"
        arialabel={ACCESSIBILITY['SEND'].description}
        action={sendMessage ? () => window.location.reload() : handleSubmit}
        disabled={validate}
      >
        {sendMessage ? 'Pedir dnv?' : 'Enviar'}
      </Button>
    </footer>
  );
};

export default Footer;
