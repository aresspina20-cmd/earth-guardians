export default function Home() {
  const themes = [
    {
      id: 'antropocene',
      title: 'L\'Antropocene',
      description: 'L\'epoca geologica dove l\'impatto umano è la forza dominante nel modificare il pianeta.',
      icon: '🌐',
    },
    {
      id: 'crisi',
      title: 'Crisi Climatica',
      description: 'Cause e conseguenze del cambiamento climatico causato dalle attività umane.',
      icon: '⚠️',
    },
    {
      id: 'agenda',
      title: 'Agenda 2030',
      description: 'I 17 obiettivi ONU per garantire un futuro sostenibile al pianeta.',
      icon: '🎯',
    },
    {
      id: 'energia',
      title: 'Risorse Energetiche',
      description: 'Confronto tra energie rinnovabili e non rinnovabili per un futuro pulito.',
      icon: '☀️',
    },
    {
      id: 'acqua',
      title: 'L\'Acqua',
      description: 'Gestione sostenibile della risorsa più preziosa del pianeta.',
      icon: '💧',
    },
    {
      id: 'rifiuti',
      title: 'I Rifiuti',
      description: 'Il problema dello smaltimento e l\'impatto devastante della plastica.',
      icon: '♻️',
    },
    {
      id: 'economia',
      title: 'Economia Circolare',
      description: 'Dal modello lineare al circolare per un\'economia sostenibile.',
      icon: '🔄',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(rgba(44, 62, 80, 0.7), rgba(44, 62, 80, 0.7)), url(\'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=500&fit=crop\')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '6rem 2rem',
        textAlign: 'center',
        minHeight: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{ maxWidth: '800px' }}>
          <p style={{ fontSize: '0.95rem', opacity: 0.9, marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
            Educazione Civica • Classi Quinte • A.S. 2025-2026
          </p>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            margin: '1rem 0',
            letterSpacing: '-0.02em'
          }}>
            La Tutela <span style={{ color: '#27AE60' }}>Ambientale</span>
          </h1>
          <p style={{
            fontSize: '1.2rem',
            lineHeight: 1.6,
            marginBottom: '2rem',
            opacity: 0.95
          }}>
            Un percorso educativo per comprendere le sfide ambientali del nostro tempo e scoprire come ciascuno di noi può contribuire a un futuro sostenibile.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              backgroundColor: '#27AE60',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#229954'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#27AE60'}
            >
              Inizia il Percorso →
            </button>
            <button style={{
              backgroundColor: 'transparent',
              color: 'white',
              border: '2px solid white',
              padding: '0.95rem 2rem',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
            >
              Chi Siamo
            </button>
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#f5f5f5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2rem',
            color: '#2c3e50',
            textAlign: 'center',
            marginBottom: '1rem'
          }}>
            Esplora i Temi
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            textAlign: 'center',
            marginBottom: '3rem',
            maxWidth: '700px',
            margin: '0 auto 3rem'
          }}>
            Sette capitoli interconnessi per comprendere la complessità delle sfide ambientali e le soluzioni possibili.
          </p>

          {/* Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {themes.map((theme) => (
              <div key={theme.id} style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: '1px solid #eee'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
              >
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  textAlign: 'center'
                }}>
                  {theme.icon}
                </div>
                <h3 style={{
                  fontSize: '1.4rem',
                  color: '#2c3e50',
                  marginBottom: '0.5rem'
                }}>
                  {theme.title}
                </h3>
                <p style={{
                  color: '#666',
                  lineHeight: 1.6,
                  marginBottom: '1rem'
                }}>
                  {theme.description}
                </p>
                <a href="#" style={{
                  color: '#27AE60',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'inline-block',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#229954';
                  e.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = '#27AE60';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
                >
                  Scopri di più →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '2rem',
          marginBottom: '1rem'
        }}>
          Il futuro del pianeta è nelle nostre mani
        </h2>
        <p style={{
          fontSize: '1.1rem',
          marginBottom: '2rem',
          opacity: 0.9,
          maxWidth: '600px',
          margin: '0 auto 2rem'
        }}>
          Ogni azione conta. Scopri come le tue scelte quotidiane possono fare la differenza per l\'ambiente.
        </p>
        <button style={{
          backgroundColor: '#27AE60',
          color: 'white',
          border: 'none',
          padding: '1rem 2rem',
          borderRadius: '8px',
          fontSize: '1rem',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#229954'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#27AE60'}
        >
          Comincia ad Esplorare
        </button>
      </section>
    </div>
  );
}
