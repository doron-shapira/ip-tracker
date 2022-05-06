import ReactDOM from 'react-dom/client';
import './styles/style.css';
import '../node_modules/leaflet/dist/leaflet.css';
import HeaderAndInput from './components/header-and-input';
import Info from './components/info';
import Map from './components/map';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

function App() {
  return (
    <>
      <div className="blue-container">
        <HeaderAndInput />
        <Info />
      </div>
      <Map />
    </>
  );
}