import React from 'react';
import styles from './FormExperience.module.css';
import { Experience } from '../../models/interface-models';

interface Props {
  item: Experience;
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

const FormExperience = ({
  item,
  index,
  onInputArrayChange,
  onTextAreaChange,
  onItemAdd,
  onItemRemove,
}: Props) => {
  const { id, position, company, startDate, endDate, description } = item;
  return (
    <form>
      <h4>Experience</h4>
      <div className={styles['form-control']}>
        <label htmlFor='course'>Position</label>
        <input
          id={position}
          type='text'
          placeholder='position'
          defaultValue={position}
          name='position'
          onChange={onInputArrayChange('experience', index)}
        />
      </div>
      <div className={styles['form-control']}>
        <label htmlFor='university'>Company</label>
        <input
          id={company}
          type='text'
          placeholder='company'
          defaultValue={company}
          name='company'
          onChange={onInputArrayChange('experience', index)}
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
          onChange={onInputArrayChange('experience', index)}
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
          onChange={onInputArrayChange('experience', index)}
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
        <button type='button' onClick={() => onItemRemove('experience', id)}>
          Remove
        </button>
      </div>
    </form>
  );
};

export default FormExperience;
