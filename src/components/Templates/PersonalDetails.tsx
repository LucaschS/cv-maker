import React from 'react';
import { personalDetails, State } from '../../models/interface-models';

interface Props {
  item: {
    name: string;
    surname: string;
    profession: string;
    title: string;
    phone: string;
    email: string;
    location: string;
    birth_date: string;
  };
}

const PersonalDetails = ({ item }: Props) => {
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
  console.log(item, 'consol');
  return (
    <>
      <header>
        <div>
          <h1>{name}</h1>
          <h2>{surname}</h2>
        </div>
      </header>
    </>
  );
};

export default PersonalDetails;
