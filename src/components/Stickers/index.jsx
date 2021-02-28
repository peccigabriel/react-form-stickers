import React, { useState, useEffect } from 'react';
import Button from '../Button';
import Checkbox from '../Checkbox';
import { ACCESSIBILITY } from './accessibility';
import { ReactComponent as Plus } from '../../assets/icons/Plus.svg';
import { ReactComponent as Minus } from '../../assets/icons/Minus.svg';

import './stickers.scss';

const Stickers = () => {
  const stickersOptions = ['React', 'Vue', 'Angular'];
  const [sendMessage, setSendMessage] = useState('');
  const [validate, setValidate] = useState(false);
  const [form, setForm] = useState({
    models: ['React'],
    counter: 1,
    observation: '',
  });

  useEffect(() => {
    if (!form.models.length || form.counter === 0) setValidate(true);
    else setValidate(false);
  }, [form]);

  const handleIncrement = (value) => {
    if (!value)
      setForm({
        ...form,
        counter: 0,
      });
    else
      setForm({
        ...form,
        counter: parseInt(value),
      });
  };

  const handleSubmit = () => {
    if (!validate) setSendMessage('Formulário enviado com sucesso!');
  };

  return (
    <form className="stickers">
      <div className="stickers__containers">
        <h2 className="stickers__title">Quais stickers?</h2>
        <Checkbox
          value={form}
          options={stickersOptions}
          setValue={setForm}
          error={!form.models.length}
        />
      </div>
      <div className="stickers__containers">
        <h2 className="stickers__title">Quantos stickers de cada?</h2>
        <div className="stickers__controllers">
          <Button
            arialabel={ACCESSIBILITY['MINUS'].description}
            disabled={form.counter === 0}
            action={() =>
              setForm({
                ...form,
                counter: form.counter - 1,
              })
            }
          >
            <Minus />
          </Button>
          <label htmlFor="Quantidade de Stickers" />
          <input
            className={`stickers__input${form.counter === 0 ? '--error' : ''}`}
            id="Quantidade de Stickers"
            onChange={(e) => handleIncrement(e.target.value)}
            value={form.counter}
          />
          <Button
            arialabel={ACCESSIBILITY['PLUS'].description}
            action={() =>
              setForm({
                ...form,
                counter: form.counter + 1,
              })
            }
          >
            <Plus />
          </Button>
        </div>
      </div>
      <div className="stickers__containers">
        <h2 className="stickers__title">Observações:</h2>
        <label htmlFor="Observações do pedido" />
        <textarea
          id="Observações do pedido"
          className="stickers__textarea"
          placeholder="Escreva alguma observação sobre o pedido.."
          maxLength="255"
          value={form.observation}
          onChange={(e) =>
            setForm({
              ...form,
              observation: e.target.value,
            })
          }
        />
      </div>
      <footer className="stickers__footer">
        <span className="stickers__footer--message">{sendMessage}</span>
        <Button
          className="stickers__footer--button"
          arialabel={ACCESSIBILITY['SEND'].description}
          action={sendMessage 
            ? () => window.location.reload() 
            : handleSubmit
          }
          disabled={validate}
        >
          {sendMessage ? 'Pedir dnv?' : 'Enviar'}
        </Button>
      </footer>
    </form>
  );
};

export default Stickers;
