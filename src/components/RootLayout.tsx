import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import PersonalDetails from './Templates/PersonalDetails';
import EducationDetails from './Templates/EducationDetails';
import ExperienceDetails from './Templates/ExperienceDetails';

interface Props {
  personal: {
    name: string;
    surname: string;
    profession: string;
    title: string;
    phone: string;
    email: string;
    location: string;
    birth_date: string;
  }[];
  education: {
    course: string;
    university: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  experience: {
    position: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
}

const RootLayout = (props: Props) => {
  console.log(props, 'props');
  return (
    <>
      <Navbar />
      <Outlet />
      {props.personal.map((item, index) => {
        return <PersonalDetails key={index} item={item} />;
      })}
      {props.experience.map((item, index) => {
        return <ExperienceDetails key={index} item={item} />;
      })}
      {props.education.map((item, index) => {
        return <EducationDetails key={index} item={item} />;
      })}
    </>
  );
};

export default RootLayout;
