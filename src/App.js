import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home';
import AddServices from './components/AddServices';
import AllServices from './components/AllServices';
import DetailService from './components/DetailService';
import Login from './components/Login';
import Register from './components/Register';
import Blog from './components/Blog';
import MyReviews from './components/MyReviews';

function App() {

  const router = createBrowserRouter([


    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: ()  => fetch('http://localhost:5000/servicesLoad')
        },
        {
          path: '/addservices',
          element: <AddServices></AddServices>
        },
        {
          path: '/myreviews',
          element: <MyReviews></MyReviews>
        },
        {
          path: '/allservices',
          element: <AllServices></AllServices>,
          loader: ()  => fetch('http://localhost:5000/servicesLoad')
        },
        {
          path: '/detailservice/:id',
          element: <DetailService></DetailService>,
          loader: ({params}) => fetch(`http://localhost:5000/detailservice/${params.id}`)
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },

      ]
    }
  ])

  return (
    <div className="App">
     
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
