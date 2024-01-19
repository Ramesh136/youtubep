
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import WatchPage from './Components/WatchPage';
import { Provider } from 'react-redux';
import store from './utils/store';
import MainContainer from './Components/MainContainer';

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
    ],
  }
])

function App() {
  return (

  <div>
  
    <Provider store={store}>
    <Header />
    <RouterProvider router = {route} /> 
    </Provider>
    
    
      
  </div>
  )
  
}

export default App;
