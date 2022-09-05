import './App.css';
import 'bootstrap';
import Navbar3 from './Navbar3';

function Home(props) {

  return (
    <div>
      <Navbar3 value={props.value} />
    </div>
  );
}

export default Home;

