import React from 'react';
import Styles from './EducationDetails.module.css';

interface Props {
  item: {
    course: string;
    university: string;
    startDate: string;
    endDate: string;
    description: string;
    desc?: string;
  };
}

const PersonalDetails = ({ item }: Props) => {
  const { course, university, startDate, endDate, description, desc } = item;

  return (
    <>
      <div className='education-list'>
        <h1>Course: {course}</h1>
        <h2>University: {university}</h2>
        <p>start Date: {startDate}</p>
        <p>{endDate}</p>
        <p>{description}</p>
        <p>{desc}</p>
      </div>
    </>
  );
};

export default PersonalDetails;
