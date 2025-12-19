import { useState } from 'react';
import Home from './Home';
import Antropocene from './Antropocene';
import CrisiClimatica from './CrisiClimatica';
import Agenda2030 from './Agenda2030';
import RisorseEnergetiche from './RisorseEnergetiche';
import Acqua from './Acqua';
import Rifiuti from './Rifiuti';
import EconomiaCircolare from './EconomiaCircolare';
import Crediti from './Crediti';

export default function Index() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'antropocene':
        return <Antropocene />;
      case 'crisi':
        return <CrisiClimatica />;
      case 'agenda':
        return <Agenda2030 />;
      case 'energia':
        return <RisorseEnergetiche />;
      case 'acqua':
        return <Acqua />;
      case 'rifiuti':
        return <Rifiuti />;
      case 'economia':
        return <EconomiaCircolare />;
      case 'crediti':
        return <Crediti />;
      default:
        return <Home />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <nav style={{ backgroundColor: '#2c3e50', padding: '1rem 2rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', flexWrap: 'wrap', margin: 0, padding: 0 }}>
          <li><button onClick={() => setCurrentPage('home')} style={{ ...buttonStyle, ...(currentPage === 'home' ? activeButtonStyle : {}) }}>Home</button></li>
          <li><button onClick={() => setCurrentPage('antropocene')} style={{ ...buttonStyle, ...(currentPage === 'antropocene' ? activeButtonStyle : {}) }}>L'Antropocene</button></li>
          <li><button onClick={() => setCurrentPage('crisi')} style={{ ...buttonStyle, ...(currentPage === 'crisi' ? activeButtonStyle : {}) }}>Crisi Climatica</button></li>
          <li><button onClick={() => setCurrentPage('agenda')} style={{ ...buttonStyle, ...(currentPage === 'agenda' ? activeButtonStyle : {}) }}>Agenda 2030</button></li>
          <li><button onClick={() => setCurrentPage('energia')} style={{ ...buttonStyle, ...(currentPage === 'energia' ? activeButtonStyle : {}) }}>Risorse Energetiche</button></li>
          <li><button onClick={() => setCurrentPage('acqua')} style={{ ...buttonStyle, ...(currentPage === 'acqua' ? activeButtonStyle : {}) }}>L'Acqua</button></li>
          <li><button onClick={() => setCurrentPage('rifiuti')} style={{ ...buttonStyle, ...(currentPage === 'rifiuti' ? activeButtonStyle : {}) }}>I Rifiuti</button></li>
          <li><button onClick={() => setCurrentPage('economia')} style={{ ...buttonStyle, ...(currentPage === 'economia' ? activeButtonStyle : {}) }}>Economia Circolare</button></li>
          <li><button onClick={() => setCurrentPage('crediti')} style={{ ...buttonStyle, ...(currentPage === 'crediti' ? activeButtonStyle : {}) }}>Crediti</button></li>
        </ul>
      </nav>
      <div style={{ flex: 1, padding: '2rem' }}>
        {renderPage()}
      </div>
    </div>
  );
}

const buttonStyle = {
  color: 'white',
  textDecoration: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  transition: 'background-color 0.3s',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1rem',
};

const activeButtonStyle = {
  backgroundColor: '#3498db',
};

const hoverButtonStyle = {
  backgroundColor: '#34495e',
};
