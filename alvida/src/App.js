import Navbar from './components/Navbar';
import ProfileList from './components/ProfileList';
import JSONDATA from './data/BTech.json';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ProfileList profiles={JSONDATA}></ProfileList>
    </div>
  );
}

export default App;
