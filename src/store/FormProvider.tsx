import React, { useState } from 'react';
import FormContext from './form-context';

type FormContextProviderProps = {
  children: React.ReactNode;
};

interface educationState {
  school: string;
  description: string;
  startDate: string;
  endDate: string;
}

interface personalState {
  name: string;
  surname: string;
  age: number;
}

type formData = {
  personalData: personalState;
  educationData: educationState;
}[];

export const FormContextProvider = ({ children }: FormContextProviderProps) => {
  const [formData, setFormData] = useState<formData[]>([]);
  console.log(formData, 'formdata');

  const onAddEducationData = (educationData: educationState) => {
    setFormData((prevState: any) => [...prevState, educationData]); //to dziala tylko z any, jak zrobić, żeby np wpisywał do stanu formData jako obiekt w tablicy
  };

  const onAddPersonalData = (personalData: personalState) => {
    setFormData((prevState) => ({
      ...prevState,
      personalData,
    }));
  };

  const formContext = {
    formData: [],
    onAddEducationData,
    onAddPersonalData,
  };
  return (
    <FormContext.Provider value={formContext}>{children}</FormContext.Provider>
  );
};
