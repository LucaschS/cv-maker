import React from 'react';
import styles from './FormPersonal.module.css';
import { personalDetails } from '../../models/interface-models';

interface Props {
  item: personalDetails;
  index: number;
  onInputArrayChange: (
    property: 'personal' | 'experience' | 'education',
    index: number
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  onItemAdd: () => void;
  onItemRemove: () => void;
}

const FormPersonal = ({
  item,
  index,
  onInputArrayChange,
  onItemAdd,
  onItemRemove,
}: Props) => {
  const {
    name,
    surname,
    profession,
    title,
    phone,
    email,
    location,
    birth_date,
  } = item;
  return (
    <>
      <div>
        <h4>Personal Information</h4>
        <div className={styles['form-control']}>
          <label htmlFor='name'>Your Name</label>
          <input
            type='text'
            placeholder='name'
            value={name}
            name='name'
            onChange={onInputArrayChange('personal', index)}
          />
        </div>
        <div className={styles['form-control']}>
          <label htmlFor='surname'>Your Surname</label>
          <input
            type='text'
            placeholder='surname'
            value={surname}
            name='surname'
            onChange={onInputArrayChange('personal', index)}
          />
        </div>
        <div className={styles['form-control']}>
          <label htmlFor='profession'>Your Profession</label>
          <input
            type='text'
            placeholder='profession'
            value={profession}
            name='profession'
            onChange={onInputArrayChange('personal', index)}
          />
        </div>
        <div className={styles['form-control']}>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            placeholder='title'
            value={title}
            name={name}
            onChange={onInputArrayChange('personal', index)}
          />
        </div>
        <div className={styles['form-control']}>
          <label htmlFor='phone'>Your Phone Number</label>
          <input
            type='text'
            placeholder='phone'
            value={phone}
            name={name}
            onChange={onInputArrayChange('personal', index)}
          />
        </div>
        <div className={styles['form-control']}>
          <label htmlFor='email'>Your Email</label>
          <input
            type='text'
            placeholder='email'
            value={email}
            name={name}
            onChange={onInputArrayChange('personal', index)}
          />
        </div>
        <div className={styles['form-control']}>
          <label htmlFor='location'>Location</label>
          <input
            type='text'
            placeholder='location'
            value={location}
            name={name}
            onChange={onInputArrayChange('personal', index)}
          />
        </div>
        <div className={styles['form-control']}>
          <label htmlFor='birth_date'>Birth Date</label>
          <input
            type='text'
            placeholder='birth_date'
            value={birth_date}
            name={name}
            onChange={onInputArrayChange('personal', index)}
          />
        </div>
        <div>
          <button type='button' onClick={onItemAdd}>
            Add
          </button>
          <button type='button' onClick={onItemRemove}>
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default FormPersonal;
