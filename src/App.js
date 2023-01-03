import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Components/Routes/Routes';

function App() {
  return (
    <div className='lg:w-[70%] mx-auto'>
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
