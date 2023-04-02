
import './App.css';
import Navbar from './components/navbar.js'
import NoteCard from './components/notecard';
import Home from './components/home'

function App() {
  return (
    <div className="App">
      <Home/>
      {/* <Navbar/> */}
      <NoteCard/>
    </div>
  );
}

export default App;
