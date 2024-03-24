import { useRef } from "react";
import { setTrainer } from "../../store/states/trainer.slice";
import { useDispatch } from "react-redux";


const FormTrainer = () => {

const trainerInput = useRef();

const dispatch = useDispatch();

const handleSubmit = e => {
    e.preventDefault()
    dispatch(setTrainer(trainerInput.current.value.trim()));
}

  return (
    <form onSubmit={handleSubmit}>
        <input ref={trainerInput} type='text'/>
        <button> Lets Start </button>
    </form>
  )
}

export default FormTrainer;