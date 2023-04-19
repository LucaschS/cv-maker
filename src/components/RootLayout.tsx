import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import PersonalDetails from './Templates/PersonalDetails';
import { State } from '../models/interface-models';

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
}

const RootLayout = (props: Props) => {
  return (
    <>
      <Navbar />
      <Outlet />
      {props.personal.map((item, index) => {
        console.log(props, 'chuj');
        console.log(item, 'item');
        return <PersonalDetails key={index} item={item} />;
      })}
    </>
  );
};

export default RootLayout;
