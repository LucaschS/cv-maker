import React from 'react';
import Styles from './EducationDetails.module.css';

interface Props {
  item: {
    position: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
  };
}

const ExperienceDetails = ({ item }: Props) => {
  const { position, company, startDate, endDate, description } = item;

  return (
    <>
      <div className='education-list'>
        <h1>Course: {position}</h1>
        <h2>University: {company}</h2>
        <p>start Date: {startDate}</p>
        <p>{endDate}</p>
        <p>{description}</p>
      </div>
    </>
  );
};

export default ExperienceDetails;
