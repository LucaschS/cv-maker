import React, { useState, useContext } from 'react';
import styles from './FormPersonal.module.css';
import FormContext from '../../store/form-context';

const education = {
  school: '',
  description: '',
  startDate: '',
  endDate: '',
};

// interface educationProps {
//   onAddEducationData: (educationState: typeof education) => void;
// }

const FormEducation = (props: any) => {
  const ctx = useContext(FormContext);
  console.log('edu');

  const [educationState, setEducationState] = useState<typeof education>(
    education
  );

  const schoolInputHandler: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setEducationState({
      ...educationState,
      school: e.target.value,
    });
  };

  const descriptionInputHandler: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setEducationState({
      ...educationState,
      description: e.target.value,
    });
  };

  const startDateInputHandler: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setEducationState({
      ...educationState,
      startDate: e.target.value,
    });
  };

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    ctx.onAddEducationData(educationState);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <h4>Education</h4>
        <div className={styles['form-control']}>
          <label htmlFor='school'>School</label>
          <input type='text' id='school' onChange={schoolInputHandler}></input>
        </div>
        <div className={styles['form-control']}>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            id='description'
            onChange={descriptionInputHandler}></input>
        </div>
        <div className={styles['form-control']}>
          <label htmlFor='start'>Start Date</label>
          <input type='date' id='date' onChange={startDateInputHandler}></input>
        </div>
        <button type='submit'>Save</button>
      </form>
    </>
  );
};

export default FormEducation;
