import ReactDOM from 'react-dom/client';
import './styles/style.css';
import '../node_modules/leaflet/dist/leaflet.css';
import HeaderAndInput from './components/header-and-input';
import Info from './components/info';
import Map from './components/map';
import { useState, useEffect } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

function App() {
  const [searchedTerm, setSearchedTerm] = useState('');
  const [coords, setCoords] = useState({ lat: 0, long: 0 });
  const handleSearch = input => setSearchedTerm(input);

  useEffect(() => {
    fetch(`http://ipwho.is/${searchedTerm}`)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          document.querySelector('#ip strong').textContent = data.ip;
          document.querySelector('#location strong').textContent = data.city+', '+data.country;
          document.querySelector('#timezone strong').textContent = 'UTC '+data.timezone.utc;
          document.querySelector('#isp strong').textContent = data.connection.isp;
          setCoords({...coords, lat: data.latitude, long: data.longitude});
        }
        else {
          document.querySelector('input').setCustomValidity('Please enter a valid IP or Domain');
          document.querySelector('input').reportValidity();
        }
      })
  }, [searchedTerm]);

  return (
    <>
      <div className="blue-container">
        <HeaderAndInput handleSearch={handleSearch} />
        <Info />
      </div>
      <Map coords={coords} />
    </>
  );
}