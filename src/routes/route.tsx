import { createHashRouter } from 'react-router-dom'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact';

export const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
])



