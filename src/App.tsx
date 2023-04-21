import React, { useReducer } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import data from './sample-cv-data';
import FormPersonal from './components/FormPersonal/FormPersonal';
import FormEducation from './components/FormPersonal/FormEducation';
import FormExperience from './components/FormPersonal/FormExperience';

import RootLayout from './components/RootLayout';
import Home from './components/Home';
import { v4 as uuidv4 } from 'uuid';

import {
  State,
  Personal,
  Education,
  Experience,
} from './models/interface-models';
import './App.css'; //globalny css

type input_array = {
  type: 'INPUT_ARRAY_NAME';
  property: 'personal' | 'experience' | 'education';
  name: string;
  value: string;
  index: number;
};
type item_delete = {
  type: 'ITEM_DELETE';
  property: 'personal' | 'experience' | 'education';
  id: string;
};

type personal_item_add = {
  type: 'PERSONAL_ITEM_ADD';
  id: string;
  personal: [];
};

type education_item_add = {
  type: 'EDUCATION_ITEM_ADD';
  id: string;
  education: [];
};

type experience_item_add = {
  type: 'EXPERIENCE_ITEM_ADD';
  id: string;
  experience: [];
};
type ReducerAction =
  | input_array
  | item_delete
  | personal_item_add
  | education_item_add
  | experience_item_add;

const initialState: State = {
  personal: [],
  description: '',
  experience: [],
  education: [],
};

const reducer = (prevState: typeof initialState, action: ReducerAction) => {
  const { type } = action;
  switch (type) {
    case 'INPUT_ARRAY_NAME':
      return {
        ...prevState,
        [action.property]: [
          ...prevState[action.property].slice(0, action.index),
          {
            ...prevState[action.property][action.index],
            [action.name]: action.value,
          },
          ...prevState[action.property].slice(action.index + 1),
        ],
      };
    case 'ITEM_DELETE':
      return {
        ...prevState,
        [action.property]: [...prevState[action.property]].filter(
          (item: Personal | Experience | Education) => item.id !== action.id
        ),
      };
    case 'PERSONAL_ITEM_ADD':
      return {
        ...prevState,
        personal: [
          ...prevState.personal,
          {
            id: uuidv4(),
            name: '',
            surname: '',
            profession: '',
            title: '',
            phone: '',
            email: '',
            location: '',
            birth_date: '',
          },
        ],
      };
    case 'EXPERIENCE_ITEM_ADD':
      return {
        ...prevState,
        experience: [
          ...prevState.experience,
          {
            id: uuidv4(),
            position: '',
            company: '',
            startDate: '',
            endDate: '',
            description: '',
          },
        ],
      };
    case 'EDUCATION_ITEM_ADD':
      return {
        ...prevState,
        education: [
          ...prevState.education,
          {
            id: uuidv4(),
            course: '',
            university: '',
            startDate: '',
            endDate: '',
            description: '',
          },
        ],
      };

    default:
      return initialState;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { personal, education, description, experience } = data;
  console.log(state, 'state');
  const handleInputArrayChange = (
    property: 'personal' | 'experience' | 'education',
    index: number
  ) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    dispatch({
      type: 'INPUT_ARRAY_NAME',
      name: name,
      value: value,
      property: property,
      index: index,
    });
  };

  const handleTextAreaChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {};

  const handlePersonalItemAdd = () => {
    dispatch({
      id: '',
      type: 'PERSONAL_ITEM_ADD',
      personal: [],
    });
  };

  const handleExperienceItemAdd = () => {
    dispatch({
      id: '',
      type: 'EXPERIENCE_ITEM_ADD',
      experience: [],
    });
  };

  const handleEducationItemAdd = () => {
    dispatch({
      id: '',
      type: 'EDUCATION_ITEM_ADD',
      education: [],
    });
  };

  const handleItemDelete = (
    property: 'personal' | 'experience' | 'education',
    id: string
  ) => {
    dispatch({
      type: 'ITEM_DELETE',
      property: property,
      id: id,
    });
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout {...state} />,
      children: [
        { path: '/', element: <Home /> },
        {
          path: '/FormPersonal',
          element:
            state.personal.length === 0 ? (
              <button
                type='button'
                className='btn--add'
                onClick={handlePersonalItemAdd}>
                Add
              </button>
            ) : (
              state.personal.map((item, index) => {
                return (
                  <FormPersonal
                    key={index}
                    item={item}
                    index={index}
                    onInputArrayChange={handleInputArrayChange}
                    onItemAdd={handlePersonalItemAdd}
                    onItemRemove={handleItemDelete}
                  />
                );
              })
            ),
        },

        {
          path: '/FormExperience',
          element:
            state.experience.length === 0 ? (
              <button
                type='button'
                className='btn--add'
                onClick={handleExperienceItemAdd}>
                Add
              </button>
            ) : (
              state.experience.map((item, index) => {
                return (
                  <FormExperience
                    {...state.experience}
                    key={index}
                    item={item}
                    index={index}
                    onInputArrayChange={handleInputArrayChange}
                    onTextAreaChange={handleTextAreaChange}
                    onItemAdd={handleExperienceItemAdd}
                    onItemRemove={handleItemDelete}
                  />
                );
              })
            ),
        },

        {
          path: '/FormEducation',
          element:
            state.education.length === 0 ? (
              <button
                type='button'
                className='btn--add'
                onClick={handleEducationItemAdd}>
                Add
              </button>
            ) : (
              //koniecznie state.education
              state.education.map((item, index) => {
                return (
                  <FormEducation
                    {...state.education}
                    key={index}
                    item={item}
                    index={index}
                    onInputArrayChange={handleInputArrayChange}
                    onTextAreaChange={handleTextAreaChange}
                    onItemAdd={handleEducationItemAdd}
                    onItemRemove={handleItemDelete}
                  />
                );
              })
            ),
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
