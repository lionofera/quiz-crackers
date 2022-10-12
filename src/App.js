
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layouts/Main';
import Home from './components/Home/Home';
import Chart from './components/Chart/Chart';
import Fields from './components/Fields/Fields';
import Quizes from './components/Quizes/Quizes';
import Quiz from './components/Quiz/Quiz';
import Chartdata from './components/Chartdata/Chartdata';
import Blog from './components/Blog/Blog';

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
      },
      {
        path:'/chartdata',
        loader:() => fetch('https://openapi.programming-hero.com/api/quiz'),
        element:<Chartdata></Chartdata>
      },
      {
        path: '/fields/:fieldID',
        loader: async({params}) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.fieldID}`)
        },
        element: <Quizes></Quizes>
      }
      ]
    },
    {
      path: '/blogs',
      element: <Blog></Blog>
    },
    {path: '/*', element: <h3>'Page doesnt exists :(
      Please check your input!'</h3>}
  ])
  return (
    <div className="App">
     <RouterProvider  router={router}></RouterProvider>
    </div>
  );
}

export default App;
