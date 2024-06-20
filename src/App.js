import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from 'Components/Layout/Layout.jsx';
import Home from 'Components/Home/Home.jsx';
import Popular from 'Components/movies/Popular/Popular';
import NowPlaying from 'Components/movies/NowPlaying/NowPlaying';
import Upcoming from 'Components/movies/Upcoming/Upcoming';
import TopRated from 'Components/movies/TopRated/TopRated';
import MoviesProvider from 'context/MoviesContext';
import TVProvider from 'context/TVContext';
import PeopleProvider from 'context/PeopleContext';

function App() {
  const router = createBrowserRouter([
    {path:'/',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'movies/popular',element:<Popular/>},
      {path:'movies/now_playing',element:<NowPlaying/>},
      {path:'movies/upcoming',element:<Upcoming/>},
      {path:'movies/top_rated',element:<TopRated/>},
    ]}
  ])
  return <>
  <PeopleProvider>
  <TVProvider>
  <MoviesProvider>
  <RouterProvider router={router} />
  </MoviesProvider>
  </TVProvider>
  </PeopleProvider>
  </>;
}

export default App;
