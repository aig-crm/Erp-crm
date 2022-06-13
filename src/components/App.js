import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UseEffectApi from './UseEffectApi';
import PostForm from './PostForm';
import PieChart from './PieChart';
import 'bootstrap';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';

function App() {
  return (
    //  <div className="App">
    //    <header className="App-header">
    //      <UseEffectApi />
    //      <PostForm />
    //      <PieChart />
    //      <BarChart />
    //      <DoughnutChart />
    //    </header>
    //  </div> 
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<UseEffectApi />} />
          <Route exact path='/bookingForm' element={<PostForm />} />
          <Route exact path='/reports' 
            element={
              <>
                <h2><b>REPORTS</b></h2>
                <h3>Unit report :</h3>
                <PieChart />
                <h3>Demand-Reminder report :</h3>
                <DoughnutChart />
                <h3>Unit type report :</h3>
                <BarChart />
              </>
            } 
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

