import { createRoot } from 'react-dom/client';
import './index.css';

console.log('App mounting...');

try {
  createRoot(document.getElementById('root')!).render(
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to Earth Guardians</h1>
      <p>This is a test page to verify the site is working.</p>
      <p style={{ marginTop: '2rem', color: '#666' }}>If you see this, the deployment is successful!</p>
    </div>
  );
} catch (error) {
  console.error('App mounting error:', error);
}
