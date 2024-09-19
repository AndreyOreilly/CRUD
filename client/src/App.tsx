import React from 'react';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './components/Root';
import CardsPage from './components/pages/CardsPage';

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
      children: [
        { path: '/', element: <Navigate to="/cards" replace /> },
        {
          path: '/cards',
          element: <CardsPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
