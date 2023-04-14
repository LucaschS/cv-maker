import { createContext } from 'react';
interface personalData {
  name: string;
  surname: string;
  age: number;
}

interface educationData {
  school: string;
  description: string;
  startDate: string;
  endDate: string;
}

type formData = {
  personalState: personalData;
  educationState: educationData;
}[];

interface context {
  formData: formData;
  onAddPersonalData: (personalData: personalData) => void;
  onAddEducationData: (educationData: educationData) => void;
}

const FormContext = createContext<context>({
  formData: [],
  onAddPersonalData: (personalData: personalData) => {},
  onAddEducationData: (educationData: educationData) => {},
});

export default FormContext;