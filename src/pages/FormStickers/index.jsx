import React, { useState } from 'react';
import Header from '../../components/Header';
import LayoutDefault from '../../components/LayoutDefault';
import Stickers from '../../components/Stickers';
import Footer from '../../components/Footer';
import { StickersProvider } from '../../components/_context/StickersContext';

const FormStickers = () => {
  const [sendMessage, setSendMessage] = useState('');
  const [validate, setValidate] = useState(false);
  const [form, setForm] = useState({
    models: ['React'],
    counter: 1,
    observation: '',
  });

  const stickersProps = {
    sendMessage,
    setSendMessage,
    validate,
    setValidate,
    form,
    setForm,
  };

  return (
    <StickersProvider {...stickersProps}>
      <LayoutDefault>
        <Header />
        <Stickers />
        <Footer />
      </LayoutDefault>
    </StickersProvider>
  );
};

export default FormStickers;
