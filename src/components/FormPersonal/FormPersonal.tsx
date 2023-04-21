import React from 'react';
import styles from './FormPersonal.module.css';
import { Personal } from '../../models/interface-models';

interface Props {
  item: Personal;
  index: number;
  onInputArrayChange: (
    property: 'personal' | 'experience' | 'education',
    index: number
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  onItemAdd: () => void;
  onItemRemove: (
    property: 'personal' | 'experience' | 'education',
    id: string
  ) => void;

}

const FormPersonal = ({
  item,
  index,
  onInputArrayChange,
  onItemAdd,
  onItemRemove,
}: Props) => {
  const {
    id,
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
    <form>
      <div className={styles.group}>
        <h4>Personal Information</h4>
        <div className={styles['form-control']}>
          <label htmlFor='name'>Your Name</label>
          <input
            id={name}
            type='text'
            placeholder='name'
            defaultValue={name}
            name='name'
            onChange={onInputArrayChange('personal', index)}
          />
        </div>
        <div className={styles['form-control']}>
          <label htmlFor='surname'>Your Surname</label>
          <input
            id={surname}
            type='text'
            placeholder='surname'
            defaultValue={surname}
            name='surname'
            onChange={onInputArrayChange('personal', index)}
          />
        </div>
        <div className={styles['form-control']}>
          <label htmlFor='profession'>Your Profession</label>
          <input
            id={profession}
            type='text'
            placeholder='profession'
            defaultValue={profession}
            name='profession'
            onChange={onInputArrayChange('personal', index)}
          />
        </div>
        <div className={styles['form-control']}>
          <label htmlFor='title'>Title</label>
          <input
            id={title}
            type='text'
            placeholder='title'
            defaultValue={title}
            name='title'
            onChange={onInputArrayChange('personal', index)}
          />
        </div>
        <div className={styles['form-control']}>
          <label htmlFor='phone'>Your Phone Number</label>
          <input
            id={phone}
            type='text'
            placeholder='phone'
            defaultValue={phone}
            name='phone'
            onChange={onInputArrayChange('personal', index)}
          />
        </div>
        <div className={styles['form-control']}>
          <label htmlFor='email'>Your Email</label>
          <input
            id={email}
            type='text'
            placeholder='email'
            defaultValue={email}
            name='email'
            onChange={onInputArrayChange('personal', index)}
          />
        </div>
        <div className={styles['form-control']}>
          <label htmlFor='location'>Location</label>
          <input
            id={location}
            type='text'
            placeholder='location'
            defaultValue={location}
            name='location'
            onChange={onInputArrayChange('personal', index)}
          />
        </div>
        <div className={styles['form-control']}>
          <label htmlFor='birth_date'>Birth Date</label>
          <input
            id={birth_date}
            type='text'
            placeholder='birth_date'
            defaultValue={birth_date}
            name='birth_date'
            onChange={onInputArrayChange('personal', index)}
          />
        </div>
        <div>
          <button type='button' onClick={onItemAdd}>
            Add
          </button>
          <button type='button' onClick={() => onItemRemove('personal', id)}>
            Remove
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormPersonal;
