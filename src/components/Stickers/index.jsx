import React, { useState } from 'react';
import Button from '../Button';
import Checkbox from '../Checkbox';
import { ACCESSIBILITY } from './accessibility';
import { ReactComponent as Plus } from '../../assets/icons/Plus.svg';
import { ReactComponent as Minus } from '../../assets/icons/Minus.svg';

import './stickers.scss';

const Stickers = () => {
  const stickersOptions = ['React', 'Vue', 'Angular'];
  const [form, setForm] = useState({
    models: [],
    counter: 0,
    observation: '',
  });

  const handleIncrement = (value) => {
    if (!value) {
      setForm({
        ...form,
        counter: 0,
      });
    } else {
      setForm({
        ...form,
        counter: value,
      });
    }
  };

  const handleSubmit = () => {
    console.log('form', form);
  };

  return (
    <form className="stickers">
      <div className="stickers__containers">
        <h2 className="stickers__title">Quais stickers?</h2>
        <Checkbox value={form} options={stickersOptions} setValue={setForm} />
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
            className="stickers__controllers--input"
            id="Quantidade de Stickers"
            onChange={(e) => handleIncrement(parseInt(e.target.value))}
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
        <Button
          action={handleSubmit}
          type="submit"
          className="stickers__footer--button"
        >
          Enviar
        </Button>
      </footer>
    </form>
  );
};

export default Stickers;
