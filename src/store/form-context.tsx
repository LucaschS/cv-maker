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

// interface formData {
//   personalState?: personalData;
//   educationState?: educationData;
// };

type context = {
  // formData: formData;
  onAddPersonalData: (personalData: personalData) => void;
  onAddEducationData: (educationData: educationData) => void;
};

const FormContext = createContext<context>({
  // formData: [],
  onAddPersonalData: () => {},
  onAddEducationData: () => {},
});

export default FormContext;
