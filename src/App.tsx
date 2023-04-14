import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useContext } from 'react';
import './App.css';
import FormPersonal from './components/FormPersonal/FormPersonal';
import FormEducation from './components/FormPersonal/FormEducation';
import RootLayout from './components/RootLayout';
import Home from './components/Home';
import FormContext from './store/form-context';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/FormPersonal',
        element: <FormPersonal />,
      },
      {
        path: '/FormEducation',
        element: <FormEducation />, //po wpisanu popsu w FormEducation router wymusza podanie ich tutaj
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
