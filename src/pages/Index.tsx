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

interface NavItem {
  id: string;
  label: string;
  icon: string;
  component: React.ReactNode;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: '🌍', component: <Home /> },
  { id: 'antropocene', label: 'L\'Antropocene', icon: '🌐', component: <Antropocene /> },
  { id: 'crisi', label: 'Crisi Climatica', icon: '⚠️', component: <CrisiClimatica /> },
  { id: 'agenda', label: 'Agenda 2030', icon: '🎯', component: <Agenda2030 /> },
  { id: 'energia', label: 'Risorse Energetiche', icon: '☀️', component: <RisorseEnergetiche /> },
  { id: 'acqua', label: 'L\'Acqua', icon: '💧', component: <Acqua /> },
  { id: 'rifiuti', label: 'I Rifiuti', icon: '♻️', component: <Rifiuti /> },
  { id: 'economia', label: 'Economia Circolare', icon: '🔄', component: <EconomiaCircolare /> },
  { id: 'crediti', label: 'Crediti', icon: '📋', component: <Crediti /> },
];

export default function Index() {
  const [currentPage, setCurrentPage] = useState('home');

  const getPage = () => {
    const item = navItems.find((i) => i.id === currentPage);
    return item ? item.component : navItems[0].component;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Navigation Bar */}
      <nav style={{
        backgroundColor: 'white',
        padding: '1.5rem 2rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h1 style={{ margin: 0, color: '#2c3e50', fontSize: '1.5rem', fontWeight: 'bold' }}>🌿 Earth Guardians</h1>
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            gap: '0.5rem',
            margin: 0,
            padding: 0,
            flexWrap: 'wrap',
            justifyContent: 'flex-end'
          }}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setCurrentPage(item.id)}
                  style={{
                    color: currentPage === item.id ? 'white' : '#2c3e50',
                    backgroundColor: currentPage === item.id ? '#27AE60' : 'transparent',
                    border: 'none',
                    padding: '0.75rem 1rem',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseOver={(e) => {
                    if (currentPage !== item.id) {
                      e.currentTarget.style.backgroundColor = '#e8e8e8';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (currentPage !== item.id) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {item.icon} {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        {getPage()}
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '2rem',
        textAlign: 'center',
        borderTop: '1px solid #34495e'
      }}>
        <p style={{ margin: '0.5rem 0' }}>© 2025 La Tutela Ambientale - Progetto Educativo</p>
        <p style={{ margin: '0.5rem 0', fontSize: '0.9rem', opacity: 0.8 }}>Educazione Civica • Classi Quinte • A.S. 2025-2026</p>
      </footer>
    </div>
  );
}
