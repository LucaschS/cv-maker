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
}

const FormPersonal = ({ item, index, onInputArrayChange }: Props) => {
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
            id='name'
            value={name}
            onChange={onInputArrayChange('personal', index)}
          />
        </div>
        <div className={styles['form-control']}>
          <label htmlFor='surname'>Your Surname</label>
          <input
            type='text'
            id='surname'
            value={surname}
            onChange={onInputArrayChange('personal', index)}
          />
        </div>
        <div className={styles['form-control']}>
          <label htmlFor='profession'>Your Profession</label>
          <input
            type='text'
            id='profession'
            value={profession}
            onChange={onInputArrayChange('personal', index)}
          />
        </div>
        <div className={styles['form-control']}>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            value={title}
            onChange={onInputArrayChange('personal', index)}
          />
        </div>
        <div className={styles['form-control']}>
          <label htmlFor='phone'>Your Phone Number</label>
          <input
            type='text'
            id='phone'
            value={phone}
            onChange={onInputArrayChange('personal', index)}
          />
        </div>
        <div className={styles['form-control']}>
          <label htmlFor='email'>Your Email</label>
          <input
            type='text'
            id='email'
            value={email}
            onChange={onInputArrayChange('personal', index)}
          />
        </div>
        <div className={styles['form-control']}>
          <label htmlFor='location'>Location</label>
          <input
            type='text'
            id='location'
            value={location}
            onChange={onInputArrayChange('personal', index)}
          />
        </div>
        <div className={styles['form-control']}>
          <label htmlFor='birth_date'>Birth Date</label>
          <input
            type='text'
            id='birth_date'
            value={birth_date}
            onChange={onInputArrayChange('personal', index)}
          />
        </div>
      </div>
    </>
  );
};

export default FormPersonal;
