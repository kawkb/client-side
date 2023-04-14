import Navbar from './components/navbar';
import Router from './router';
import { Toaster } from 'react-hot-toast';

function App() {
    //get cookie from 
  return (
    <>
      <Navbar />
      <Router />
      <div><Toaster/></div>
    </>
  );
}

export default App;
