import React from 'react';

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
  console.log(item.name, 'item');
  return (
    <>
      <header>
        <div>
          <h1>Name: {name}</h1>
          <h2>Surname: {surname}</h2>
          <p>profession: {profession}</p>
          <p>{title}</p>
          <p>{phone}</p>
          <p>{email}</p>
          <p>{location}</p>
          <p>{birth_date}</p>
        </div>
      </header>
    </>
  );
};

export default PersonalDetails;
