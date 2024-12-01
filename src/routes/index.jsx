import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../components/Home';
import Events from '../components/Events';
import Team from '../components/Team';
import Contact from '../components/Contact';
import NotFound from '../components/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'events',
        element: <Events />,
      },
      {
        path: 'team',
        element: <Team />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]); 