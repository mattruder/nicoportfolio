import logo from './logo.svg';
import './App.css';
import NavBar from './Navbar'
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css'
import headshot from './images/nicoheadshot.png'

function App() {

const height = {
  height: '100dvh'
}

  return (
    <div  className="App">
      <div className="nav-area">
     <NavBar />
     </div>
     <div className="content">
     <Image src={headshot} fluid />
     </div>
    </div>
  );
}

export default App;
