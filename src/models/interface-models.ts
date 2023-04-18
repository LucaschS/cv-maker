export interface personalDetails {
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
  desc?: string;
}

export interface Education {
  id: string;
  course: string;
  university: string;
  startDate: string;
  endDate: string;
  desc?: string;
}

export interface State {
  personal: personalDetails[];
  description: string;
  experience: Experience[];
  education: Education[];
}
