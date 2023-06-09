import React, { useState, useContext } from 'react';
import styles from './FormEducation.module.css';
import { Education } from '../../models/interface-models';

interface Props {
  item: Education;
  index: number;
  onInputArrayChange: (
    property: 'personal' | 'experience' | 'education',
    index: number
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTextAreaChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onItemAdd: () => void;
  onItemRemove: (
    property: 'personal' | 'experience' | 'education',
    id: string
  ) => void;
}

const FormEducation = ({
  item,
  index,
  onInputArrayChange,
  onTextAreaChange,
  onItemAdd,
  onItemRemove,
}: Props) => {
  const { id, course, university, startDate, endDate, description } = item;
  return (
    <form>
      <h4>Education</h4>
      <div className={styles['form-control']}>
        <label htmlFor='course'>Course</label>
        <input
          id={course}
          type='text'
          placeholder='course'
          defaultValue={course}
          name='course'
          onChange={onInputArrayChange('education', index)}
        />
      </div>
      <div className={styles['form-control']}>
        <label htmlFor='university'>University</label>
        <input
          id={university}
          type='text'
          placeholder='university'
          defaultValue={university}
          name='university'
          onChange={onInputArrayChange('education', index)}
        />
      </div>
      <div className={styles['form-control']}>
        <label htmlFor='startDate'>Start Date</label>
        <input
          id={startDate}
          type='text'
          placeholder='startDate'
          defaultValue={startDate}
          name='startDate'
          onChange={onInputArrayChange('education', index)}
        />
      </div>
      <div className={styles['form-control']}>
        <label htmlFor='endDate'>End Date</label>
        <input
          id={endDate}
          type='text'
          placeholder='endDate'
          defaultValue={endDate}
          name='endDate'
          onChange={onInputArrayChange('education', index)}
        />
      </div>
      <div className={styles['form-control']}>
        <label htmlFor='description'>Description</label>
        <textarea
          id={description}
          rows={20}
          cols={50}
          placeholder='description'
          defaultValue={description}
          name='description'
          onChange={onTextAreaChange}
        />
      </div>
      <div>
        <button type='button' onClick={onItemAdd}>
          Add
        </button>
        <button type='button' onClick={() => onItemRemove('education', id)}>
          Remove
        </button>
      </div>
    </form>
  );
};

export default FormEducation;
