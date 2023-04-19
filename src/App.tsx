import React, { useReducer } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import data from './sample-cv-data';
import './App.css';
import FormPersonal from './components/FormPersonal/FormPersonal';
import FormEducation from './components/FormPersonal/FormEducation';
import RootLayout from './components/RootLayout';
import Home from './components/Home';
import { State } from './models/interface-models';

type ReducerAction = {
  type: 'INPUT_ARRAY_NAME';
  name: string;
  value: string;
  property: 'personal' | 'experience' | 'education';
  index: number;
};

// interface InitialState {
//   personal: string[];
//   description: string,
//   experience: string[],
//   education: string[],
// };

const initialState: State = {
  personal: [],
  description: '',
  experience: [],
  education: [],
};

const reducer = (prevState: State, action: ReducerAction) => {
  const { type, name, value, property, index } = action;
  switch (type) {
    case 'INPUT_ARRAY_NAME':
      return {
        ...prevState,
        [property]: [
          ...prevState[property].slice(0, index),
          {
            ...prevState[property][index],
            [name]: value,
          },
          ...prevState[property].slice(index + 1),
        ],
        // c: console.log(
        //   'type',
        //   type,
        //   'name',
        //   name,
        //   'value',
        //   value,
        //   'property',
        //   property,
        //   'index',
        //   index
        // ),
      };

    default:
      return initialState;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { personal, description, experience, education } = data;

  // console.log(state, 'state');
  const handleInputArrayChange = (
    property: 'personal' | 'experience' | 'education',
    index: number
  ) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // console.log(e.target, 'target');
    dispatch({
      type: 'INPUT_ARRAY_NAME',
      name: name,
      value: value,
      property: property,
      index: index,
    });
  };

  const handlePersonalAdd = () => {
    // dispatch({ type: 'INPUT_NAME', name: 'asd' });
  };

  const handlePersonalRemove = () => {
    console.log('remove');
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout {...state} />,
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
                onItemAdd={handlePersonalAdd}
                onItemRemove={handlePersonalRemove}
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
