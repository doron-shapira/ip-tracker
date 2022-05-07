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
  const handleSearch = input => setSearchedTerm(input);

  useEffect(() => {
    fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_5LqZwaTm71Hk15eY6jotNX7nINWEN&ipAddress=${searchedTerm}`)
      .then(async response => {
        if (response.ok) {
          const data = await response.json();
          document.querySelector('#ip strong').textContent = data.ip;
          document.querySelector('#location strong').textContent = data.location.region+', '+data.location.country;
          document.querySelector('#timezone strong').textContent = 'UTC'+data.location.timezone;
          document.querySelector('#isp strong').textContent = data.isp;
        }
        else {
          document.querySelector('input').setCustomValidity('Please enter a valid IP or Domain');
          document.querySelector('input').reportValidity();
        }
      })
      .catch(() => alert('Adblock is interfering with API fetch'));
  }, [searchedTerm]);

  return (
    <>
      <div className="blue-container">
        <HeaderAndInput handleSearch={handleSearch} />
        <Info />
      </div>
      <Map />
    </>
  );
}