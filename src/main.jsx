import ReactDOM from 'react-dom/client';
import './styles/style.css';
import HeaderAndInput from './components/header-and-input';
import Info from './components/info';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

function App() {
  return (
    <>
      <div className="blue-container">
        <HeaderAndInput />
        <Info />
      </div>
    </>
  );
}