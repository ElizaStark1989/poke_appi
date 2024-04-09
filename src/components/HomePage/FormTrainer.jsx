import React, { useRef, useState } from 'react';
import { setTrainer } from '../../store/states/trainer.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './formtrainer.css'; // Importar estilos CSS

const FormTrainer = () => {
  const trainerInput = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const trainerName = trainerInput.current.value.trim();
    if (trainerName.length < 3) {
      setErrorMessage('Trainer name must be at least 3 characters long.');
    } else {
      dispatch(setTrainer(trainerName));
      navigate('/pokedex');
    }
  };

  const handleChange = () => {
    setErrorMessage('');
  };

  return (
    <div>
      <form className="form_container" onSubmit={handleSubmit}>
        <input
          ref={trainerInput}
          type="text"
          className="form_input"
          placeholder="Enter your trainer name"
          onChange={handleChange}
        />
        <button type="submit" className="form_button">
          Let's Start
        </button>
      </form>
      {errorMessage && <p className="error_message">{errorMessage}</p>}
    </div>
  );
};

export default FormTrainer;
