
import './App.css';
import Body from './Components/Body';

import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import WatchPage from './Components/WatchPage';
import { Provider } from 'react-redux';
import store from './utils/store';
import MainContainer from './Components/MainContainer';
import SearchResults from './Components/SearchResults';

const route = createBrowserRouter([
  {
    path : '/',
    element : <Body />,
    children : [
        { path : '/',
          element : <MainContainer/>
      },
        {
          path : 'watch' ,
          element : <WatchPage />
        },
        {
          path : 'search' ,
          element : <SearchResults />
        },
    ],
  }
])

function App() {
  return (

  <div>
    <Provider store={store}>
    
    <RouterProvider router = {route} />
    </Provider>
  </div>
  )
  
}

export default App;
