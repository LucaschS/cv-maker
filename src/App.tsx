import React, { useReducer } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import data from './sample-cv-data';
import './App.css';
import FormPersonal from './components/FormPersonal/FormPersonal';
import FormEducation from './components/FormPersonal/FormEducation';
import RootLayout from './components/RootLayout';
import Home from './components/Home';

type ReducerAction =
  | {
      type: 'INPUT_NAME';
      name: string;
    }
  | { type: 'INPUT_SURNAME'; surname: string }
  | { type: 'INPUT_AGE'; age: number };

const initialState = {
  personal: [],
  description: 'Nazwyam się Łukasz Smagóra',
  experience: [],
  education: [],
};

const reducer = (prevState: typeof initialState, action: ReducerAction) => {
  const { type } = action;
  switch (type) {
    case 'INPUT_NAME':
      return {
        ...prevState,
        name: action.name,
      };
    case 'INPUT_SURNAME':
      return {
        ...prevState,
        surname: action.surname,
      };
    case 'INPUT_AGE':
      return {
        ...prevState,
        age: action.age,
      };
    default:
      return initialState;
  }
};

const App = () => {
  const [state, setState] = useReducer(reducer, initialState);

  const { personal, description, experience, education } = data;

  console.log(state, 'state');
  const handleInputArrayChange = (
    property: 'personal' | 'experience' | 'education',
    index: number
  ) => (e: React.ChangeEvent<HTMLInputElement>) => {
    // setState((prevState) => ({
    //   ...prevState,
    //   education: [
    //     ...prevState.education,
    //     {
    //       id: '',
    //       course: '',
    //       university: '',
    //       startDate: '',
    //       endDate: '',
    //       desc: '',
    //     },
    //   ],
    // }));
  };

  // const nameInputChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
  //   e
  // ) => {
  //   dispatchPersonalAction({
  //     type: 'INPUT_NAME',
  //     name: e.target.value,
  //   });
  // };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { path: '/', element: <Home /> },
        {
          path: '/FormPersonal',
          element: personal.map((item, index) => {
            return (
              <FormPersonal
                {...state}
                key={index}
                item={item}
                index={index}
                onInputArrayChange={handleInputArrayChange}
              />
            );
          }),
        },
        {
          path: '/FormEducation',
          element: <FormEducation />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
