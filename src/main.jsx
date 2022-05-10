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
  const [searchTerm, setSearchTerm] = useState('');
  const [info, setInfo] = useState({
    ip: '',
    location: '',
    timezone: '',
    isp: ''
  });
  const [coords, setCoords] = useState({ lat: 0, long: 0 });
  const handleSearch = input => setSearchTerm(input);
  const containsAnyLetter = str => /[a-zA-Z]/.test(str);

  const warnValidIpOrDomain = () => {
    document.querySelector('input').setCustomValidity('Please enter a valid IP or Domain');
    document.querySelector('input').reportValidity();
  }

  const fetchSetInfoCoords = async ip => {
    const response = await fetch(`https://ipwho.is/${ip}`);
    const data = await response.json();
    if (data.success) {
      setInfo({...info, ip: data.ip, location: data.city+', '+data.country, timezone: 'UTC '+data.timezone.utc, isp: data.connection.isp});
      setCoords({...coords, lat: data.latitude, long: data.longitude});
    } 
    else
      warnValidIpOrDomain();
  }

  useEffect(() => {
    if (containsAnyLetter(searchTerm)) {
      fetch(`https://dns.google/resolve?name=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
          if (data.hasOwnProperty('Answer'))
            fetchSetInfoCoords(data.Answer[0].data)
          else
            warnValidIpOrDomain();
        })
    }
    else
      fetchSetInfoCoords(searchTerm);
  }, [searchTerm])

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