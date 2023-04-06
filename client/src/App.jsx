import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Expand from './routes/Expand';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import Root from './Routes/Root';


const router = createBrowserRouter([

  {
    path: "/",
    element: <Root/>,
    children: [
      {
       index: true,
       //REMOVE INSIDE TAG
       element: <Home/>
      },
      {
        path: "/blog/:id", 
        element: <Expand/>
      }
    ]

  },
]);


function App() {


  return (
     <RouterProvider router={router} />
   
  )
}

export default App