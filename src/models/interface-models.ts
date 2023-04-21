export interface Personal {
  id: string;
  name: string;
  surname: string;
  profession: string;
  title: string;
  phone: string;
  email: string;
  location: string;
  birth_date: string;
}

export interface Experience {
  id: string;
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Education {
  id: string;
  course: string;
  university: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface State {
  description: string;
  personal: Personal[];
  experience: Experience[];
  education: Education[];
}
