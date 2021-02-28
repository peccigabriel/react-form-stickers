import React from 'react';
import './checkbox.scss';

const Checkbox = ({ options, value, setValue, disabled, error }) => {
  function handleChange({ target }) {
    if (target.checked) {
      setValue({
        ...value,
        models: [...value.models, target.value],
      });
    } else {
      setValue({
        ...value,
        models: value?.models.filter((item) => item !== target.value),
      });
    }
  }

  const setClassName = () => {
    if (error) return 'error';
    else if (disabled) return 'disabled';
    else return 'checkmark';
  };

  return (
    <div className="checkbox">
      {options.map((option) => (
        <label htmlFor={option} key={option} className="checkbox__container">
          <input
            id={option}
            type="checkbox"
            value={option || value.models[0]}
            checked={value?.models.includes(option)}
            onChange={handleChange}
            disabled={disabled}
          />
          <span
            className={`checkbox__container--${
              error ? 'labelError' : 'title'
            }`}
          >
            {option}
          </span>
          <div className={`checkbox__container--${setClassName()}`} />
        </label>
      ))}
    </div>
  );
};

export default Checkbox;
