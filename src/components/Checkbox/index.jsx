import React from 'react';
import './checkbox.scss';

const Checkbox = ({ options, value, setValue }) => {
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

  return (
    <div className="checkbox">
      {options.map((option) => (
        <label key={option} className="checkbox__container">
          <input
            type="checkbox"
            value={option}
            checked={value?.models.includes(option)}
            onChange={handleChange}
          />
          <span className="checkbox__container--title">{option}</span>
          <div className="checkbox__container--checkmark" />
        </label>
      ))}
    </div>
  );
};

export default Checkbox;
