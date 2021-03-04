import React, { useEffect } from 'react';
import Button from '../Button';
import Checkbox from '../Checkbox';
import { useStickersContext } from '../../components/_context/StickersContext';
import { ACCESSIBILITY } from './accessibility';
import { ReactComponent as Plus } from '../../assets/icons/Plus.svg';
import { ReactComponent as Minus } from '../../assets/icons/Minus.svg';

import './stickers.scss';

const Stickers = () => {
  const stickersOptions = ['React', 'Vue', 'Angular'];

  const { setValidate, form, setForm } = useStickersContext();

  useEffect(() => {
    if (!form.models.length || form.counter === 0) setValidate(true);
    else setValidate(false);
  }, [form, setValidate]);

  const handleIncrement = (value) => {
    if (!value) value = 0;
    setForm({
      ...form,
      counter: parseInt(value),
    });
  };

  return (
    <form className="stickers">
      <section className="stickers__containers">
        <h2 className="stickers__title">Quais stickers?</h2>
        <Checkbox
          value={form}
          options={stickersOptions}
          setValue={setForm}
          error={!form.models.length}
        />
      </section>
      <section className="stickers__containers">
        <h2 className="stickers__title">Quantos stickers de cada?</h2>
        <section className="stickers__controllers">
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
        </section>
      </section>
      <section className="stickers__containers">
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
      </section>
    </form>
  );
};

export default Stickers;
