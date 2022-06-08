import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UseEffectApi from './UseEffectApi';
import PostForm from './PostForm';

function App() {
  return (
    /* <div className="App">
       <header className="App-header">
         <UseEffectApi />
       </header>
     </div> */
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<UseEffectApi />} />
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route exact path='/bookingForm' element={<PostForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

