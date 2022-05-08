import ReactDOM from 'react-dom/client';
import './styles/style.css';
import 'leaflet/dist/leaflet.css';
import HeaderAndInput from './components/header-and-input';
import Info from './components/info';
import Map from './components/map';
import { useState, useEffect } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

function App() {
  const [searchedTerm, setSearchedTerm] = useState('');
  const [info, setInfo] = useState({
    ip: '',
    location: '',
    timezone: '',
    isp: ''
  });
  const [coords, setCoords] = useState({ lat: 0, long: 0 });
  const handleSearch = input => setSearchedTerm(input);

  useEffect(() => {
    fetch(`http://ip-api.com/json/${searchedTerm}`)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          fetch(`http://ipwho.is/${data.query}`)
            .then(response => response.json())
            .then(data => {
              setInfo({...info, ip: data.ip, location: data.city+', '+data.country, timezone: data.timezone.utc, isp: data.connection.isp});
              setCoords({...coords, lat: data.latitude, long: data.longitude});
            })
            .catch(err => alert(err));
        }
        else {
          document.querySelector('input').setCustomValidity('Please enter a valid IP or Domain');
          document.querySelector('input').reportValidity();
        }
      })
      .catch(err => alert(err+'\nAdblock may be interfering with API fetch'));
  }, [searchedTerm]);

  return (
    <>
      <div className="blue-container">
        <HeaderAndInput handleSearch={handleSearch} />
        <Info info={info} />
      </div>
      <Map coords={coords} />
    </>
  );
}