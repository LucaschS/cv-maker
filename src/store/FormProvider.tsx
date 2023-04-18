import React, { useState } from 'react';
import FormContext from './form-context';

type FormContextProviderProps = {
  children: React.ReactNode;
};

interface personalState extends formData {
  name: string;
  surname: string;
  age: number;
}

interface educationState extends formData {
  school: string;
  description: string;
  startDate: string;
  endDate: string;
}

type formData = {
  personalData?: personalState;
  educationData?: educationState;
};

export const FormContextProvider = ({ children }: FormContextProviderProps) => {
  const [formData, setFormData] = useState<formData[]>([]);
  console.log(formData, 'formdata');

  const onAddEducationData = (educationData: educationState) => {

    setFormData((prevState) => ({ ...prevState,educationData:educationData }));
  };

  const onAddPersonalData = (personalData: personalState) => {
    setFormData((prevState) => ({ ...prevState, personalData:personalData }));
  };

  const formContext = {
    // formData,
    onAddEducationData,
    onAddPersonalData,
  };
  return (
    <FormContext.Provider value={formContext}>{children}</FormContext.Provider>
  );
};
