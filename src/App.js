
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layouts/Main';
import Home from './components/Home/Home';
import Chart from './components/Chart/Chart';
import Fields from './components/Fields/Fields';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [{
        path: '/',
        loader:() => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Home></Home>
      },
      {
        path:'/fields',
        element:<Fields></Fields>
      },
      {
        path:'/chart',
        element:<Chart></Chart>
      }
      ]
    },
    {path: '/*', element: 'Page doesnt exists :(                       Please check your input!'}
  ])
  return (
    <div className="App">
     <RouterProvider  router={router}></RouterProvider>
    </div>
  );
}

export default App;
