import React, { useReducer, useContext } from 'react';
import styles from './FormPersonal.module.css';
import FormContext from '../../store/form-context';

type ReducerAction =
  | {
      type: 'INPUT_NAME';
      name: string;
    }
  | { type: 'INPUT_SURNAME'; surname: string }
  | { type: 'INPUT_AGE'; age: number };

const defaultPersonalState = {
  name: 'Name',
  surname: 'Surname',
  age: 39,
};

// interface personalProps {
//   onAddPersonalData: (personalState: typeof defaultPersonalState) => void;
// }

const personalReducer = (
  prevState: typeof defaultPersonalState,
  action: ReducerAction
) => {
  const { type } = action;
  switch (type) {
    case 'INPUT_NAME':
      return {
        ...prevState,
        name: action.name,
      };
    case 'INPUT_SURNAME':
      return {
        ...prevState,
        surname: action.surname,
      };
    case 'INPUT_AGE':
      return {
        ...prevState,
        age: action.age,
      };
    default:
      return defaultPersonalState;
  }
};

const FormPersonal = () => {
  const ctx = useContext(FormContext);

  const [personalState, dispatchPersonalAction] = useReducer(
    personalReducer,
    defaultPersonalState
  );

  const nameInputChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    dispatchPersonalAction({
      type: 'INPUT_NAME',
      name: e.target.value,
    });
  };

  const surnameInputChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    dispatchPersonalAction({
      type: 'INPUT_SURNAME',
      surname: e.target.value,
    });
  };

  const ageInputChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    dispatchPersonalAction({
      type: 'INPUT_AGE',
      age: +e.target.value,
    });
  };

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    ctx.onAddPersonalData(personalState);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <h4>Personal Information</h4>
        <div className={styles['form-control']}>
          <label htmlFor='name'>Your Name</label>
          <input type='text' id='name' onChange={nameInputChangeHandler} />
        </div>

        <div className={styles['form-control']}>
          <label htmlFor='surname'>Your Surname</label>
          <input
            type='text'
            id='surname'
            onChange={surnameInputChangeHandler}
          />
        </div>

        <div className={styles['form-control']}>
          <label htmlFor='age'>Your Age</label>
          <input type='number' id='age' onChange={ageInputChangeHandler} />
        </div>
        <button type='submit'>Save</button>
      </form>
       </>
  );
};

export default FormPersonal;
