import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PostForm from './PostForm';
import PieChart from './PieChart';
import 'bootstrap';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';
import Table from './Table';

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
          <Route exact path='/bookingForm' element={<PostForm />} />
          <Route exact path='/' 
            element={
              <>
                <h2 className="mt-3 text-dark"><b>REPORTS</b></h2>
                <h3 className="mt-3 text-dark">Unit report :</h3>
                <PieChart />
                <h3 className="mt-3 text-dark">Demand-Reminder report :</h3>
                <DoughnutChart />
                <h3 className="mt-3 text-dark">Unit type report :</h3>
                <BarChart />
                <Table />
              </>
            } 
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

