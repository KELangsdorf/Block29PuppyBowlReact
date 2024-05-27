import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import AllPlayers from './components/allplayers'
import SinglePlayer from './components/singleplayer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function App() {
  return (
    <div id="container">
      <Navbar className="p-3 mb-2 bg-info text-black" expand="lg">
      <Navbar.Brand>
      <h1 className="puppyheader">Puppy Bowl Part II: React!</h1>
    </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/" className="nav-link text-black">Home Page</Link>
            <Link to="/allplayers" className="nav-link text-black">All Players</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div id="main-section">
        <Routes>
          <Route
            path="/"
            element={
              <div className="welcome-container">
                <h1 className="welcomepuppy">
                  Welcome Back to Puppy Bowl!
                </h1>
                <img src="puppyball.jpg" alt="Puppy Ball" className="center-image" />
              </div>
            }
          />
          <Route path="/allplayers" element={<AllPlayers />} />
          <Route path="/player/:id" element={<SinglePlayer />} />
          <Route path="/search/:searchTerm" element={<AllPlayers />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;